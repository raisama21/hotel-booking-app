import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useCookies } from "react-cookie";

import Bookings from "../../components/Bookings";
import BookingDetails from "../../components/BookingDetails";

export default function Details() {
  const details = useLoaderData();
  const [{ user_info }] = useCookies(["user_info"]);

  const [showModal, setShowModal] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const diffTime = Math.abs(Date.parse(fromDate) - Date.parse(toDate));
  const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const totalAmount = totalDays * details.rentperday;

  const bookingDetails = {
    roomId: details._id,
    userId: user_info?._id,
    room: details.name,
    fromDate: fromDate,
    toDate: toDate,
    totalAmount: totalAmount,
    totalDays: totalDays,
  };

  function storeBookingDetailsLocally() {
    /*
     * */
    localStorage.setItem("booking_details", JSON.stringify(bookingDetails));

    const getBookingDetails = JSON.parse(
      localStorage.getItem("booking_details")
    );

    if (getBookingDetails !== null) {
      setShowModal((oldData) => !oldData);
    }
  }

  return (
    <main>
      <div className="max-w-xxl mx-auto mt-12">
        <h1 className="text-dark">{details.name}</h1>
        <p>{details.description}</p>
        <Bookings
          price={details.rentperday}
          maxcount={details.maxcount}
          toDate={toDate}
          fromDate={fromDate}
          setToDate={setToDate}
          setFromDate={setFromDate}
          setShowModal={setShowModal}
          storeToLocalStorage={storeBookingDetailsLocally}
        />

        {showModal && (
          <BookingDetails
            hotelname={details.name}
            roomId={details._id}
            toDate={toDate}
            fromDate={fromDate}
            price={details.rentperday}
            totalDays={totalDays}
            totalAmount={totalAmount}
            maxcount={details.maxcount}
          />
        )}
      </div>
    </main>
  );
}

export async function detailsDataLoader({ params }) {
  const { detailsId } = params;

  const response = await fetch(
    `http://localhost:3000/api/rooms/details/${detailsId}`
  );

  if (!response.ok) {
    throw Error("Could not fetch detils page");
  }

  return response.json();
}
