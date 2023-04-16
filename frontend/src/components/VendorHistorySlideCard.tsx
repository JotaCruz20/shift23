import React from "react";
   
import {HistorySliderCardProps} from '../interfaces/IProps';
const VendorHistorySliderCard = ({ image, weight}: HistorySliderCardProps) => {

    return(
        <div className='flex h-[90%] w-[95%] flex-col bg-white rounded-lg mt-2 border-2 border-white shadow-md'>
    <div className="flex justify-center">
        <img className="rounded-full -top-12 w-20 h-20 object-cover mt-2" src={image} alt="test" />
    </div>
    <div className="flex flex-col">
        <p className="px-4 text-center font-bold"> 
            {weight} Kg
        </p>               
    </div>
</div>
    )
}

export default VendorHistorySliderCard;