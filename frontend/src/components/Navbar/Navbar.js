import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="w-3/4 mx-auto bg-black">
      <div className="flex justify-between">
        <img
          className="w-48"
          src="https://fanconvo.com/images/Fanconvo-header-logo.png"
          alt="Logo Image"
        />
        <div className="flex">
          <button className="mr-3 ">Sign up</button>
          <button>Login</button>
        </div>
      </div>
      <div className="mt-2">
        <h6>A market place for conversations, mentorships and performance</h6>
      </div>
      <div className="mt-4 flex">
        <p className="sm:text-base mr-2 md:mr-5  md:text-xl">Search New Talent</p>
        <div className="border-emerald-500 sm:w-2/4 md:w-96 border-2  rounded-2xl h-8 bg-inherit  flex justify-end">
          <input className="ml-3 bg-inherit w-full outline-none"></input>
          <AiOutlineSearch className="mt-1 mr-2" />
        </div>
      </div>
    </div>
  );
}
