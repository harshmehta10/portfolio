import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const contect = useRef();
  const skills = useRef();
  const projects = useRef();
  const certificate = useRef();

  return (
    <header>
      <nav>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <img
            className="w-16"
            src="src/assets/programmer-BJDeeD1z.png"
            alt="programmar img"
          />

          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 cursor-pointer">
            <li>
              <Link
                to="Home"
                className="hover:text-[#2364d2] hover:underline underline-offset-8 "
              >
                HOME
              </Link>
            </li>
            <li
              onClick={() => {
                skills.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              SKILLS
            </li>
            <li
              onClick={() => {
                projects.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              PROJECTS
            </li>
            <li
              onClick={() => {
                certificate.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              CERTIFICATION
            </li>
            <li
              onClick={() => {
                contect.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              CONTACT ME
            </li>
          </ul>

          <button className="flex flex-wrap bg-blue-500 rounded-xl p-3 text-white">
            RESUME <FaFileDownload />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
