import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full p-4 pl-6">
        <p className="font-sams font-bold cursor-pointer">SOYOKAZE</p>
        {/* <span className="flex z-20 fixed right-0 bottom-0 justify-center items-center">
          <span className=" p-4 bg-yellow-400 m-6 shadow-xl rounded-xl font-ubuntu font-semibold">
            <p> 🚧Under Construction🚧</p>
          </span>
        </span> */}

        <span className="flex space-x-4 border-2 border-gray-800 rounded shadow-lg">
          <a href="#skills" className="header__text">
            Skills
          </a>
          <a href="#blogs" className="header__text">
            Blogs
          </a>
          <a href="#projects" className="header__text">
            Projects
          </a>
        </span>
      </div>
    </>
  );
};

export default Header;
