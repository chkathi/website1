import React from "react";
import { motion } from "framer-motion";

export const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img alt="resume" src="/" />
    </motion.div>
  );
};
