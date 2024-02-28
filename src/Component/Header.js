import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';


const Navbar = (props) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <h3>OE</h3>
      <nav ref={navRef}>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects" id="contactProjects">Projects</RouterLink>
        {/* <RouterLink to="/resume" id="contactResume">Resume</RouterLink> */}

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
