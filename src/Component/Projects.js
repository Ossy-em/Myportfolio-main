import React from 'react';
import ProjectImage from '../images/countriesAPI.PNG';

const Projects = () => {
  const projectName = 'CountryAPI';
  const projectUrl = 'https://your_project_url_here';

  // const viewProject = () => {
  //   window.open(projectUrl, '_blank');
  // };

  return (
    <div className='project'>
      <h1 className='projecth1'>Completed Projects</h1>
      <h3>Take a look at few of my completed projects</h3>
      <div className="project-card">
        <img src={ProjectImage} alt="Project Screenshot" className="project-image" />
        <h2 className="project-name">{projectName} <a href={projectUrl} className='project-btn'>
      View Project
    </a> 
        </h2>
      </div>

     
   {/*     <div className="project-card">
        <h2 className="project-name">{projectName}</h2>
        <img src={ProjectImage} alt="Project Screenshot" className="project-image" />
        <button onClick={viewProject} className='project-btn'>View Project</button>
      </div>

      
       <div className="project-card">
        <h2 className="project-name">{projectName}</h2>
        <img src={ProjectImage} alt="Project Screenshot" className="project-image" />
        <button onClick={viewProject} className='project-btn'>View Project</button>
      </div>

    
      <div className="project-card">
        <h2 className="project-name">{projectName}</h2>
        <img src={ProjectImage} alt="Project Screenshot" className="project-image" />
        <button onClick={viewProject} className='project-btn'>View Project</button>
      </div>

    
      <div className="project-card">
        <h2 className="project-name">{projectName}</h2>
        <img src={ProjectImage} alt="Project Screenshot" className="project-image" />
        <button onClick={viewProject} className='project-btn'>View Project</button>
      </div>

      
      <div className="project-card">
        <h2 className="project-name">{projectName}</h2>
        <img src={ProjectImage} alt="Project Screenshot" className="project-image" />
        <button onClick={viewProject} className='project-btn'>View Project</button>
      </div> */}
    </div>
  );
};

export default Projects;