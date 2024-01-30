// import React from 'react';

// const Portfolio = () => {
//   // Your component logic goes here
//   return (
//     <div>
//       <h1>Portfolio Page</h1>
//       {/* Additional content */}
//     </div>
//   );
// };

// export default Portfolio;

import React, { useState } from "react";
import projects from "./assets/projectElements";

export default function ProjectDetail({ id }) {
  const project = projects.find((obj) => obj.id === id);
  const [showTooltip, setShowTooltip] = useState(false);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <section>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative", cursor: "pointer" }}
      >
        <h1>{project.title}</h1>
        {/* Add more details or components as needed */}
        {showTooltip && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "#fff",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              zIndex: 1,
            }}
          >
            {/* Tooltip content */}
            This is a tooltip!
          </div>
        )}
      </div>
    </section>
  );
}
