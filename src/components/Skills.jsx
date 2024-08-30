import React from "react";

const Skills = ({ skillsRef }) => {
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
      <div ref={skillsRef} className="flex justify-center m-2">
        <h1 className="font-medium text-2xl md:text-4xl lg:text-3xl p-2">
          Technologies I have worked with
        </h1>
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
  );
};

export default Skills;
