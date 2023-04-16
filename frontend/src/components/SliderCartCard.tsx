import React from "react";

import {IoMdAddCircle} from "react-icons/io"

import { SlideCardProps } from '../interfaces/IProps'

import { useCart } from '../context/CartContext';
//
// 
           
//<p className="text-4xl text-border">Name</p>

const SliderCardCart = ({ id, image, quantity, unit}: SlideCardProps) => {

    return(
        <div className='flex h-[80%] w-[95%] flex-col bg-white rounded-lg mt-2'>
    <div className="flex justify-center">
        <img className="rounded-full -top-12 w-20 h-20 object-cover mt-2" src={image} alt="test" />
    </div>
    <div className="flex flex-col">
        <p>{quantity} {unit}</p>
    </div>
</div>
    )
}

export default SliderCardCart;