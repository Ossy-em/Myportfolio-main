import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <h1>Projects Section</h1>
      {/* Content for the projects section */}
      <p>This is a sample project content. Add your project details here.</p>
      <p>You can include descriptions, images, lists, or any other project-related ggfd information.</p>
      <p>Make sure the content is within this div to display on the page.</p>
      
      {/* Link to navigate back to the Home section */}
      <Link to="/" style={{
          textDecoration: 'none',
          color: 'white',
          cursor: 'pointer',
          display: 'inline',
          padding: '0',
          margin: '0',
          fontSize: '25px',
          fontFamily: 'Pacifico-Regular',
          marginLeft: '200px',
          background: 'transparent',
          
        }}> Home
      
      </Link>

      {/* Link to navigate back to the top of the page */}
      <span onClick={scrollToTop}  style={{
          textDecoration: 'none',
          color: 'white',
          cursor: 'pointer',
          display: 'inline',
          padding: '0',
          margin: '0',
          fontSize: '25px',
          fontFamily: 'Pacifico-Regular',
          marginLeft: '20px',
          background: 'transparent',
          
        }}>Projects</span>
    </div>
  );
};

export default Resume;
