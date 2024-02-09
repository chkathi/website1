import React from "react";
import { Home } from "../pages/Home.js";
import { Projects } from "../pages/Projects.js";
import { Resume } from "../pages/Resume.js";
import { ContactMe } from "../pages/ContactMe.js";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/resume"} element={<Resume />} />
        <Route path={"/projects-page"} element={<Projects />} />
        <Route path={"/contact-page"} element={<ContactMe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
