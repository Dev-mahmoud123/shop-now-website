import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.scss";

function Login(props) {
  //
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //
  const handleRemember = (e) => {
    setRememberMe(e.target.checked);
  };
  //
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  //
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "api/login",
        {
          email,
          password,
        },
        {
          headers: {
            lang: "en",
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data.message, {
        position: "bottom-left",
      });
      if (rememberMe) {
        localStorage.setItem("rememberMe", true);
      }
      localStorage.setItem("token", response.data.data.token); 
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "bottom-right",
      });
    }
  };
  //
  return (
    <div className="login">
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
          <span>Email</span>
          <i></i>
        </div>
        <div className="input-box">
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          <span>Password</span>
          <i></i>
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
        <button className="btn-submit" type="submit" title="Login" tabIndex="4">
          Login
        </button>
      </form>
      <p>
        Don't have an account?
        <button
          className="btn-register"
          onClick={() => props.onFormSwitch("register")}
        >
          Register
        </button>
      </p>
    </div>
  );
}

export default Login;
