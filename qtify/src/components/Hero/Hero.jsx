import React from "react";
import HeroImg from "../../assets/headphone.png";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={HeroImg} width={212}  alt="headphoneImage" />
      </div>
    </div>
  );
};

export default Hero;
