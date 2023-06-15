import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0.5, x: 0 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -1000 },
};

function AnimatedPage({ children }) {
  return (
    <>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 2 }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default AnimatedPage;