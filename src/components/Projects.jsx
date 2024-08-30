import React from "react";
import dicegame from "../assets/dicegame.png";
import deskdreams from "../assets/deskdreams.png";
import todolist from "../assets/todolist.png";
import tictactoe from "../assets/tictactoe.png";
import netflix from "../assets/netflix.png";

const Projects = ({ projectRef }) => {
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
    {
      id: 5,
      Name: "Netflix Clone",
      src: netflix,
      Live: "https://react-clone-netflx.netlify.app/",
      Code: "https://github.com/harshmehta10/react",
    },
  ];
  return (
    <div>
      <section ref={projectRef}>
        <div className="flex justify-center">
          <h1 className="font-medium text-2xl md:text-4xl lg:text-3xl p-2">
            Projects
          </h1>
        </div>
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
    </div>
  );
};

export default Projects;
