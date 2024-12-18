import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router";
import Modal from "../UI/Modal";
import Login from "../PageComponent/Login";
import Register from "../PageComponent/Register";

function SubHeader() {
  const [isactive, setIsActive] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navlist = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Pages",
      path: "/pages",
    },
    {
      title: "Courses",
      path: "/courses",
    },
    {
      title: "Instructor",
      path: "/instructor",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const handleClick = (e) => {
    setIsActive(true);
    if (e === "login") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  return (
    <div>
      <div className="bg-white">
        <Modal isactive={isactive} setIsActive={setIsActive}>
          {isLogin ? <Login /> : <Register />}
        </Modal>
        <div className="flex item-center justify-between py-3 px-4 border-[1px] border-b-gray-300">
          <div className=" flex items-center uppercase font-bold text-black tracking-wider text-xl">
            cleaver
          </div>
          <div className="flex gap-20 items-center">
            <div className="flex gap-7 font-semibold  items-center">
              {navlist.map((value, index) => {
                return (
                  <NavLink
                    className={({ isActive }) =>
                      `  ${
                        isActive
                          ? "text-primary"
                          : "text-gray-400 hover:text-gray-600 cursor-pointer"
                      }`
                    }
                    key={index}
                    to={value.path}
                  >
                    {value.title}
                  </NavLink>
                );
              })}
            </div>
            <div className="relative flex items-center">
              <div className="flex items-center p-1 border-[1px] text-gray-500 rounded-lg">
                <FaSearch />
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="outline-none py-1 px-4"
                />
              </div>
            </div>
          </div>
          <div className="font-medium flex items-center gap-5">
            <button
              onClick={() => handleClick("register")}
              className="w-fit h-fit capitalize text-primary bg-opacity-20 bg-none px-5 tracking-wide"
            >
              REGISTER
            </button>
            <button
              onClick={() => handleClick("login")}
              className="w-fit h-fit bg-primary bg-opacity-25 px-4 py-[8px] text-primary rounded tracking-wide"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
