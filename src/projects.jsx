import React from "react";
import projects from "./projectElements";


const ProjectShowcase = () => {
  return (
    <div className='w-full'>
      <div>
          <p className='py-6 text-center lg:text-left lg:pl-20 xl:pl-10 text-lg'>
            {" "}
            These are the projects I&apos;ve worked on
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
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
                Demo
              </a>
            )}
          </div>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectShowcase;
