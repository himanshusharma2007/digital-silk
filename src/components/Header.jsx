import React from "react";
import { RiMenu3Line } from "react-icons/ri";
const Header = () => {
  return (
    <div className=" fixed w-screen  bg-glass backdrop-blur-md shadow-md z-50">
      <header className="flex justify-center py-2  px-6">
        <div className="wraper flex justify-between items-center  w-full">
          <h1 className="text-4xl font-bold text-white ">DIGITALSILK</h1>
          <div className="flex space-x-4">
            <button className=" text-white border-2 border-white px-4 py-2 rounded tracking-widest">
              REQUEST A QUOTE
            </button>
            <button className="bg-transparent text-white font-bold flex justify-center items-center space-x-3  px-4 py-2 rounded">
              <RiMenu3Line fontSize={38} /> <div className="text-2xl">MENU</div>
            </button>
          </div>
        </div>
      </header>
      <div className="line w-screen h-[1px] bg-gray-400 z-40"></div>
    </div>
  );
};

export default Header;
