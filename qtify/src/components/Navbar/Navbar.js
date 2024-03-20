import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo.js";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";
import Search from "../Search/Search.js";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">    
          <Logo />
        </Link>
        <Search placeholder="Search a album of your choice"/>
        <Button>Give Feedback</Button>
      </nav>
    </>
  );
}

export default Navbar;
