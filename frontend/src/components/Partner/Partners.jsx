import React from 'react';
import { motion } from 'framer-motion';

const Partner = ({ name, logo }) => {
  return (
    <motion.img
    className="partner-card partner-logo"
    src={logo}
    alt={name}
    whileTap={{ scale: 0.9 }}
  />
  
  );
};

export default Partner;
