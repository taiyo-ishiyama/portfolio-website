import React from "react";
import portfolioImage from "./img/portfolioImage.jpg";
import boardgameImage from "./img/boardgameImage.jpg";
import dictionaryImage from "./img/dictionaryImage.jpg";
import client_serverImage from "./img/client_serverImage.jpg";
import factorisationImage from "./img/factorisationImage.jpg";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: [
      "Developed a personalized portfolio website to showcase my skills and projects.",
      "Prioritized creating a seamless user experience for visitors.",
    ],
    thumbnail: portfolioImage,
    githubLink: "https://github.com/taiyo-ishiyama",
    tools: ["React", "Tailwindcss", "Git"],
  },
  {
    id: 2,
    title: "Board Game",
    description: [
      "Designed and developed a Sudoku-like board game with expression completion and evaluation",
      "Implemented Object-Oriented Programming (OOP) principles and utilized optimal data structures",
      "Optimized game initialization and calculation processes for all valid solutions",
    ],
    thumbnail: boardgameImage,
    githubLink: "https://github.com/taiyo-ishiyama/boardgame",
    tools: ["C++", "Git"],
  },
  {
    id: 3,
    title: "Dictionary Program",
    description: [
      "Developed a dictionary program for pattern-based word searches and length matching.",
      "Implemented efficient searching processes using pre-loaded data structures from a file.",
    ],
    thumbnail: dictionaryImage,
    githubLink: "https://github.com/taiyo-ishiyama/pattern-dictionary",
    tools: ["C++", "Git"],
  },
  {
    id: 4,
    title: "Factorization Program",
    description: [
      "Developed a number factorization program with multi-threaded client-server architecture",
      "Utilized progress bars to keep users informed about the status of their factorization queries",
    ],
    thumbnail: factorisationImage,
    githubLink: "https://github.com/taiyo-ishiyama/multi-thread-factorisation",
    tools: ["C", "Git"],
  },
  {
    id: 5,
    title: "Client-Server Game",
    description: [
      "Developed a multiplayer number-based game hosted on a server.",
      "Implemented communication protocols for error handling and seamless interactions between server and clients.",
    ],
    thumbnail: client_serverImage,
    githubLink: "https://github.com/taiyo-ishiyama/client-server-game",
    tools: ["C", "Git"],
  },
  // Add more projects as needed
];

const ProjectShowcase = () => {
  return (
    <div className='w-full'>
      <div>
          <p className='py-6 sm:text-center lg:text-left lg:pl-20 xl:pl-10 text-lg'>
            {" "}
            These are the technologies I&apos;ve worked with
          </p>
        </div>
      <div className='max-w-screen-xl mx-auto p-4 flex justify-center w-full h-full text-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-100 max-w-sm mx-4 my-8 overflow-hidden rounded shadow-lg relative">
          <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />
          <div className="px-6 py-4">
            <div className="text-gray-800 font-bold text-xl mb-2">{project.title}</div>
            <p className="text-gray-700 text-base text-left">
              <ul className="list-disc pl-4 mb-4">
                {project.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </p>
            <div className="flex flex-wrap mb-6 justify-center pt-3 pb-10">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-gray-700 rounded-xl px-2 py-1 text-sm m-1 text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="px-6 pt-4 pb-5 text-center absolute inset-x-0 bottom-0">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              GitHub
            </a>
          </div>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectShowcase;