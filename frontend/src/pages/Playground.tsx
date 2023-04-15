import React from "react"

import Card from "../components/Card"
import { Swiper, SwiperSlide } from "swiper/react";
import products from "../data/products.json"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Navigation, Pagination } from "swiper";

const Playground = () => {
    return(
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="flex justify-center"
            >
            {
                products.map((product, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <Card
                                title={product.title}
                                producer={product.producer_name}
                                unit={product.unit}
                                price={product.price}
                                image={product.image}
                            />
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </>
    )   
   
}


export default Playground