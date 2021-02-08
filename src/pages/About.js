import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "50vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  }
}

const About = () => {
  return (
    <motion.div className="about-container" variants={containerVariants} initial="hidden" animate="show">
      <h1>About</h1>
      <div className="about-desc">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quod quisquam ducimus nihil expedita at laudantium aliquid ut esse quis numquam atque odio repellendus reiciendis reprehenderit qui, ratione, sapiente temporibus quasi magni vero. Minima cupiditate facere odit, accusantium quis consequatur et similique, totam quaerat ullam qui vel eaque sapiente dicta.
        </p>
        <div></div>
      </div>
      <motion.h1
        initial={{ y: -10 }}
        animate={{
          y: 10,
          transition: {
            duration: 1,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
          }
        }}
      >
        <Link className="link" to="/newsletter">
          &#8659;
      </Link>
      </motion.h1>
    </motion.div>
  )
}

export default About
