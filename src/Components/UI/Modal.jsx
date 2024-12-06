import React from "react";

function Modal({ isactive, setIsActive, children, setIsLogin }) {
  console.log(isactive);
  return (
    <div className="relative">
      <div
        className={`h-fit w-fit border shadow-xl shadow-gray-300 top-10 left-0 right-0 z-50 mx-auto absolute p-10 bg-white transition-all ease-in-out duration-700 delay-75 ${
          isactive ? "translate-y-0 " : "-translate-y-[90vh]"
        }`}
      >
        {children}
        <div
          onClick={() => {
            setIsActive(false);
          }}
          className="flex items-center justify-center text-white absolute -top-2 -right-4 z-50 bg-red-500 font-semibold p-3 w-10 h-10 rounded-3xl cursor-pointer transition-all duration-700 delay-75"
        >
          X
        </div>
      </div>
    </div>
  );
}

export default Modal;
