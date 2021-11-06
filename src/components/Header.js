import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full p-4 pl-6">
        <p className="font-ubuntu font-normal cursor-pointer">Soyokaze</p>
        <span className="flex z-20 fixed right-0 bottom-0 justify-center items-center">
          <span className=" p-4 bg-yellow-400 m-6 shadow-xl rounded-xl font-ubuntu font-semibold">
            <p> 🚧Under Construction🚧</p>
          </span>
        </span>
        <span className="flex space-x-4 border-2 border-gray-800 rounded shadow-lg">
          <p className="header__text">Home</p>
          <p className="header__text">Projects</p>
          <p className="header__text">Services</p>
        </span>
      </div>
    </>
  );
};

export default Header;
