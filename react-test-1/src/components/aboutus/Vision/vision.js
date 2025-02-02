import React from "react";
import { motion } from "framer-motion";
import './vision.css'; 

const Vision = () => {
  return (
    <div className="body-vision">
      
           
    <div className="container-vision">
      <motion.h1
        className="title-vision"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Vision «-»
      </motion.h1>

      <motion.p
        className="text-vision"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
At Orange Coding School, we envision a world where coding education is accessible, innovative, and empowering. Our goal is to equip learners with the skills to create, problem-solve, and lead in the digital age</motion.p>

      <motion.p
        className="text-vision"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4 }}
      >
 bridging the gap between education and industry to shape the future of technology.
      </motion.p>
    </div>
    </div>
  );
};

export default Vision;