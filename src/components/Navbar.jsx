import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import programme from "../assets/programme.png";
import resume from "../assets/resume.pdf";

const Navbar = ({ contectRef, skillsRef, projectsRef, certificateRef }) => {
  const [toggle, setToggle] = useState(false);
  const clicked = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className="flex justify-between items-center 
    w-[92%] mx-auto mt-6 border-b border-gray-200 pb-4 font-semibold"
    >
      <div>
        <img className="w-16" src={programme} alt="programmar img" />
      </div>
      <div
        className={`absolute min-h-[60vh] bg-white ${
          toggle ? " top-[14%] text-center" : "md:static min-h-fit  top-[-100%]"
        } left-0 w-full flex items-center justify-center transition-all  duration-500`}
      >
        <ul className="flex flex-col md:flex-row md:items-center gap-8 md:gap-[4vw] ">
          <li className="hover:text-[#2364d2] hover:underline underline-offset-8 ">
            HOME
          </li>
          <li
            className="hover:text-[#2364d2] hover:underline underline-offset-8 "
            onClick={() => {
              skillsRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            SKILLS
          </li>
          <li
            className="hover:text-[#2364d2] hover:underline underline-offset-8 "
            onClick={() => {
              projectsRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            PROJECTS
          </li>
          <li
            className="hover:text-[#2364d2] hover:underline underline-offset-8 "
            onClick={() => {
              certificateRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            CERTIFICATION
          </li>
          <li
            className="hover:text-[#2364d2] hover:underline underline-offset-8 "
            onClick={() => {
              contectRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            CONTACT ME
          </li>
        </ul>
      </div>
      <a
        href={resume}
        download
        className="bg-[#00ABE4] rounded-full text-white px-4 py-2 hover:bg-[#2373ff] flex gap-2 items-center hover:scale-110 transition-all duration-300"
      >
        RESUME <FaFileDownload className="text-base cursor-pointer" />
      </a>
      {!toggle ? (
        <IoMenu
          onClick={() => {
            clicked();
          }}
          className="text-4xl cursor-pointer md:hidden"
        />
      ) : (
        <IoClose
          onClick={() => {
            clicked();
          }}
          className="text-4xl cursor-pointer md:hidden"
        />
      )}
    </div>
  );
};

export default Navbar;
