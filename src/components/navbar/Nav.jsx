import React from "react";
import { Link } from "react-router-dom";
import { easeIn, motion } from "motion/react";

const Nav = () => {
  const navElem = [
    { label: "Home", path: "/" },
    { label: "Contact", path: "/contact" },
    { label: "Custom Order", path: "/custom-order" },
    { label: "Glow", path: "/glow" },
  ];

  return (
    <div className="logoSection">
      <Link to="/" className="nav-side-logo" aria-label="Pristine Glow home">
        <img src="/logo/mainLogo.svg" alt="Pristine Glow" loading="eager" />
      </Link>
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
        aria-label="Primary"
      >
        {navElem.map((item) => {
          return (
            <Link className="nav-items" key={item.path} to={item.path}>
              {item.label}
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default Nav;
