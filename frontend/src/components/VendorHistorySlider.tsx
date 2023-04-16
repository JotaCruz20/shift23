import React from "react";


import { VendorHistorySliderProps } from "../interfaces/IProps";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Navigation, Pagination } from "swiper";
import VendorHistorySliderCard from "./VendorHistorySlideCard";

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
                                <VendorHistorySliderCard
                                    image={item.image}
                                    weight={item.weight}
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