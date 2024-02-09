import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  initial: {
    scale: 1,
    backgroundColor: '#ffffff',
  },
  hover: {
    scale: 1.1,
    backgroundColor: '#f8f9fa',
  },
};

const ExpandableCard = () => {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.3 }}
      style={{
        width: '200px',
        height: '300px',
        borderRadius: '15px',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        margin: '20px',
        userSelect: 'none',
        color: '#495057',
      }}
    >
      <h3>Hover Me!</h3>
      <p>Watch me grow!</p>
    </motion.div>
  );
};

export default ExpandableCard;
