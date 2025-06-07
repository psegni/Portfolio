import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const programmingLanguages = [
    {
      name: 'Laravel',
      logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
    },
    {
      name: 'React',
      logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    },
    {
      name: 'Vue.js',
      logo: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
    },
    {
      name: 'HTML',
      logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
    },
    {
      name: 'CSS',
      logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
    },
    {
      name: 'Tailwind',
      logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
    },
    {
      name: 'Bootstrap',
      logo: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg',
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
    },
    {
      name: 'MySQL',
      logo: 'https://cdn.worldvectorlogo.com/logos/mysql-2.svg',
    },
    {
      name: 'XAMPP',
      logo: 'https://cdn.worldvectorlogo.com/logos/xampp.svg',
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
    },
  ];

  return (
    <section id="about" className="z-20 py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            I'm a passionate web developer with a Bachelor's degree in Software Engineering from Adam Science and Technology University.
            I love creating beautiful, responsive, and user-friendly websites that solve real-world problems.
            My journey in software development has equipped me with a diverse set of skills and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Education & Experience
            </h3>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Bachelor of Science in Software Engineering
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Adam Science and Technology University</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Graduated with a strong foundation in software development principles, algorithms, and modern programming practices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Senior Web Developer
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Starting From • 2022 - Present</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Led the development of multiple web applications using React and Node.js.
                  Implemented responsive designs and optimized performance.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technologies
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
              {programmingLanguages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                  className="flex items-center justify-center"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="w-16 h-16 relative"
                  >
                    <img
                      src={lang.logo}
                      alt={lang.name}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 