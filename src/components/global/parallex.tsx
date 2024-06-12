import React, { useEffect, useState } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  backgroundImage?: string;
  height?: string;
}

const Parallax: React.FC<ParallaxProps> = ({ children, backgroundImage, height = '500px' }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="relative overflow-hidden bg-fixed"
      style={{
        height,
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transform: `translateY(${offset * 0.5}px)`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
        {children}
      </div>
    </div>
  );
};

export default Parallax;
