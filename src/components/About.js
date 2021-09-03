import React from "react";
import dp from "../assets/pic.png";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="pl-10 pr-10 pt-10 sm:pl-44 sm:pr-44 mt-10 flex flex-col sm:flex-row sm:items-center bg-gray-200"
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
          <img src="https://www.edten.com/site-new/images/improves-credibility-legitimacy-of-your-brand.png" />
        </span>
      </div>
    </>
  );
};

export default About;
