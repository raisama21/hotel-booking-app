import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Rooms() {
  const [dateValue, setDateValue] = useState({
    fromDate: "",
    toDate: "",
  });

  let roomsLoader = useLoaderData();

  function handleChange(event) {
    const { value, name } = event.target;

    setDateValue((oldDate) => {
      return {
        ...oldDate,
        [name]: value,
      };
    });
  }

  function getBookedRoomsId(rooms, dateValue) {
    let idArray = [];

    for (let i = 0; i < rooms.length; i++) {
      const room = rooms[i];

      if (room.currentbookings.length > 0) {
        for (let j = 0; j < room.currentbookings.length; j++) {
          const currentbooking = room.currentbookings[j];

          if (
            (currentbooking.fromDate >= dateValue.fromDate &&
              currentbooking.toDate <= dateValue.toDate) ||
            (currentbooking.toDate >= dateValue.fromDate &&
              currentbooking.toDate <= dateValue.toDate) ||
            (currentbooking.fromDate >= dateValue.fromDate &&
              currentbooking.fromDate <= dateValue.toDate)
          ) {
            idArray.push(room._id);
          }
        }
      }
    }

    return idArray;
  }

  const newBookedRoomsId = getBookedRoomsId(roomsLoader, dateValue);

  const rooms = roomsLoader.filter(
    (room) => !newBookedRoomsId.includes(room._id)
  );

  return (
    <section>
      <div className="max-w-xxl mx-auto mt-8 flex gap-4 justify-center">
        <input
          type="date"
          name="fromDate"
          onChange={handleChange}
          value={dateValue.fromDate}
          className="border border-black/60 rounded-lg py-1 px-2"
        />

        <input
          type="date"
          name="toDate"
          onChange={handleChange}
          value={dateValue.toDate}
          className="border border-black/60 rounded-lg py-1 px-2"
        />
      </div>

      <div className="max-w-[1764px] mx-auto mt-8 grid grid-cols-[repeat(auto-fit,_minmax(18.375rem,_1fr))] gap-x-1">
        {rooms.map((room) => {
          return (
            <article
              key={room._id}
              className="stacked aspect-square xs:aspect-[1.15/1] sm:aspect-square"
            >
              <div className="mb-2">
                <Link to={`details/${room._id}`}>
                  <img src={room.imageurls[0]} />
                </Link>
              </div>

              <div className="z-10 bg-white self-end mt-2 mx-2 mb-8 p-2 card-content-shadow">
                <Link to={`details/${room._id}`}>
                  <h2 className="text-dark font-bold">{room.name}</h2>
                </Link>
                <p className="mt-1 text-sm font-medium text-gray-600/70">
                  near awsome place
                </p>
                <p className=" mb-1 text-sm font-medium text-gray-600/70">
                  Available
                </p>
                <p className="text-sm font-normal">
                  <span className="text-xl">&#x20B9;{room.rentperday}</span>
                  night
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export async function roomsDataLoader() {
  const response = await fetch("http://localhost:3000/api/rooms");

  if (!response.ok) {
    throw Error("Could not fetch room page");
  }

  return response.json();
}
