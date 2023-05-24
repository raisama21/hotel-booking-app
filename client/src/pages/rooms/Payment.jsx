import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../api/axios";

import PopupNotification from "../../components/PopupNotification";

export default function Payment() {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();

    const getBookingDetails = localStorage.getItem("booking_details");
    const details = JSON.parse(getBookingDetails);
    details.transactionId = searchParams.get("transaction_id");

    try {
      const response = await axios.post(
        "/api/booking/book-room",
        JSON.stringify(details),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (response.status === 201) {
      setMessage("Rooms has been reserved");
    }

    const timer = setTimeout(() => {
      setMessage("");

      setResponse({});
    }, 2500);

    return () => clearTimeout(timer);
  }, [response]);

  return (
    <section>
      <div className="max-w-xxl mx-auto">
        <form onSubmit={handleSubmit}>
          <button>confirm booking</button>
        </form>
      </div>

      {response.status === 201 ? <PopupNotification message={message} /> : ""}
    </section>
  );
}
