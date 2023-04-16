import React from "react";

import { ISliderProps } from "../interfaces/IProps";

import Card from "./SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Navigation, Pagination } from "swiper";
import SliderCardCart from "./SliderCartCard";

const SliderCart = ({items}: ISliderProps) => {
    return (
        <>
            <Swiper
                slidesPerView={3}
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
                                <SliderCardCart
                                    id={item.id}
                                    quantity={item.quantity}
                                    unit={item.unit}
                                    image={item.image}
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

export default SliderCart;