import logo from "../../assets/app-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [btnName, setBtnName] = useState("SignIn");
  return (
    <div className="flex bg-white shadow-lg">
      <img className="ml-5 w-1/12 h-auto" src={logo} alt="app-logo" />

      <div className="flex justify-center w-9/12">
        <ul className="flex justify-center items-center">
          <li>
            <Link to={"/"} className="p-4 text-xl font-medium text-gray-700 hover:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="p-4 text-xl font-medium text-gray-700 hover:text-red-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="p-4 text-xl font-medium text-gray-700 hover:text-red-500"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to={"/bringme-mart"}
              className="p-4 text-xl font-medium text-gray-700  hover:text-red-500"
            >
              BringMart
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <ul className="flex items-center float-end">
          <li>
          <Link to="/cart" className="text-xl font-medium text-gray-700 hover:text-red-500">
            <span className="flex"><ShoppingCartIcon className="w-7" />(0)</span>
          </Link>
          </li>
          <li
            onClick={() => {
              btnName === "SignIn"
                ? setBtnName("SignOut")
                : setBtnName("SignIn");
            }}
            className="p-4 text-xl font-medium text-gray-700 cursor-pointer hover:text-red-500 mr-3"
          >
            {btnName}
          </li>
          </ul>
          </div>
    </div>
  );
};

export default Header;
