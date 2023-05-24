import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PopupNotification from "../components/PopupNotification";

const REGISTER_URL = "http://localhost:3000/api/user/register";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [response, setResponse] = useState({});
  const [successMessage, setSucessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (response.status === 201) {
      setSucessMessage("your account has been created");
    }

    const timer = setTimeout(() => {
      setSucessMessage("");
    }, 2500);

    return () => clearTimeout(timer);
  }, [response]);

  useEffect(() => {
    if (response.status === 409) {
      setErrorMessage("account already exist");
    }

    const timer = setTimeout(() => {
      setErrorMessage("");

      setResponse({});
    }, 2500);

    return () => clearTimeout(timer);
  }, [response]);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(REGISTER_URL, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      setRegisterData({
        username: "",
        email: "",
        password: "",
      });

      setResponse(response);

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    const { value, name } = event.target;

    setRegisterData((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="max-w-xs ml-6 mt-12">
          <div>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              autoComplete="off"
              className="input-style mt-3"
              onChange={handleChange}
              value={registerData.username}
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className="input-style my-4"
              onChange={handleChange}
              value={registerData.email}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="on"
              className="input-style mb-4"
              onChange={handleChange}
              value={registerData.password}
            />
          </div>

          <button className="w-full mt-4 py-3 rounded-lg text-sm font-medium text-white bg-gray-500">
            Continue
          </button>

          <div className="mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </form>

      {response.status === 201 ? (
        <PopupNotification message={successMessage} />
      ) : (
        ""
      )}

      {response.status === 409 ? (
        <PopupNotification message={errorMessage} />
      ) : (
        ""
      )}
    </section>
  );
}
