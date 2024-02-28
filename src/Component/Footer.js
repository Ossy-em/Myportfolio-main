import React from 'react';

import { motion } from 'framer-motion';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='footer-btn' >
      <button onClick={handleScrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '99', background: ' white', color:'black',backgroundSize: '200% 100%', }}>
      Scroll to Top
    </button>
    </div>
    
  );
};

const AnimatedLine = () => {
  return (
    <div style={{ paddingLeft: '3%', paddingRight: '3%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Navigation Links */}
        

        {/* Animated Line */}
        <motion.div
          style={{
            width: 'calc(100% - 20px)',
            height: '0.9px',
            background: 'white',
            transformOrigin: 'top',
            marginTop: '-5%',
            marginBottom: '6%',
            fontWeight: 'light',
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <p>2023 Copyright © Developer Victor. All rights reserved</p>

      {/* Scroll To Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default AnimatedLine;
