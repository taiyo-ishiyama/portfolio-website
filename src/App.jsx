import React from "react";
import "./App.css";
import Projects from "./projects.jsx";
import Timeline from "./timeline.jsx";
import emailIcon from "./assets/email.svg";
import linkedinIcon from "./assets/linkedin.svg";
import githubIcon from "./assets/github.svg";
import Experience from "./experience.jsx";

function App() {
  return (
    <div style={{ margin: 0, padding: 0 }} className='p-0 m-0 box-border'>
      <header className='text-white bg-black'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a href='#' className='font-medium text-white mb-3 md:mb-0'>
            <span className='text-xl ml-3'>Taiyo&apos;s Portfolio</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href='#home' className='mr-5 hover:text-green-400 duration-300'>
              Home
            </a>
            <a href='#about' className='mr-5 hover:text-green-400 duration-300'>
              About
            </a>
            <a
              href='#skills'
              className='mr-5 hover:text-green-400 duration-300'
            >
              Skills
            </a>
            <a
              href='#projects'
              className='mr-5 hover:text-green-400 duration-300'
            >
              Projects
            </a>
            <a href='#contact' className='hover:text-green-400 duration-300'>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        className='bg-gradient-to-b from-black to-gray-800 text-gray-200'
        id='home'
      >
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl font-medium'>Hello!</h1>
            <h1 className='text-3xl sm:text-5xl font-medium mb-4'>
              I&apos;m Taiyo Ishiyama
              <br />
              Computer Science Student
            </h1>
            <p className='mb-8 leading-relaxed'>
              Welcome to my portfolio website. This website briefly introduces
              myself and showcases my skillsets and projects. Feel free to
              contact me if you have any questions.
            </p>
            <a href='#contact' className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 py-2 px-6 border-0 rounded text-lg'>
              contact
            </a>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-2/3'>
            <img src='./img/IMG1.jpg' alt='' />
          </div>
        </div>
      </section>

      <section
        className='bg-gradient-to-b from-gray-800 to-black text-gray-200'
        id='about'
      >
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-2'>About me</h1>
            <div className='container flex items-center flex-col xl:flex-row'>
              <div className='mr-10 mb-10'>
                <p className='pb-10'>
                  I am a third-year student enrolled at Griffith University,
                  pursuing a degree in Computer Science with a major in Software
                  Development. My primary focus lies in the realm of software
                  engineering, with a keen interest in crafting seamless user
                  experiences.
                </p>
                <p>
                  Possessing an inherent curiosity and a robust motivation to
                  acquire new knowledge, I have explored programming languages
                  such as C, C++, Python, and JavaScript within the academic
                  sphere and through personal projects. In addition to my formal
                  education, I am dedicated to expanding my linguistic
                  repertoire, aspiring to master both front-end and back-end
                  languages while remaining abreast of emerging technologies. My
                  commitment to continuous learning is evident through the
                  development of diverse programs during my university studies
                  and personal endeavors. Should you find my profile and
                  projects intriguing, please do not hesitate to reach out. I
                  welcome the opportunity to discuss collaborations or any
                  inquiries you may have.
                </p>
              </div>
              <div className='flex flex-col justify-center items-center text-white text-base pb-8 sm:text-lg'>
                <Timeline defaultColor='bg-cyan-500' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className='bg-gradient-to-b from-black to-gray-800 text-gray-200'
        id='skills'
      >
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-5'>
              Experience
            </h1>
          </div>
            <Experience />
        </div>
      </section>

      <section
        className='bg-gradient-to-b from-gray-800 to-black text-gray-200'
        id='projects'
      >
        <div className='container px-5 py-24 mx-auto'>
          <div className="text-center mb-20">
            <h1 className='text-2xl sm:text-3xl font-medium text-white mb-10'>
              My projects
            </h1>
          </div>
          <React.StrictMode>
            <Projects />
          </React.StrictMode>
        </div>
      </section>

      <footer className='text-white bg-gray-800' id='contact'>
        <div className='container flex mx-auto pt-10 p-5 flex-col md:flex-row items-center md:items-start'>
          <span className='font-medium text-xl ml-3 mb-3 md:mb-0'>contact</span>
          <div className='md:ml-auto'>
            <div className='container flex pl-1'>
              <img
                src={emailIcon}
                alt='icon'
                className='bg-white w-6 p-1 rounded-lg z-20'
              />
              <h3 className='pl-1'>taiyo.ishiyama@griffithuni.edu.au</h3>
            </div>
            <div className='container flex'>
              <img
                src={linkedinIcon}
                alt='icon'
                className='bg-gray-0 w-8 p-1 rounded-lg z-20'
              />
              <a
                href='https://www.linkedin.com/in/taiyo-ishiyama'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-500 duration-300 pt-1'
              >
                linkedin.com/in/taiyo-ishiyama
              </a>
            </div>
            <div className='container flex'>
              <img
                src={githubIcon}
                alt='icon'
                className='bg-gray-0 w-8 p-1 rounded-lg z-20'
              />
              <a
                href='https://github.com/taiyo-ishiyama'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-500 duration-300'
              >
                github.com/taiyo-ishiyama
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
