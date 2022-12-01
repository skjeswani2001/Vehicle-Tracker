import { Button } from "@mui/material";
import React from "react";
import "./login.css";
import { useState } from "react";
import setBg from "../../components/setbg";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email + "--" + password);

    const data = await fetch("https://staging-api.tracknerd.io/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password: password }),
    });

    const userData = await data.json();
    const { token } = userData;
    console.log(userData, "userData");
    if (token) {
      props.getUserDetail(userData);
      console.log(userData);
    } else {
      alert("Incorrect Email OR Password");
      event.target.reset();
    }
  };

  return (
    <div className="all" onLoad={setBg({ color: "#243b55" })}>
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="email"
              aria-describedby="emailHelp"
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="Email address"
            />
          </div>
          <div className="user-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <a type="submit" onClick={handleSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
