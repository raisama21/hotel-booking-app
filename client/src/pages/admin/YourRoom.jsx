import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "../api/axios";

const id = "643b060d173ea2ea211eead2";

export default function YourRoom() {
  const [roomData, setRoomData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const detailLoader = useLoaderData();

  function handleChange(event) {
    const { name, value } = event.target;

    setRoomData((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.put(
        `/api/rooms/${id}`,
        JSON.stringify(roomData),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setRoomData({});

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="ml-80">
      <div className="max-w-3xl ml-8">
        <p>{detailLoader.name}</p>
        <p>{detailLoader.type}</p>
        <p>{detailLoader.maxcount}</p>
        <p>{detailLoader.phonenumber}</p>
        <p>Rs {detailLoader.rentperday}</p>

        <div className="flex gap-2">
          <button
            className="w-full py-2 bg-dark text-white"
            onClick={() => setShowModal((oldData) => !oldData)}
          >
            Edit
          </button>
          <button className="w-full py-2 bg-accent text-white">Delete</button>
        </div>
      </div>

      {showModal && (
        <form className=" max-w-3xl ml-8 p-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Hotel name"
            className="input-style"
            autoComplete="off"
            onChange={handleChange}
          />

          <select
            name="type"
            className="input-style"
            autoComplete="off"
            onChange={handleChange}
          >
            <option value="classic">Classic</option>
            <option value="deluxe">Deluxe</option>
          </select>

          <input
            type="number"
            name="maxcount"
            placeholder="Max number of people"
            className="input-style"
            autoComplete="off"
            onChange={handleChange}
          />

          <input
            type="number"
            name="phonenumber"
            placeholder="Phone number"
            className="input-style"
            autoComplete="off"
            onChange={handleChange}
          />

          <input
            type="number"
            name="rentperday"
            placeholder="Price"
            className="input-style"
            autoComplete="off"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="6"
            className="input-style"
            autoComplete="off"
            onChange={handleChange}
          ></textarea>

          <button className="w-full py-2 text-sm font-medium rounded-lg">
            Add room
          </button>
        </form>
      )}
    </section>
  );
}

export async function roomDetailLoader() {
  const response = await axios.get(`/api/rooms/details/${id}`);

  return response.data;
}
