import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../index";
import { IoCart } from "react-icons/io5";
import { useCartValue } from "../../CartContext";
function Navbar() {
  const [cartProduct, setCartProduct] = useCartValue();

  return (
    <div className=" flex items-center justify-around border-b-[1px] border-zinc-300">
      <div>
        <img className="w-32" src={logo} alt="" />
      </div>
      <div>
        <div>{/* {searchbar} */}</div>
        <div className="flex gap-6">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to={"/category"}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Category
          </NavLink>
        </div>
      </div>
      <div className="flex items-center gap-20">
        {/* <Button className="bg-white border-[1px] cursor-pointer border-black">
          Login
        </Button> */}
        <Link to="/cart" className="relative">
          <IoCart className="cursor-pointer text-4xl" />
          <span className="w-4 h-4 bg-red-600 absolute top-0 right-0 rounded-full text-xs text-white text-center font-semibold">
            {cartProduct.length}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
