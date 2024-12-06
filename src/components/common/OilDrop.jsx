import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Cursor = styled(motion.div)`
  width: 20px;
  height: 20px;
  background: ${props => props.theme.colors.primary}40;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  backdrop-filter: blur(2px);
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
  }
`;

const OilDrop = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Cursor
      animate={{ x: position.x - 10, y: position.y - 10 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default OilDrop; 