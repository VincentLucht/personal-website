import { useState, useEffect } from 'react';

export default function useGetScreenSize() {
  const [screenSize, setScreenSize] = useState({
    isDesktop: window.innerWidth >= 1000,
    isTablet: window.innerWidth >= 768,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isDesktop: window.innerWidth >= 1000,
        isTablet: window.innerWidth >= 768,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}
