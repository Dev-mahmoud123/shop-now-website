import logo from "../../src/images/shop-logo.png";
import './navBar.scss'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/#">
        <img src={logo} alt="shop now logo"  className="logo"/>
        </a>
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
              <a className="nav-link active" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
               Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Favorites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Complaints
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Carts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Login
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
