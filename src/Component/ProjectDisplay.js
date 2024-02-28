import React from 'react';

const ProjectDisplay = ({ imageUrl, projectName, projectLink }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt="Project Screenshot" />
      <h2>{projectName}</h2>
      <a href={projectLink} className="view-button" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectDisplay;
