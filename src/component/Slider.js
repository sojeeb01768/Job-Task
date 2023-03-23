import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../src/assets/Banner.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const Slider = () => {
    return (
        <div className='hidden lg:block md:block'>
            
            <>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={img} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={img} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={img} alt=""/></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Slider;