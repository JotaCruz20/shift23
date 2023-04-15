import React from "react";

import {AiOutlineHeart,AiOutlinePlusCircle} from "react-icons/ai"

import { CardProps } from '../interfaces/IProps'
//
// 
           
//<p className="text-4xl text-border">Name</p>

const Card = ({ title, image, price, discount, unit}: CardProps) => {
    return(
        <div className='flex h-64 w-64 bg-background flex-col rounded-3xl'>
            <div className="flex justify-center h-44 w-64">
            <img src={image} className="w-44 h-44 p-4 ml-8  flexbox" />
                <AiOutlineHeart className="fix bottom-0 mt-3 h-6 w-6 mr-6"/>

            </div>
            <div className="flex flex-col h-20 w-64">
                <div>  <p className="px-4 text-left"> {title}</p> </div>
                {discount !== 0 && <div className="px-4 text-xs line-through">{discount}</div>}
                <div className="grid grid-cols-6  gap-4 py-2 px-4">
                <p className="col-span-5 -mt-1 text-left">{price}/{unit}</p>
                <AiOutlinePlusCircle className="scale-150"/>
                </div>
               
            </div>
           

        </div>
    )
}

export default Card;