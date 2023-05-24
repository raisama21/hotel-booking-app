import { useLoaderData } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function MyBookings() {
  const MyBookings = useLoaderData();

  return (
    <div className="max-w-sm shadow-lg py-4 px-4">
      <p>{MyBookings?.room}</p>
      <p>Booking ID: {MyBookings?._id}</p>
      <p>Transaction ID: {MyBookings?.transactionId}</p>
      <p>Check In: {MyBookings?.fromDate}</p>
      <p>Check Out: {MyBookings?.toDate}</p>
      <p>Status: {MyBookings?.status}</p>
    </div>
  );
}

export async function MyBookingsLoader() {
  const response = await fetch(
    `http://localhost:3000/api/booking/user-booking-details/645e196abeb62f13131eefef`
  );

  if (!response.ok) {
    throw Error("Could not fetch your booking details");
  }

  return await response.json();
}
