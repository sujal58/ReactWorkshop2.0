import React from "react";

function Login() {
  return (
    <div className="w-96 flex flex-col gap-5">
      <div className="font-bold text-2xl transition-all delay-75 duration-1000">
        Login
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
            Login
          </div>
          <div className="absolute group-hover:w-full top-0 left-0 w-0 h-full bg-primary transition-all delay-75 ease-in-out duration-700"></div>
        </button>
      </div>
    </div>
  );
}

export default Login;
