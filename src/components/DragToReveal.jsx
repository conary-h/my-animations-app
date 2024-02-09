import React from 'react';
import { motion } from 'framer-motion';

const DragToReveal = () => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      style={{
        width: '500px',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        background: 'white',
      }}
    />
  );
};

export default DragToReveal;
