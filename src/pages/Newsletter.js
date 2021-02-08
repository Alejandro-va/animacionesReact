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

const Newsletter = () => {
  return (
    <motion.div className="newsletter-container" variants={containerVariants} initial="hidden" animate="show">
      <h1>
        ¿Desea recibir más información?
      </h1>
      <button className="newsletter-button">
        Si, deseo recibir  más información
      </button>
      <Link className="link" to="/">
        <button className="newsletter-button">No, Llévaem a Home </button>
      </Link>
    </motion.div>
  )
}

export default Newsletter
