import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AnimatedLine = () => {
  return (
    <motion.div
      className="motion-line motion-line-initial"
      animate="motion-line-animate"
    />
  );
};

const About = () => {
  let navigate = useNavigate();

  return (
    <section className="about">
       <div className="background-image-container">
      {/* You can add additional content if needed */}
    </div>
      <div className='about-about'>
        <h1>Hey, I'm Ossy! A Creative Frontend Developer</h1>
      </div>

      <p>I specialize in crafting visually appealing websites and engaging in discussions on current tech trends.</p>

      <div className='main-btn'>
        <button className='about-btn1' onClick={() => { navigate('/contact') }}>Contact Me</button>
        <button className='about-btn' onClick={() => { navigate('/projects') }}>Project</button>
      </div>

      <div className='do'>
        <h2>What I do</h2>
        <p>
          I design web UIs with designers for seamless user experiences. Solo or 
          in a team, I excel at coding, integrating features, and transforming 
          designs into quality code. 
        </p>
        <div className='do-do'>
          <h3>07+   <span>Freelance works</span><AnimatedLine /></h3>
          <h3>10+   <span>Completed Projects</span><AnimatedLine /> </h3>
          <h3> 02+   <span>Years Of Experience</span><AnimatedLine /> </h3>
          <h3>05+   <span>Client Reviews</span><AnimatedLine />  </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
