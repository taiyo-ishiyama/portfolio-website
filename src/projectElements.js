import portfolioImage from "./img/portfolioImage.jpg";
import boardgameImage from "./img/boardgameImage.jpg";
import dictionaryImage from "./img/dictionaryImage.jpg";
import client_serverImage from "./img/client_serverImage.jpg";
import factorisationImage from "./img/factorisationImage.jpg";
import netflixCloneImage from "./img/netflixCloneImage.png";
import disneyplusCloneImage from "./img/disneyplusCloneImage.png";
import teslaCloneImage from "./img/teslaCloneImage.png";
import nonFieldRPGImage from "./img/nonFieldRPGImage.png";
import marioGameImage from "./img/marioGameImage.png";
import neuralNetworkImage from "./img/neuralNetworkImage.jpg";
import ebookCommerceImage from "./img/ebookCommerceImage.png";
import discordCloneImage from "./img/dicordCloneImage.png";
import vegeketImage from "./img/vegeketImage.png";
import bulletinBoardImage from "./img/bulletinBoardImage.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: [
      "Developed a personalized portfolio website to showcase my skills and projects.",
      "Prioritized creating a seamless user experience for visitors.",
    ],
    thumbnail: portfolioImage,
    githubLink: "https://github.com/taiyo-ishiyama/portfolio-website",
    demoLink: "",
    tools: ["React", "Tailwindcss", "Git"],
  },
  {
    id: 2,
    title: "Discord Clone Website",
    description: [
      "Developed a Discord clone with real-time messaging capabilities using React, TypeScript, and Firebase.",
      "Implemented user authentication with Firebase to manage secure user sign-ups and logins.",
      "Created a real-time chat feature with Firebase Firestore, enabling instant messaging and seamless communication between users.",
      "Leveraged TypeScript to ensure type safety and maintainability, improving the overall code quality.",
    ],
    thumbnail: discordCloneImage,
    githubLink: "https://github.com/taiyo-ishiyama/discord-clone",
    demoLink: "",
    tools: ["TypeScript", "React", "Firebase"],
  },
  {
    id: 3,
    title: "E-Book Commerce Website",
    description: [
      "Developed a full-stack e-commerce application for selling e-books using TypeScript, Next.js, TailwindCSS, Prisma, and PostgreSQL.",
      "Integrated Stripe for secure payment processing, providing a seamless checkout experience for users.",
      "Optimised data fetching methods to improve website speed and performance, enhancing user experience.",
    ],
    thumbnail: ebookCommerceImage,
    githubLink: "https://github.com/taiyo-ishiyama/book-commerce-app",
    demoLink: "https://taiyo-ishiyama-book-commerce.vercel.app/",
    tools: ["TypeScript", "Next.js", "Tailwind-css", "Prisma", "Postgre", "Stripe"],
  },
  {
    id: 4,
    title: "Vegetable EC Website",
    description: [
      "Developed a fully functional e-commerce website for selling vegetables using Django, Bootstrap, and Stripe.",
      "Managed user accounts, purchase history, and cart functionality to enhance user engagement and experience.",
      "Implemented features for order management and cart updates, improving overall site usability and customer satisfaction.",
    ],
    thumbnail: vegeketImage,
    githubLink: "https://github.com/taiyo-ishiyama/vegeket",
    demoLink: "https://drive.google.com/file/d/1d_un_8hIykVEihCjnrkLQ2oNkPhFw1IR/view?usp=sharing",
    tools: ["Django", "Bootstrap", "Stripe"],
  },
  {
    id: 5,
    title: "Online Bulletin Board Platform",
    description: [
      "Built a real-time online bulletin board platform using PHP, SQL, and HTML/CSS to enable user interaction and community engagement.",
      "Designed and developed features for posting, replying, and managing threads, fostering dynamic user conversations.",
      "Implemented a robust database structure with SQL for efficient data storage and retrieval, ensuring fast and reliable performance.",
    ],
    thumbnail: bulletinBoardImage,
    githubLink: "https://github.com/taiyo-ishiyama/forum_application",
    demoLink: "https://drive.google.com/file/d/1Xnt33F1MuKI5J8cXbf0pt0p78rL9cr3m/view?usp=sharing",
    tools: ["PHP", "HTML/CSS", "SQL"],
  },
  {
    id: 6,
    title: "Netflix Clone Website",
    description: [
      "Imitated the Netflix website interface to create a functional clone.",
      "Implemented Firebase for user authentication, allowing secure login features.",
      "Ensured the website is fully responsive, providing an optimal viewing experience on all devices.",
    ],
    thumbnail: netflixCloneImage,
    githubLink: "https://github.com/taiyo-ishiyama/netflix-clone",
    demoLink: "https://taiyo-ishiyama-netflix-clone.vercel.app",
    tools: ["React", "Styled-Components", "Firebase", "Git"],
  },
  {
    id: 7,
    title: "Disney Plus Clone Website",
    description: [
      "Created a clone of the Disney Plus website, replicating its layout and functionality.",
      "Integrated Firebase for authentication, including Google login.",
      "Developed a full-stack application using Node.js and MySQL for backend operations. (Only the front-end is used for demo)",
      "Made the website fully responsive to ensure usability on various devices.",
    ],
    thumbnail: disneyplusCloneImage,
    githubLink: "https://github.com/taiyo-ishiyama/disneyplus-clone",
    demoLink: "https://taiyo-ishiyama-disneyplus-clone.vercel.app",
    tools: ["React", "Styled-Components", "Firebase", "MySQL", "Git"],
  },
  {
    id: 8,
    title: "Mario Game with SFML",
    description: [
      "Developed a Mario-inspired 2D platformer game with a focus on smooth user interface and dynamic gameplay.",
      "Implemented robust collision detection systems to ensure responsive player-environment interactions.",
      "Created complex game logic that drives player controls, enemy AI, and environmental interactions.",
      "Designed a dynamic camera system that smoothly follows the player, providing optimal gameplay visibility.",
      "Integrated custom sprites, animations, and sound effects to enhance the retro-inspired aesthetic."
    ],
    thumbnail: marioGameImage,
    githubLink: "https://github.com/taiyo-ishiyama/mario-game",
    demoLink: "https://drive.google.com/file/d/13YJiz4fiO1je6Dd90WCnQzTZhFmtip6S/view?usp=sharing",
    tools: ["C++", "SFML", "Git"],
  },
  {
    id: 10,
    title: "Board Game",
    description: [
      "Designed and developed a Sudoku-like board game with expression completion and evaluation",
      "Implemented Object-Oriented Programming (OOP) principles and utilized optimal data structures",
      "Optimized game initialization and calculation processes for all valid solutions",
    ],
    thumbnail: boardgameImage,
    githubLink: "https://github.com/taiyo-ishiyama/boardgame",
    demoLink: "",
    tools: ["C++", "Git"],
  },
  {
    id: 11,
    title: "Non Field RPG with Unity",
    description: [
      "Developed a 2D role-playing game using Unity.",
      "Implemented various effects and audio to create an engaging gameplay experience.",
      "Focused on creating a rich visual and auditory experience for players.",
    ],
    thumbnail: nonFieldRPGImage,
    githubLink: "https://github.com/taiyo-ishiyama/unity-non-fieldRPG",
    demoLink: "https://taiyo-ishiyama-non-field-RPG.vercel.app",
    tools: ["Unity", "C#", "Git"],
  },
  {
    id: 12,
    title: "Dictionary Program",
    description: [
      "Developed a dictionary program for pattern-based word searches and length matching.",
      "Implemented efficient searching processes using pre-loaded data structures from a file.",
    ],
    thumbnail: dictionaryImage,
    githubLink: "https://github.com/taiyo-ishiyama/pattern-dictionary",
    demoLink: "",
    tools: ["C++", "Git"],
  },
  {
    id: 13,
    title: "Tesla Clone Website",
    description: [
      "Built a clone of the Tesla official website, focusing on its sleek design and functionality.",
      "Ensured the site is fully responsive, adapting to different screen sizes and devices.",
      "Added animation features to enhance user interaction and visual appeal.",
    ],
    thumbnail: teslaCloneImage,
    githubLink: "https://github.com/taiyo-ishiyama/tesla-clone",
    demoLink: "https://taiyo-ishiyama-tesla-clone.vercel.app",
    tools: ["React", "Styled-Components", "Git"],
  },
  {
    id: 14,
    title: "Neural Network",
    description: [
      "Developed a neural network to classify fashion items based on pixel data.",
      "Achieved an accuracy of 85% by optimizing the combination of epochs and batch size.",
      "Focused on improving model performance and accuracy through experimentation and tuning.",
    ],
    thumbnail: neuralNetworkImage,
    githubLink: "https://github.com/taiyo-ishiyama/neural-network",
    demoLink: "",
    tools: ["Python", "Git"],
  },
  {
    id: 15,
    title: "Factorization Program",
    description: [
      "Developed a number factorization program with multi-threaded client-server architecture",
      "Utilized progress bars to keep users informed about the status of their factorization queries",
    ],
    thumbnail: factorisationImage,
    githubLink: "https://github.com/taiyo-ishiyama/multi-thread-factorisation",
    demoLink: "",
    tools: ["C", "Git"],
  },
  {
    id: 16,
    title: "Client-Server Game",
    description: [
      "Developed a multiplayer number-based game hosted on a server.",
      "Implemented communication protocols for error handling and seamless interactions between server and clients.",
    ],
    thumbnail: client_serverImage,
    githubLink: "https://github.com/taiyo-ishiyama/client-server-game",
    demoLink: "",
    tools: ["C", "Git"],
  },
];

export default projects;
