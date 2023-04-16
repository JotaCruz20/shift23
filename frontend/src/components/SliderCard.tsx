import React from "react";

import {IoMdAddCircle} from "react-icons/io"

import { CardProps } from '../interfaces/IProps'

import { useCart } from '../context/CartContext';

//import navigator
import { useNavigate } from 'react-router-dom'
           
//<p className="text-4xl text-border">Name</p>

const SliderCard = ({ id, title, image, value, unit, name, isProducer}: CardProps) => {
    const navigate = useNavigate();
    const { addItem, items  } = useCart();

    const handleAddItem = () => {
        addItem({
            id,
            title,
            image,
            value,
            quantity: 1,
            unit,
            producerName: name!
        });

    };

    function redirect() {
        if(!name){
            navigate(`/producer/${id}`)
        }
        else{
            navigate(`/product/${id}`)
        }
        
    }

    return(
        <div className='flex h-[90%] w-[95%] flex-col bg-white rounded-lg mt-2 border-2 border-white shadow-md'>
    <div className="flex justify-center">
        <img className="rounded-full -top-12 w-20 h-20 object-cover mt-2" src={image} alt="test" onClick={() => redirect()}/>
    </div>
    <div className="flex flex-col" >
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
                    {value} {name? "€/" :""} {unit}
                </p>
            </div>
            {name && !isProducer &&
                <div className="ml-[55px]">
                    <IoMdAddCircle className="w-8 h-8 fill-orange" onClick={handleAddItem}/>
                </div>
            }               
        </div>               
    </div>
</div>
    )
}

export default SliderCard;