import axios from "axios";
import React, { useEffect, useState } from "react";
import "./user-profile.scss";

function UserProfile() {
  const [userData, setUserData] = useState("");

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("/api/profile", {
        headers: {
          lang: "en",
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      setUserData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <section className="user-profile">
      <div className="wrapper">
        <h3>Profile</h3>
        <div className="content">
          <div className="main-info">
            <img src={userData.image} alt="user-imag" />
            <p>{userData.name}</p>
          </div>
          <div className="side-info">
            <p>
              <span>Email:</span>
              {userData.email}
            </p>
            <p>
              <span>Phone:</span>
              {userData.phone}
            </p>
            <p>
              <span>Points:</span>
              {userData.points}
            </p>
            <p>
              <span>Credit:</span>
              {userData.credit}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
