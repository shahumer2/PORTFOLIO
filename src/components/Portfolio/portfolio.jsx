import React from 'react'
import "./portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import image1 from "../Portfolio/1.png"
import image2 from "../Portfolio/2.png"
import ecommerce from "../../img/ecommerce.png"
import musicapp from "../../img/musicapp.png"
import hoc from "../../img/hoc.png"
function portfolio() {
    return (
        <div className="portfolio" id='Portfolio'>
            <span> Recent Projects</span>
            <span> Portfolio</span>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicapp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hoc} alt="" />
                </SwiperSlide>


            </Swiper>

        </div>
    )
}

export default portfolio