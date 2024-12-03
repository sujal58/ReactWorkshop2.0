import React from "react";
import { FaSearch } from "react-icons/fa";

function SubHeader() {
  const navlist = [
    {
      title: "Home",
    },
    {
      title: "Pages",
    },
    {
      title: "Courses",
    },
    {
      title: "Instructor",
    },
    {
      title: "Blog",
    },
    {
      title: "Contact",
    },
  ];
  return (
    <div>
      <div className="bg-white">
        <div className="flex item-center justify-between py-4 px-4 border-[1px] border-b-gray-300">
          <div className=" flex items-center uppercase font-bold text-black tracking-wider text-xl">
            cleaver
          </div>
          <div className="flex gap-20 items-center">
            <div className="flex gap-7 font-semibold text-gray-400  items-center">
              {navlist.map((value, index) => {
                return (
                  <div
                    className="hover:text-gray-600 cursor-pointer"
                    key={index}
                  >
                    {value.title}
                  </div>
                );
              })}
            </div>
            <div className="relative flex items-center">
              <div className="border-[1px] border-gray-300 rounded-lg">
                <input
                  type="search"
                  name="search"
                  placeholder="Search"
                  className="text-left text-md font-semibold py-2 pl-12 w-full"
                />
              </div>
              <div className="absolute text-gray-600 left-4 text-sm">
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="font-semibold flex items-center gap-5">
            <button className="w-fit h-fit capitalize text-primary bg-opacity-20 bg-none px-5 tracking-wide">
              REGISTER
            </button>
            <button className="w-fit h-fit bg-primary bg-opacity-25 px-7 py-[9px] text-primary rounded tracking-wide">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
