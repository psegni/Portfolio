import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from '../profile.jpg';

const Home = () => {
  const roles = [
    "Web Developer",
    "UI/UX Designer",
    "Backend Developer",
    "Frontend Expert"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const handleTyping = () => {
      if (!isDeleting && currentText === currentRole) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }

      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(150);
        return;
      }

      const delta = isDeleting ? -1 : 1;
      setCurrentText(currentRole.substring(0, currentText.length + delta));
      setTypingSpeed(isDeleting ? 50 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Segni Bultossa</span>
            </h1>
            <div className="h-12 mb-8">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A passionate{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <img
                src={image}
                alt="Profile"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover mx-auto shadow-xl"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-600 dark:bg-blue-400 rounded-full opacity-20 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 