import { useSelector } from "react-redux";
import logo from "../../src/images/shop-logo.png";
import "./navBar.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  console.log(user.isLogged);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} className="logo" alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/orders">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/favorites">
                Favorites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/complaints">
                Complaints
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Carts
              </a>
            </li>
            <li className="nav-item">
              {user.isLogged ? (
                <a className="nav-link" href="/user-profile">
                  <img
                    className="user_image"
                    src={user.users.data.data.image}
                    alt="user-img"
                  />
                  <span>{user.users.data.data.name.substring(0,3)}</span>
                </a>
              ) : (
                <a className="nav-link" href="/auth">
                  Login
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
