import axios from "axios";
import React, { useState } from "react";
import "./login.scss";

function Login() {
  //
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //
  const handleRemember = (e) => {
    setRememberMe(e.target.checked);
  };
  //
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  //
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        '/api/login',
        {
          email,
          password,
        },
        {
          Headers: {
            lang: "en",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.data);
      localStorage.setItem("token", response.data.data.token);
      window.location.to = "/";
    } catch (error) {
      setError("Invalid email or password ");
    }
  };
  //
  return (
    <section className="login">
      <article className="login_container">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              id="email"
              name="email"
              type="email"
              tabIndex="1"
              value={email}
              onChange={handleEmail}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-box">
            <input
              id="password"
              name="password"
              type="password"
              tabIndex="2"
              value={password}
              onChange={handlePassword}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="options">
            <div className="remember-me">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                tabIndex="3"
                checked={rememberMe}
                onChange={handleRemember}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="forget-password">
              <button>Forget Password ?</button>
            </div>
          </div>
          {error && <p>{error}</p>}
          <button
            className="btn-login"
            type="submit"
            title="Login"
            tabIndex="4"
          >
            Login
          </button>
          <p>
            Don't have an account?
            <a href="/login">Register</a>
          </p>
        </form>
      </article>
    </section>
  );
}

export default Login;
