import React from "react";
import "./login.scss";

function Login() {
  return (
    <section className="login">
      <div className="login_container">
        <h3>Login</h3>
        <form>
          <div className="email-wrapper">
            <input id="email" type="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="password-wrapper">
            <input id="password" type="password" />
            <label htmlFor="password">Password</label>
          </div>
          <div className="options">
            <div className="remember-me">
              <input type="checkbox" value="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="forget-password">
              <button>Forget Password ?</button>
            </div>
          </div>
          <button className="btn-login">Login</button>
          <p>
            Don't have an account?
            <a href="/login">Register</a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
