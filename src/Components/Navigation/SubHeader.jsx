import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router";
import Modal from "../UI/Modal";
import Login from "../PageComponent/Login";
import Register from "../PageComponent/Register";

function SubHeader() {
  const [isactive, setIsActive] = useState(false);
  const [islogin, setIsLogin] = useState(false);
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
    e === "login" ? setIsLogin(true) : setIsLogin(false);
  };

  return (
    <div>
      <div className="bg-white">
        <Modal
          isactive={isactive}
          setIsActive={setIsActive}
          setIsLogin={setIsLogin}
        >
          {isactive && islogin ? <Login /> : <Register />}
          {/* <div className="w-96 flex flex-col gap-5">
            <div className="font-bold text-2xl transition-all delay-75 duration-1000">
              {isactive && islogin ? "Login" : "Register"}
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="outline-none border border-gray-300 py-2 px-4 placeholder:capitalize"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="outline-none border border-gray-300 py-2 px-4 placeholder:capitalize"
                />
              </div>
            </div>
            <div className="">
              <button className="relative group bg-none border border-primary px-8 py-2 text-primary shadow-lg rounded-md transition-all delay-75 ease-in-out duration-700">
                <div className="relative z-10 font-semibold transition-all  duration-700 group-hover:text-white">
                  {isactive && islogin ? "Login" : "Submit"}
                </div>
                <div className="absolute group-hover:w-full top-0 left-0 w-0 h-full bg-primary transition-all delay-75 ease-in-out duration-700"></div>
              </button>
            </div>
          </div> */}
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
