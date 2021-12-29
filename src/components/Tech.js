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

const upper = [
  { img: mongodb, date: "Nov 2021", title: "MongoDB", exp: "<1", projects: 1 },
  { img: fire, date: "Feb 2021", title: "Firebase", exp: "<1", projects: 1 },
  { img: next, date: "Sep 2021", title: "NextJS", exp: "<1", projects: 2 },
  { img: postman, date: "July 2021", title: "Postman", exp: "<1", projects: 1 },
  { img: node, date: "Sep 2020", title: "NodeJs", exp: "1+", projects: 4 },
  { img: js, date: "Sep 2020", title: "JavaScript", exp: "1+", projects: 4 },
];
const lower = [
  { img: python, date: "Nov 2018", title: "Python", exp: "2+", projects: 4 },
  { img: react, date: "Dec 2020", title: "ReactJS", exp: "1+", projects: 4 },
  { img: github, date: "Sep 2018", title: "GitHub", exp: "2+", projects: 60 },
  { img: frame1, date: "Mar 2021", title: "Travis-CI", exp: "1+", projects: 4 },
  {
    img: frame,
    date: "Sep 2021",
    title: "TailwindCSS",
    exp: "<1",
    projects: 4,
  },
];

const Modal = ({ imgSrc, title, exp, date, projects }) => {
  const [modal, setModal] = useState(true);
  const [ani, setAni] = useState({ fadeIn: "", translate: "" });
  const handleClose = () => {
    setAni({ fadeIn: "fadeInRev", translate: "translateRev" });
    setTimeout(() => setModal(true), 700);
  };
  const handleShow = () => {
    setAni({ fadeIn: "fadeIn", translate: "translate" });
    setModal(false);
  };
  return (
    <div>
      <div className="animate-translate "></div>
      <div className="animate-fadeInRev"></div>
      <div className=" animate-translateRev "></div>
      <div className="animate-fadeIn"></div>
      <img src={imgSrc} className="skill__img" onClick={handleShow} />
      <div
        className={
          "fixed left-0 top-0 w-screen h-screen flex justify-center items-center bg-opacity-70 bg-black z-30 " +
          `animate-${ani.fadeIn}`
        }
        style={{ display: `${modal ? "none" : "flex"}` }}
        onClick={handleClose}
      >
        <span
          className={
            "bg-white max-w-xl p-6 rounded-lg m-4 " + `animate-${ani.translate}`
          }
        >
          <h1 className="font-bold text-4xl text-center">{title}</h1>
          <div className="mt-4 flex space-x-4 flex-col md:flex-row space-y-2 justify-center items-center mb-4 font-ubuntu">
            <img src={imgSrc} className="skill__img" onClick={handleShow} />
            <div className="flex flex-col space-y-2 justify-end">
              <span
                id="started"
                className="flex w-full justify-start items-center"
              >
                <div>Started on:</div>
                <div
                  className="p-[3px] bg-red-600 text-white font-semibold text-sm rounded-lg"
                  style={{
                    marginLeft: "4px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                >
                  {date}
                </div>
              </span>
              <span
                id="experience"
                className="flex w-full justify-start items-center"
              >
                <div>Exp:</div>
                <div
                  className="p-[3px] bg-blue-600 text-white font-semibold text-sm rounded-lg"
                  style={{
                    marginLeft: "4px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                >
                  {exp} yrs
                </div>
              </span>
              <span id="Project" className="flex justify-start items-center ">
                <span>
                  <p>Projects:</p>
                </span>
                <div
                  className="font-semibold text-sm rounded-lg bg-green-600 p-[3px] text-white"
                  style={{
                    marginLeft: "4px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                >
                  {projects}
                </div>
              </span>
            </div>
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
            <Modal
              imgSrc={a.img}
              title={a.title}
              projects={a.projects}
              exp={a.exp}
              date={a.date}
            />
          ))}
        </span>
        <span className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 w-full items-center md:space-x-10 space-x-0 md:mt-12 mt-0">
          {lower.map((a) => (
            <Modal
              imgSrc={a.img}
              title={a.title}
              projects={a.projects}
              exp={a.exp}
              date={a.date}
            />
          ))}
        </span>
      </div>
      {/* <Modal isTrue={modal} isAction={setModal} /> */}
    </>
  );
};

export default Tech;
