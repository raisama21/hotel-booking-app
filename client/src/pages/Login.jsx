import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "./api/axios";
import PopupNotification from "../components/PopupNotification";

export default function Register() {
  const LOGIN_URL = "api/user/auth";

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [response, setResponse] = useState({});

  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [pwdErrMsg, setPwdErrMsg] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify(loginData), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setResponse(response);

      setLoginData({ email: "", password: "" });
    } catch (error) {
      setResponse(error.response);
    }
  }

  function handleChange(event) {
    const { value, name } = event.target;

    setLoginData((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    if (response.status === 404) {
      setEmailErrMsg("Account does not exist");
    }

    const timer = setTimeout(() => {
      setEmailErrMsg("");
    }, 2500);

    return () => clearTimeout(timer);
  }, [response]);

  useEffect(() => {
    if (response.status === 401) {
      setPwdErrMsg("email or password incorrect");
    }

    const timer = setTimeout(() => {
      setPwdErrMsg("");
    }, 2500);

    return () => clearTimeout(timer);
  }, [response]);

  if (response.status === 200) {
    return <Navigate to="/rooms" />;
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="max-w-[375px] ml-6 mt-12">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className="input-style my-4"
              onChange={handleChange}
              value={loginData.email}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="on"
              className="input-style"
              onChange={handleChange}
              value={loginData.password}
            />
          </div>

          <button className="w-full mt-8 py-3 rounded-lg text-sm font-medium text-white bg-gray-500">
            Continue
          </button>

          <div className="mt-3">
            Don't have and account? <Link to="/signup">Register</Link>
          </div>
        </div>
      </form>

      {response.status === 404 ? (
        <PopupNotification message={emailErrMsg} />
      ) : (
        ""
      )}

      {response.status === 401 ? <PopupNotification message={pwdErrMsg} /> : ""}
    </section>
  );
}
