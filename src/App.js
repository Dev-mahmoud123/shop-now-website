import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home/Home.jsx";
import Products from "./containers/products/Products";
import Cart from "./containers/cart/Cart";
import Orders from "./containers/orders/Orders";
import Favorites from "./containers/favorites/Favorites";
import Complaints from "./containers/complaints/Complaints";
import Auth from "./containers/user/Auth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from "./containers/user/UserProfile";
import CategoryProducts from "./containers/home/CategoryProducts";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ToastContainer/>
      <Routes>
        <Route exact path="/" element=<Home /> />
        <Route exact path="/products" element=<Products /> />
        <Route exact path="/orders" element=<Orders /> />
        <Route exact path="/favorites" element=<Favorites /> />
        <Route exact path="/complaints" element=<Complaints /> />
        <Route exact path="/cart" element=<Cart /> />
        <Route exact path="/auth" element=<Auth /> />
        <Route exact path="/user-profile" element=<UserProfile /> />
        <Route exact path="/category_products/:id" element=<CategoryProducts/> />
      </Routes>
    </div>
  );
}

export default App;
