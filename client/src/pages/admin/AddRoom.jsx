import { useState } from "react";
import axios from "../api/axios";

export default function AddRoom() {
  const [roomData, setRoomData] = useState({
    name: "",
    type: "",
    maxcount: "",
    phonenumber: "",
    rentperday: "",
    description: "",
  });

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
      const response = await axios.post(
        "/api/rooms",
        JSON.stringify(roomData),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setRoomData({
        name: "",
        type: "",
        maxcount: "",
        phonenumber: "",
        rentperday: "",
        description: "",
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="ml-80">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Hotel name"
          className="input-style"
          autoComplete="off"
          onChange={handleChange}
          value={roomData.name}
        />

        <select
          name="type"
          className="input-style"
          autoComplete="off"
          onChange={handleChange}
          value={roomData.type}
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
          value={roomData.maxcount}
        />

        <input
          type="number"
          name="phonenumber"
          placeholder="Phone number"
          className="input-style"
          autoComplete="off"
          onChange={handleChange}
          value={roomData.phonenumber}
        />

        <input
          type="number"
          name="rentperday"
          placeholder="Price"
          className="input-style"
          autoComplete="off"
          onChange={handleChange}
          value={roomData.rentperday}
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="6"
          className="input-style"
          autoComplete="off"
          onChange={handleChange}
          value={roomData.description}
        ></textarea>

        <button className="w-full py-2 text-sm font-medium rounded-lg">
          Add room
        </button>
      </form>
    </section>
  );
}
