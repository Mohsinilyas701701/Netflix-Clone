import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Netflix from "./Netflix.png";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", {});
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={Netflix} alt='' />
    </div>
  );
};

export default Navbar;
