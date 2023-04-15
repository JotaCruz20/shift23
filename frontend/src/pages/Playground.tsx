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
    //TODO: Make this a component
    return(
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
                products.map((product, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <Card
                                title={product.title}
                                producer={product.producer_name}
                                unit={product.unit}
                                price={product.price}
                                image={product.image}
                                name={product.name}
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