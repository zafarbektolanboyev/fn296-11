import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backend } from "../axios";

function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function validate() {
    return true;
  }
  function handleLogin(e) {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    const user = {
      username,
      password,
    };
    backend
      .post("auth/signin", user, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.status == 200) {
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.status == 400) {
          alert(error.message);
          return;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }
  function handleRegister(e) {
    e.preventDefault();
    navigate("/register");
  }
  return (
    <div>
      <form className="w-[600px] mx-auto pt-[100px]  flex flex-col bg-white h-full p-[15px] gap-4">
        <h1 className="text-2xl">Login Page</h1>
        <input
          className="border p-3 rounded-md"
          type="text"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Enter username"
        />
        <div className="flex flex-row">
          <input
            className="border p-3 rounded-md w-full"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter password"
          />
          <span
            className="cursor-pointer btn"
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? "hide" : "show"}
          </span>
        </div>

        <button
          className="border p-3 rounded-md  btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>
        <button className="border p-3 rounded-md  btn" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Login;
