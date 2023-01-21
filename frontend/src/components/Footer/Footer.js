import React from "react";

export default function Footer() {
  return (
    <div className=" w-3/4 mx-auto mt-10 md:h-24">
      <div className="flex justify-between flex-wrap ">
        <img
          className="w-48"
          src="https://fanconvo.com/images/Fanconvo-header-logo.png"
          alt="Logo Image"
        />

        <h1>How Fanconvo Works?</h1>
        <h1>Terms of Use</h1>
        <h1>Contact Us</h1>
      </div>
      <h1 className="text-center mt-5">2021 Fanconvo</h1>
    </div>
  );
}
