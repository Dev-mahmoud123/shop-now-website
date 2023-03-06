import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./login.scss";

function Login(props) {
  //
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
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
        "/api/login",
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
      setMessage(response.data.message);
      toast.success(message , {
        position: "bottom-right"
      })
      localStorage.setItem("token", response.data.data.token);
      navigate("/");
    } catch (_) {
      toast.error(message , {
        position: "bottom-left"
      })
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
        <button
          className="btn-submit"
          type="submit"
          title="Login"
          tabIndex="4"
        >
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
      <ToastContainer/>
    </div>
  );
}

export default Login;
