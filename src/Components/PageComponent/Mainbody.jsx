import React from "react";

function Mainbody() {
  return (
    <div className="mainbody h-[70vh]">
      <div className="flex flex-col gap-8 justify-center  items-center h-full">
        <div className="font-bold text-white text-5xl tracking-wide">
          Let's Study Together
        </div>
        <div className="w-fit px-12 py-3 bg-primary rounded-md">
          <button className="text-gray-300 font-semibold w-fit h-fit tracking-wide">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
