import React from "react";

import {IoMdAddCircle} from "react-icons/io"

import { CardProps } from '../interfaces/IProps'

import { useCart } from '../context/CartContext';
//
// 
           
//<p className="text-4xl text-border">Name</p>

const SliderCard = ({ id, title, image, price, unit, name}: CardProps) => {
    const { addItem, items  } = useCart();

    const handleAddItem = () => {
        addItem({
            id,
            title,
            image,
            price,
            quantity: 1,
            unit,
            producerName: name!
        });

    };

    return(
        <div className='flex h-[80%] w-[95%] flex-col bg-white rounded-lg mt-2 border-2 border-white shadow-md'>
    <div className="flex justify-center">
        <img className="rounded-full -top-12 w-20 h-20 object-cover mt-2" src={image} alt="test" />
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
                    <IoMdAddCircle className="w-8 h-8 fill-orange" onClick={handleAddItem}/>
                </div>
            }               
        </div>               
    </div>
</div>
    )
}

export default SliderCard;