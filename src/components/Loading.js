import React from 'react';
import { motion } from 'framer-motion';
import spookyImage from '../spooky.png';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="relative"
      >
        <motion.img
          src={spookyImage}
          alt="Loading..."
          className="w-65 h-65"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-blue-400 text-lg font-semibold"
        >
          Loading...
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loading; 