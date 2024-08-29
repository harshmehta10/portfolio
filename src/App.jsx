import { useRef, useState } from "react";
import "./App.css";
import { FaFileDownload } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import dicegame from "./assets/dicegame.png";
import deskdreams from "./assets/deskdreams.png";
import todolist from "./assets/todolist.png";
import tictactoe from "./assets/tictactoe.png";
import developer from "./assets/developer.png";
import programme from "./assets/programme.png";
function App() {
  const contect = useRef();
  const skills = useRef();
  const projects = useRef();
  const certificate = useRef();
  const project = [
    {
      id: 1,
      Name: "Dice-Game",
      src: dicegame,
      Live: "https://gamedicereact.netlify.app/",
      Code: "https://github.com/harshmehta10/Dice-game",
    },
    {
      id: 2,
      Name: "Todo list",
      src: todolist,
      Live: "https://tod0-reactjs.netlify.app/",
      Code: "https://github.com/harshmehta10/Todo-list-react",
    },
    {
      id: 3,
      Name: "Tic-Tac-Toe",
      src: tictactoe,
      Live: "https://game-tic-tac-toe-react10.netlify.app/",
      Code: "https://github.com/harshmehta10/Tic-Tac-Toe-React",
    },
    {
      id: 4,
      Name: "Desk Dreams",
      src: deskdreams,
      Live: "https://deskdreams.com/",
      Code: "https://github.com/harshmehta10/website",
    },
  ];

  const technologies = [
    {
      id: 1,
      name: "JAVASCRIPT",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      id: 2,
      name: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      id: 3,
      name: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      id: 4,
      name: "TAILWINDCSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      id: 5,
      name: "REACT",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      id: 6,
      name: "GITHUB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      id: 7,
      name: "VSCODE",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      id: 8,
      name: "BOOTSTRAP",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
  ];
  return (
    <div>
      <header className="m-2">
        <nav className="m-2">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <img className="w-16" src={programme} alt="programmar img" />

            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 cursor-pointer">
              <li className="hover:text-[#2364d2] hover:underline underline-offset-8 ">
                HOME
              </li>
              <li
                className="hover:text-[#2364d2] hover:underline underline-offset-8 "
                onClick={() => {
                  skills.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                SKILLS
              </li>
              <li
                className="hover:text-[#2364d2] hover:underline underline-offset-8 "
                onClick={() => {
                  projects.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                PROJECTS
              </li>
              <li
                className="hover:text-[#2364d2] hover:underline underline-offset-8 "
                onClick={() => {
                  certificate.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                CERTIFICATION
              </li>
              <li
                className="hover:text-[#2364d2] hover:underline underline-offset-8 "
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

      {/* HOME  */}
      <div className="w-full h-[80vh] md:h-[70vh] flex justify-center items-start mt-8 mb-12 md:mt-16">
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
                  projects.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                SEE PROJECTS
              </button>
              <button className="p-2 font-extrabold">CONNECT WITH ME</button>
            </div>
            <div className="flex items-center gap-5 my-4">
              <FaLinkedin className="text-3xl hover:text-blue-700 hover:scale-110 transition-all duration-300" />

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

      {/* Skills */}
      <div>
        <div>
          <h1>Technologies I have worked with</h1>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map((item, index) => (
            <div
              key={item.id}
              className="hover:rotate-3 hover:scale-110 duration-300 transform rounded-lg py-2  hover:text-[#2373ff]"
            >
              <img src={item.src} className="w-20 mx-auto" />
              <p className="text-base font-medium mt-4">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Projects */}
      <section ref={projects}>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-4">
          {project.map((project) => (
            <div className="shadow-lg rounded-lg hover:scale-110 transition-all ease-in-out duration-300">
              <img src={project.src} alt="projects" className="shadow-md" />
              <h1 className="bg-black text-white font-bold text-lg p-2 ">
                {project.Name}
              </h1>
              <div className="flex items-center justify-center gap-8 my-2">
                <a href={project.Live} target="_blank">
                  <button className="text-[#1e375a] px-8  duration-300 hover:scale-110 hover:bg-gray-100 font-semibold transition-all">
                    Live
                  </button>
                </a>
                <a href={project.Code} target="_blank">
                  <button className="text-[#1e375a] px-8  duration-300 hover:scale-110 hover:bg-gray-100 font-semibold transition-all">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white" ref={contect}>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Wanna contact me ? fill the form below or drop a mail at
            harshmehta.srm2002@gmail.com
          </p>

          <form className="space-y-8">
            <div>
              <label htmlFor="Your Email">Your Email</label>
              <input
                type="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              />
            </div>
            <div>
              <label htmlFor="Subject">Subject</label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="Message">Your message</label>
              <textarea
                name="message"
                rows={6}
                placeholder="Leave a comment..."
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send message
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
