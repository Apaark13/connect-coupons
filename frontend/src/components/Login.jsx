// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  const { login } = useAuth();

  async function loginUser(event) {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      console.log(data, email)
      if (data.status === "ok") {
        // Call the login method with user data to update the authentication state
        login(email);
        navigateTo("/");
      } else {
        console.error("Login failed:", data.error);
        // Handle login failure, display error message, etc.
      }

    } catch (error) {
      console.error("An error occurred during login:", error);
      // Handle other errors, display error message, etc.
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={loginUser}>
      <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input className="button" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
