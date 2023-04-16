import React from "react";


import { VendorHistorySliderProps } from "../interfaces/IProps";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Navigation, Pagination } from "swiper";
import SliderCardCart from "./SliderCartCard";

const VenderHistorySlider = ({products}: VendorHistorySliderProps) => {
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
                products.map((item, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <div className="py-2">
                                <SliderCardCart
                                    id={item.id}
                                    image={item.image}
                                    quantity={item.quantity}
                                    unit={item.unit}
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

export default VenderHistorySlider;