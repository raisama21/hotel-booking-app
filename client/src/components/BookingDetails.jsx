import { useCookies } from "react-cookie";

import KhaltiPaymentGateway from "./KhaltiPaymentGateway";

export default function BookingDetails(props) {
  const [{ user_info }] = useCookies(["user_info"]);

  return (
    <div>
      <div className="fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 shadow-lg">
        <p>{user_info?.username}</p>
        <p>{props.fromDate}</p>
        <p>{props.toDate}</p>
        <p>{props.totalDays}</p>
        <p>{props.price}</p>
        <p>{props.totalAmount}</p>
        <KhaltiPaymentGateway
          roomId={props.roomId}
          hotelName={props.hotelname}
          price={props.price}
          totalDays={props.totalDays}
          totalAmount={props.totalAmount}
        />
      </div>
    </div>
  );
}
