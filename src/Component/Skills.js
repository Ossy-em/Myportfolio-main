import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faPhoenixFramework } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div class="skills">
      <h2 className="skil">My Skills</h2> 
      <div className='sc'>
      <div class="category">

      <FontAwesomeIcon className='icon' icon={faLanguage}></FontAwesomeIcon>
    <p className='category-name'>Language</p>
    <p>Using JavaScript, HTML5, and CSS, I craft distinctive websites with creative functionality. 
      These languages create visually striking, responsive interfaces for an immersive user journey on all devices. Redefining your digital presence."</p>
    </div>

    <div class="category">
    <FontAwesomeIcon className='icon' icon={faPhoenixFramework} />
    <p className='category-name'> Framework/Libaries</p>
    <p>Using React.js and Next.js, I create polished websites with modular UI components and efficient server-side rendering.
       This synergy results in immersive, responsive web solutions that engage and delight users. Framer enhances the design experience.</p>
    </div>

    <div class="category">
    <FontAwesomeIcon className='icon' icon={faFigma} /> 
    <p className='category-name'>Tools</p>
    <p>Utilizing Figma and Git, I design and code collaboratively. Figma's versatility, 
      paired with Git's version control, ensures seamless teamwork, fostering innovative 
      designs and efficient code management for exceptional outcomes.</p>
    </div>

       </div>
</div>    
  );
};

export default Skills;

