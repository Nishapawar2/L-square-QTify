import React, { useEffect, useState } from 'react';
import { ReactComponent as RightArrow } from "../../../assets/rightArrow.svg";
import { useSwiper } from 'swiper/react';
import styles from "./CarouselRightNavigation.module.css";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd]=useState(swiper.isEnd);

  useEffect(()=>{
    swiper.on("slideChange",function(){
      setIsEnd(swiper.isEnd);
    });
  },[]);

  return (
   <div className={styles.rightNavi}>
    {!isEnd && <RightArrow onClick={()=>{swiper.slideNext()}}/>}
   </div>
  );
}

export default CarouselRightNavigation