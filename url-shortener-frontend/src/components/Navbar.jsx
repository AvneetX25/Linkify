import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  return (
    <div className="h-16 bg-gradient-to-r from-blue-500 to-purple-500  z-50 flex items-center sticky top-0">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-3xl text-white italic">Linkify</h1>
        </Link>

        {/* Desktop + Mobile Menu */}
        <ul
          className={`flex sm:gap-10 gap-4 text-slate-800 sm:items-center sm:static absolute left-0 top-[62px] sm:shadow-none shadow-md ${
            navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
          } transition-all duration-200 sm:h-fit sm:bg-transparent bg-custom-gradient sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
        >
          <li className="hover:text-btnColor font-[500] transition-all duration-150">
            <Link
              className={`${
                path === "/" ? "text-white font-semibold" : "text-gray-200"
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="hover:text-btnColor font-[500] transition-all duration-150">
            <Link
              className={`${
                path === "/about" ? "text-white font-semibold" : "text-gray-200"
              }`}
              to="/about"
            >
              About
            </Link>
          </li>

          {token && (
            <li className="hover:text-btnColor font-[500] transition-all duration-150">
              <Link
                className={`${
                  path === "/dashboard"
                    ? "text-white font-semibold"
                    : "text-gray-200"
                }`}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}

          {/* SignUp / LogOut */}
          <li className="sm:ml-4 mt-2 sm:mt-0">
            {!token ? (
              <Link to="/register">
                <button className="bg-rose-700 text-white font-semibold px-4 py-2 rounded-md hover:text-slate-300 transition-all duration-150">
                  SignUp
                </button>
              </Link>
            ) : (
              <button
                onClick={onLogOutHandler}
                className="bg-rose-700 text-white font-semibold px-4 py-2 rounded-md hover:text-slate-300 transition-all duration-150"
              >
                LogOut
              </button>
            )}
          </li>
        </ul>

        {/* Menu Toggle Button (Mobile) */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center"
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
