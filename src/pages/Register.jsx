import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backend } from "../axios";

function Register() {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function validate() {
    return true;
  }
  function handleRegister(e) {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    const user = {
      username,
      email,
      password,
    };
    setLoading(true);
    backend
      .post("auth/signup", user, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.status == 200) {
          navigate("/login");
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
  function handleLogin(e) {
    e.preventDefault();
    navigate("/login");
  }
  return (
    <div className="pt-20">
      <form className="w-[600px] mx-auto pt-[100px]  flex flex-col bg-white h-full p-[15px] gap-4">
        <h1 className="text-2xl">Register Page</h1>
        <input
          className="border p-3 rounded-md"
          type="text"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Enter username"
        />
        <input
          className="border p-3 rounded-md"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter email"
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
            {show ? "hide":"show"}
          </span>
        </div>
        <input
          className="border p-3 rounded-md"
          type="password"
          value={rePassword}
          onChange={(e) => {
            setRePassword(e.target.value);
          }}
          placeholder="Enter repeat password"
        />

        <button
          className="border p-3 rounded-md  btn"
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? "Loading..." : "Register"}
        </button>
        <button className="border p-3 rounded-md  btn" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Register;