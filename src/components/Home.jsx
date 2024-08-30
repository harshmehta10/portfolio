import React from "react";
import developer from "../assets/developer.png";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Home = ({ projectsRef }) => {
  return (
    <div>
      <div className="w-full flex justify-center items-start mt-8 mb-5 md:mt-16 mb-4">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center">
          <div className="flex flex-col justify-center md:items-start md:pr-8 items-center">
            <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl p-2">
              Hey Guys
            </h1>
            <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl p-2">
              I am Harsh Mehta
            </h1>
            <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl p-2">
              Front End Developer
            </h1>
            <p>
              Proficient in multiple programming languages , I am eager to take
              on new challenges and make a meaningful impact in the field of web
              development.
            </p>

            <div className="flex gap-2 my-4">
              <button
                className="bg-[#00ABE4] text-white px-4 py-2 hover:bg-[#2373ff] font-bold transition-transform duration-300 hover:translate-y-[-2px]"
                onClick={() => {
                  projectsRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                SEE PROJECTS
              </button>
              <button className="p-2 font-extrabold">CONNECT WITH ME</button>
            </div>
            <div className="flex items-center gap-5 my-4">
              <a
                href="https://www.linkedin.com/in/harsh-mehta-850b0a229/"
                target="_blank"
              >
                <FaLinkedin className="text-3xl hover:text-blue-700 hover:scale-110 transition-all duration-300" />
              </a>

              <a href="https://github.com/harshmehta10" target="_blank">
                <FaGithub className="text-3xl hover:scale-110 transition-all duration-300 hover:text-black" />
              </a>
              <FaXTwitter className="text-3xl hover:scale-110 transition-all duration-300 hover:text-blue-400" />
            </div>
          </div>
          <div className="rounded-full overflow-hidden w-40 md:w-60 mt-4 md:mt-0 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg shadow-lg">
            <img
              src={developer}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
