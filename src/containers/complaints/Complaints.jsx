import React, { useState } from "react";
import "./complaint.scss";
import axios from "axios";
import { toast } from "react-toastify";

function Complaints() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "/api/complaints",
        {
          name,
          phone,
          email,
          message,
        },
        {
          headers: {
            lang: "en",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.data)
      toast.success(response.data.message, {
        position: "bottom-left",
      });
    } catch (error) {
      toast.error("error to send message", {
        position: "bottom-right",
      });
    }
  };
  return (
    <section className="complaint_page">
      <div className="container">
        <h3>Send Complaint</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={handleName}
          />
          <label htmlFor="phone ">Phone:</label>
          <input
            type="tel"
            id="phone"
            required
            value={phone}
            onChange={handlePhone}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={handleEmail}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            id="message"
            required
            value={message}
            onChange={handleMessage}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Complaints;
