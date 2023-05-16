import logo from "../assets/img/logo.png";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Title = () => <img className="h-28" src={logo} alt="logo" />;

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className=" flex justify-between  bg-white px-[20px] shadow-lg ">
      <Link to="/">
        <Title />
      </Link>
      <div className="">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/signin">Sign In</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
