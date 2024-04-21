// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="bg-[#fff] hidden lg:block">
        <div className="container mx-auto py-6 ">
        <div className="flex items-center justify-between text-[#000]">
        <div>
          <p className="text-[24px] tracking-[3%] font-bold ">Exclusive</p>
        </div>
        <div className="flex items-center gap-[48px]">
          <a href="#" className=" hover:underline ">
            Home
          </a>
          <a href="#" className=" hover:underline ">
            About
          </a>
          <a href="#" className="  hover:underline ">
            Contact
          </a>
          <a href="#" className=" hover:underline  ">
            Sign Up
          </a>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <input className="text-[12px] p-2 w-[153px] outline-[1px] outline-[#dddddd] " placeholder="What are you looking for?" type="text" />
            <button className="text-lg cursor-pointer" >
              <IoSearch/>
            </button>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <button className="cursor-pointer"><FaRegHeart /></button>
            <button className="cursor-pointer"><IoCartOutline /></button>
          </div>
        </div>
      </div>
        </div>
      
    </nav>
  );
}

export default Navbar;
