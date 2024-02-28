import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects'; // Import Projects directly
import Contacts from './Contact';

const Home = () => {
  return (
    <div>
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contacts">
        <Contacts />
      </section>
      {/* Link to scroll to the top of the page */}
    </div>
  );
};

export default Home;
