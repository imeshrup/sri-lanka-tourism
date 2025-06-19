
import React, { ReactNode, useEffect, useState } from 'react';

interface AnimatedPageWrapperProps {
  children: ReactNode;
}

const AnimatedPageWrapper: React.FC<AnimatedPageWrapperProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Set to visible slightly after mount to ensure transition is applied
    const timer = setTimeout(() => {
        setVisible(true);
    }, 50); // Small delay
    
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div 
      className={`transition-opacity duration-700 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default AnimatedPageWrapper;
    