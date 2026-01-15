import React from "react";
import { Link } from "react-router-dom";
import { easeIn, motion } from "motion/react";

const Nav = () => {
  const navElem = ["Home", "Contact", "Custom-Order", "Glow"];

  return (
    <motion.nav
      initial={{
        y: "-50%",
        opacity: 0,
      }}
      whileInView={{
        y: "0%",
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: easeIn,
      }}
      className="navbar"
    >
      {navElem.map((item, idx) => {
        return (
          <Link
            className="nav-items"
            key={idx}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
          >
            {item}
          </Link>
        );
      })}
    </motion.nav>
  );
};

export default Nav;
