import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function KhaltiPaymentGateway(props) {
  const { detailsId } = useParams();

  const [{ user_info }, removeCookie] = useCookies(["user_info"]);
  const RETURN_URL = `http://localhost:5173/rooms/details/${detailsId}/payment`;
  const KHALTI_PAYMENT_URL =
    "http://localhost:3000/api/khalti-payment-initiate";

  const amount = props.amount * 100;
  const totalAmount = props.totalAmount * 100;

  const payload = {
    return_url: RETURN_URL,
    website_url: `http://localhost:5173/rooms/details/${detailsId}`,
    amount: 1300,
    purchase_order_id: uuidv4(),
    purchase_order_name: props.hotelName,
    customer_info: {
      name: user_info?.username,
      email: user_info?.email,
      phone: "9811496763",
    },
    amount_breakdown: [
      {
        label: "Mark Price",
        amount: 1000,
      },
      {
        label: "VAT",
        amount: 300,
      },
    ],
    product_details: [
      {
        identity: props.roomId,
        name: props.hotelName,
        total_price: 1300,
        quantity: props.totalDays,
        unit_price: 1300,
      },
    ],
  };

  async function handlePayment(event) {
    event.preventDefault();

    try {
      const response = await fetch(KHALTI_PAYMENT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data?.payment_url) {
        window.location.href = data?.payment_url;
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handlePayment}>
      <button>Pay with Khalti</button>
    </form>
  );
}
