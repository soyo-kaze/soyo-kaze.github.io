import React from "react";
import proj from "../assets/proj.png";

const Build = ({ img, live, github, title, des, tech, duration }) => {
  return (
    <div className="flex h-full mt-20 ">
      <div
        className="w-full h-full flex bg-gradient-to-r pl-10 pr-10 pb-14 pt-20 sm:pl-44 sm:pr-44  flex-col from-blue-900 via-blue-800 to-transparent absolute z-10  "
        style={{ maxHeight: "26rem" }}
      >
        <div className=" max-w-lg space-y-4">
          <p className=" font-bold font-ubuntu text-3xl text-white">{title}</p>
          <hr></hr>
          <p className="text-white font-ubuntu pl-4">{des}</p>
          <div className="pl-4">
            <span className="flex space-x-4">
              <span className=" font-semibold text-gray-300 w-28">
                Technologies:
              </span>
              <p className=" font-semibold text-gray-300">
                {tech.map((a) => a)}
              </p>
            </span>
            <span className="flex space-x-1">
              <span className=" font-semibold text-gray-300 w-28">
                Duration:
              </span>
              <p className=" font-semibold text-gray-300">{duration}</p>
            </span>
          </div>
          <div className="w-full flex space-x-4 pt-4">
            <a href={github} target="_blank">
              <button className="text-white p-2 font-bold rounded-md bg-purple-500 hover:bg-purple-600 duration-300 shadow-sm hover:shadow-md">
                😺 GitHub
              </button>
            </a>
            <a href={live} target="_blank">
              <button className="text-white p-2 font-bold rounded-md bg-red-500 hover:bg-red-600 duration-300 shadow-sm hover:shadow-md">
                📺 Live
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex w-full max-h-96  h-full justify-end items-center"
        style={{ maxHeight: "26rem" }}
      >
        <img
          src={img}
          className=" object-contain"
          style={{ height: "26rem" }}
        />
      </div>
    </div>
  );
};

const Builds = [
  {
    img: proj,
    title: "Blog Site in Next.js",
    des: "It is blog site where a user can register/login and create their own blogs (sort of). All the blogs are visible on the home pageand user's specific blogs can be seen on their dashboard",
    duration: "Nov-Dec 2021",
    tech: [
      "Next.js",
      " MongoDB",
      " TailwindCSS",
      " Express.js",
      " NodeJS",
      " CSS",
      " Bcrypt",
    ],
    github: "https://github.com/soyo-kaze/Next-blog-site",
    live: "http://next-blog-site-nine.vercel.app",
  },
];

const Projects = () => {
  return (
    <>
      <p className="upper_header w-full flex justify-center">Projects</p>
      {Builds.map((data) => (
        <Build
          tech={data.tech}
          duration={data.duration}
          title={data.title}
          des={data.des}
          img={data.img}
          github={data.github}
          live={data.live}
        />
      ))}
    </>
  );
};

export default Projects;
