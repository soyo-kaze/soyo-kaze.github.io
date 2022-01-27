import React from "react";
import dp from "../assets/pic.png";
import bmc from "../assets/bmc.png";
import twitch from "../assets/twitch-tile.svg";
import github from "../assets/github.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter-tile.svg";
import medium from "../assets/medium-tile.svg";
import resume from "../assets/resume.pdf";
import yt from "../assets/youtube-icon.svg";
import dwnArr from "../assets/arrow.png";
import npmjs from "../assets/npmjs-icon.svg";

//import {Row,Col} from 'react-bootstrap';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const linksArray = [
    {
      img: twitch,
      link: "https://twitch.tv/kazetech",
      tag: "Twitch",
    },
    {
      img: twitter,
      link: "https://twitter.com/soyokaz3",
      tag: "Twitter",
    },
    {
      img: linkedin,
      link: "https://www.linkedin.com/in/sameer-aka-soyokaze/",
      tag: "LinkedIn",
    },
    {
      img: yt,
      link: "https://youtube.com/c/smgenz",
      tag: "Youtube",
    },
    {
      img: github,
      link: "https://github.com/soyo-kaze",
      tag: "GitHub",
    },
    {
      img: medium,
      link: "https://medium.com/@soyokaze",
      tag: "Medium",
    },
    {
      img: npmjs,
      link: "https://www.npmjs.com/~soyokaze",
      tag: "NPM",
    },
  ];
  console.log("hello");
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="w-full flex pl-10 pr-10 flex-col md items-center justify-center space-x-0 sm:flex-row sm:space-x-24">
          <span>
            <img src={dp} alt="my pic" className="object-contain h-m" />
          </span>
          <span>
            <p className="font-sams font-bold text-7xl">I'm Sameer saini</p>
            <p className="font-ubuntu text-lg mt-2 font-medium text-gray-600">
              Developer 🕸 | ReactJS ⚛ | Gamer 🎮
            </p>
            <span className="flex items-center space-x-4 ">
              {linksArray.map((a) => (
                <a href={a.link} target="_blank">
                  <img
                    src={a.img}
                    className="object-contain h-9 rounded-lg mt-8 filter  hover:mt-3 transform duration-200 ease-out grayscale opacity-25 hover:opacity-100 hover:filter-none hover:h-10"
                  />
                </a>
              ))}
            </span>
          </span>
        </div>
        <a href="#about">
          <span className="w-full flex items-center justify-center mt-6">
            <img
              src={dwnArr}
              alt="down arrow"
              className="object-contain h-32 ani_arr cursor-pointer"
            />
          </span>
        </a>
      </div>
    </>
  );
};

export default Home;
