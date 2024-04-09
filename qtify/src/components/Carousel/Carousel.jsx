import React,{useEffect} from "react";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
// Import Swiper React components
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import styles from "./Carousel.module.css";
import { Navigation } from 'swiper/modules';
const Controls=({data})=>{
const swiper=useSwiper();

useEffect(()=>{
  swiper.slideTo(0)
},[data]);

return <></>;
}
const Carousel = ({ data, renderComponent }) => {
  return (
    <>
      <Swiper
        style={{ padding: "0px 20px" }}
        className="swiperClass"
        initialSlide={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={8}    
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}S
        allowTouchMove
      >
        <Controls data={data}/>
        <CarouselLeftNavigation/>
        <CarouselRightNavigation/>
        {data.map((e) => (
          <SwiperSlide>{renderComponent(e)}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
