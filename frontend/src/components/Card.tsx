import React from "react";

import {IoMdAddCircle} from "react-icons/io"

import { CardProps } from '../interfaces/IProps'
//
// 
           
//<p className="text-4xl text-border">Name</p>

const Card = ({ title, image, price, unit, name}: CardProps) => {
    return(
        <div className='flex h-[80%] w-[95%] flex-col bg-white rounded-lg mt-2 shadow-lg'>
            <div className="flex justify-center">
            <img
                    className="rounded-full -top-12 w-20 h-20 object-cover mt-2"
                    src={image}
                    alt="test"
                />
            </div>
            <div className="flex flex-col">
                <p className="px-4 text-left font-bold"> 
                    {title}
                </p> 
                <div className="flex flex-row py-2 px-4">
                    <div className="flex flex-col">
                        {name &&
                            <p className="text-left text-[8px]">
                                {name}
                            </p>
                        }
                        <p className="-mt-1 text-left text-[14px] text-green1 ">
                            {price}€/{unit}
                        </p>
                    </div>
                    {name &&
                        <div className="ml-2">
                            <IoMdAddCircle className="w-8 h-8 fill-orange"/>
                        </div>
                    }
                    
                    
                </div>
               
            </div>
        </div>
    )
}

export default Card;