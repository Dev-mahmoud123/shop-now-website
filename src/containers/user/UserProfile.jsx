import React, { useEffect,} from "react";
import "./user-profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../redux/actions/auth_action";

function UserProfile() {
  // const [userData, setUserData] = useState("");

  // const getUserData = async () => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     const response = await axios.get("/api/profile", {
  //       headers: {
  //         lang: "en",
  //         "Content-Type": "application/json",
  //         Authorization: token,
  //       },
  //     });
  //     setUserData(response.data.data);
  //     console.log(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user)
  console.log(userState.users.data.data)

  useEffect(() => {
    dispatch(getLoggedUser());
  }, [dispatch]);

  return (
    <section className="user-profile">
      <div className="wrapper">
        <h3>Profile</h3>
        <span>{userState.users.data.data.name}</span>
        <div className="content">
          <div className="main-info">
            <img src={userState.users.data.data.image} alt="user-imag" />
            <p>{userState.users.data.name}</p>
          </div>
          <div className="side-info">
            <p>
              <span>Email:</span>
              {userState.users.data.data.email}
            </p>
            <p>
              <span>Phone:</span>
              {userState.users.data.data.phone}
            </p>
            <p>
              <span>Points:</span>
              {userState.users.data.data.points}
            </p>
            <p>
              <span>Credit:</span>
              {userState.users.data.data.credit}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
