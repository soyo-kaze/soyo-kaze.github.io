import React from "react";
import dp from "../assets/hero.png";

const About = () => {
  return (
    <>
      <div className="wave_round"></div>
      <div
        id="about"
        className="pl-10 pr-10 pt-20 pb-14 sm:pl-44 sm:pt-0 sm:pr-44 m-0 flex flex-col sm:flex-row sm:items-center bg-gray-200 border_round shadow-xl"
      >
        <span className="sm:pr-20 sm:w-3/4">
          <p className="upper_header">Who Am I?</p>
          <hr className="w-1/6" />
          <br></br>
          <p className="about">
            I am a senior undergrad at BKBIET, Pilani, persuing my B.Tech in
            Computer Science. Former{" "}
            <strong>Google Developer Student Club lead</strong>. I develop Web
            Apps in <strong>ReactJS⚛</strong>, Code in JavaScript and Python.
            Learning my way to become a <strong>Fullstack Web Dev.</strong>
          </p>
        </span>
        <span>
          <img className=" object-contain h-60" src={dp} />
        </span>
      </div>
    </>
  );
};

export default About;
