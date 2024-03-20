import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo.js";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">    
          <Logo />
        </Link>
        <Button>Give Feedback</Button>
      </nav>
    </>
  );
}

export default Navbar;
