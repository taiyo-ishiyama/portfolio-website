import React from "react";
import htmlIcon from "./assets/html5.svg";
import cssIcon from "./assets/css3.svg";
import javascriptIcon from "./assets/javascript.svg";
import reactIcon from "./assets/react.svg";
import tailwindIcon from "./assets/tailwind.svg";
import cIcon from "./assets/c.svg";
import cppIcon from "./assets/c++.svg";
import pythonIcon from "./assets/python.svg";
import githubIcon from "./assets/github.svg";
import dockerIcon from "./assets/docker.svg";
import vscodeIcon from "./assets/vscode.svg";
import pycharmIcon from "./assets/pycharm.svg";

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: htmlIcon,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: cssIcon,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascriptIcon,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactIcon,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: tailwindIcon,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: cIcon,
      title: "C",
      style: "shadow-gray-500",
    },
    {
      id: 7,
      src: cppIcon,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: pythonIcon,
      title: "Python",
      style: "shadow-sky-500",
    },
    {
      id: 9,
      src: githubIcon,
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id: 10,
      src: dockerIcon,
      title: "Docker",
      style: "shadow-gray-300",
    },
    {
      id: 11,
      src: vscodeIcon,
      title: "VS Code",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: pycharmIcon,
      title: "Pycharm",
      style: "shadow-green-500",
    },
  ];

  return (
    <div className='w-full h-screen'>
      <div className='max-w-screen-xl mx-auto  p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='py-6'>
            {" "}
            These are the technologies I&apos;ve worked with
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {skills.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt='' className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
