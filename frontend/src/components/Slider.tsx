import React from "react";

import { ISliderProps } from "../interfaces/IProps";

import Card from "./SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Navigation, Pagination } from "swiper";

const Slider = ({items}: ISliderProps) => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={5}
                loop={false} 
                pagination={false}
                modules={[Navigation, Pagination]}
                className="flex justify-center ml-2"
            >
            {
                items.map((item, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <div className="py-2">
                                <Card
                                    id={item.id}
                                    title={item.title}
                                    unit={item.unit}
                                    value={item.value}
                                    image={item.image}
                                    name={item.name}
                                />
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </>
    );
};

export default Slider;