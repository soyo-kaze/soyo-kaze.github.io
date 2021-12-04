import React, { useState } from "react";
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

const upper = [mongodb, fire, next, postman, node, js];
const lower = [python, react, github, frame1, frame];

const Modal = ({ imgSrc }) => {
  const [modal, setModal] = useState(true);
  const handleClose = () => setModal(true);
  const handleShow = () => setModal(false);
  // TODO: implement Animation on show and close
  return (
    <div>
      <img src={imgSrc} className="skill__img" onClick={handleShow} />
      <div
        className="fixed left-0 top-0 w-screen h-screen flex justify-center items-center bg-opacity-70 bg-black z-30 "
        style={{ display: `${modal ? "none" : "flex"}` }}
        onClick={handleClose}
      >
        <span className="bg-white max-w-xl p-6 rounded-lg m-4">
          <h1 className="font-bold text-4xl text-center">Modal title</h1>
          <div className="mt-4 flex space-x-4 flex-col md:flex-row space-y-2 justify-center items-center">
            <img src={imgSrc} className="skill__img" onClick={handleShow} />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              eleifend erat, quis rhoncus lectus. Maecenas mattis ante in
              pulvinar venenatis. Ut vestibulum gravida quam, id porttitor
              lectus posuere eu. Curabitur imperdiet porta ligula, quis iaculis
              mi rhoncus vitae.
            </p>
          </div>
          <div className="mt-4 flex w-full justify-center">
            <button
              onClick={handleClose}
              className="text-white bg-blue-500 rounded-lg shadow-md p-2"
            >
              Close
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <div className="flex flex-col mt-20 items-center justify-center container_div">
        <p className="upper_header">What's in my Arsenal</p>
        <span className="flex md:flex-row space-y-4 md:space-y-0 flex-col justify-center w-full items-center md:space-x-10 space-x-0 mt-24 ">
          {upper.map((a) => (
            <Modal imgSrc={a} />
          ))}
        </span>
        <span className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 w-full items-center md:space-x-10 space-x-0 md:mt-12 mt-0">
          {lower.map((a) => (
            <Modal imgSrc={a} />
          ))}
        </span>
      </div>
      {/* <Modal isTrue={modal} isAction={setModal} /> */}
    </>
  );
};

export default Tech;
