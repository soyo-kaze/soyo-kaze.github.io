import React from "react";
import mongodb from "../assets/New folder/MongoDB.svg";
import fire from "../assets/New folder/firebase.svg";
import github from "../assets/New folder/GitHub.svg";
import js from "../assets/New folder/JavaScript.svg";
import node from "../assets/New folder/Nodejs.svg";
import python from "../assets/New folder/Python.svg";
import react from "../assets/New folder/React Native.svg";
import postman from "../assets/New folder/Postman Api.svg";
import next from "../assets/New folder/some 1.svg";
import frame1 from "../assets/New folder/Frame-1.svg";
import frame from "../assets/New folder/Frame.svg";

const upper = [mongodb, fire, github, postman, node, js];
const lower = [python, react, next, frame1, frame];

const Tech = () => {
  return (
    <>
      <div className="flex flex-col mt-20 items-center justify-center container_div">
        <p className="upper_header">What's in my Arsenal</p>
        <span className="flex md:flex-row space-y-4 md:space-y-0 flex-col justify-center w-full items-center md:space-x-10 space-x-0 mt-24 ">
          {upper.map((a) => (
            <img src={a} height="100px" width="100px" />
          ))}
        </span>
        <span className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 w-full items-center md:space-x-10 space-x-0 md:mt-12 mt-0">
          {lower.map((a) => (
            <img src={a} height="100px" width="100px" />
          ))}
        </span>
      </div>
    </>
  );
};

export default Tech;
