import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../redux/actions/auth_action";

function Register(props) {
  //
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  //
  const handleRemember = (e) => {
    setRememberMe(e.target.checked);
  };
  //
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  //
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "/api/register",
  //       {
  //         name,
  //         phone,
  //         email,
  //         password,
  //       },
  //       {
  //         headers: {
  //           lang: "en",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     toast.success(response.data.message, {
  //       position: "bottom-right",
  //     });
  //     if (rememberMe) {
  //       localStorage.setItem("rememberMe", true);
  //     }
  //     localStorage.setItem("token", response.data.data.token);
  //     navigate("/");
  //   } catch (error) {
  //     toast.error(error.response.data.message, {
  //       position: "bottom-left",
  //     });
  //   }
  // };

 const dispatch = useDispatch();
 const formData = {name , phone , email, password};
  const handleSubmit = (event)=> {
    event.preventDefault();
    dispatch(createNewUser(formData)).then(navigate('/'));
  }
  //
  return (
    <div className="register">
      <h3>Register</h3>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            required
            type="text"
            name="username"
            value={name}
            onChange={handleName}
          />
          <span>Username</span>
          <i></i>
        </div>
        <div className="input-box">
          <input
            required
            type="tel"
            name="Phone"
            value={phone}
            onChange={handlePhone}
          />
          <span>Phone</span>
          <i></i>
        </div>
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
        </div>
        <button
          className="btn-submit"
          type="submit"
          title="Register"
          tabIndex="4"
        >
          Register
        </button>
        <p>
          Already have an account?
          <button
            className="btn-login"
            onClick={() => props.onFormSwitch("login")}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default Register;
