import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./auth.scss";

function Auth() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <section className="auth">
      <div className="wrapper">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </section>
  );
}

export default Auth;
