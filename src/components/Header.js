import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-around w-full p-4">
        <p className="font-ubuntu font-normal cursor-pointer">Soyokaze</p>
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