import React from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";



const Home = () => {
  return (
    <div className="home-container">
    <motion.h1
    initial={{y: -10}}
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
      <Link className="link" to="/about">
        &#8659;
      </Link>
    </motion.h1>
    </div>
  )
}

export default Home



/* const parrafoVariants = {
  hidden: {
    y: "100vh"
  },
  show: {
    y: "0",
    transition: {
      duration: 3,
      ease: "easeIn"
    }
  }
}

const Home = () => {
  return (
    <motion.div>
      <motion.h1
        initial={{ x: "200vw", y: "500px" }}
        animate={{
          x: "0",
          y: "0",
          transition: { duration: 1, ease: "easeInOut" }
        }}
      >Saludos world</motion.h1>
      <motion.p
        variants={parrafoVariants}
        initial="hidden"
        animate="show"
      > Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident recusandae voluptate, delectus ratione quis fugiat error vitae, tempora sint commodi porro. Voluptatem repudiandae laudantium maxime at ipsa natus quia.</motion.p>
    </motion.div>
  )
} */