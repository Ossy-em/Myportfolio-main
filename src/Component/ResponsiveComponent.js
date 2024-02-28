// Example of a responsive component
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const ResponsiveComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isMobile ? (
        /* Mobile view */
        <MobileContent />
      ) : (
        /* Desktop view */
        <DesktopContent />
      )}
    </div>
  );
};

export default ResponsiveComponent;
