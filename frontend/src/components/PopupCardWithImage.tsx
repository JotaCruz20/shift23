import React from 'react';

import { IPopUpCardWithImageProps } from '../interfaces/IProps';

import {HiLocationMarker} from "react-icons/hi"

const PopupCardWithImage = ({ children, image, name, city }: IPopUpCardWithImageProps) => {

    return (
    <div className='absolute bottom-0 w-full'>
        <div className=" bg-white rounded-tr-3xl rounded-tl-3xl shadow-2xl flex items-center border-b-2 border-b-grey max-h-screen">
            <div className="ml-4 pt-4 relative items-start">
                <div className="flex flex-row w-screen">
                <img
                    className="absolute rounded-full -top-12 w-[100px] h-70v object-cover"
                    src={image}
                    alt="test"
                />
                <div className="flex flex-col w-screen ml-[120px]">
                    <h1 className=' text-[40px] ml-[4px]'>{name}</h1>
                    <div className='flex flex-row pb-4'>
                        <HiLocationMarker className="inline-block text-[20px]"/>
                        <h1 className='text-[15px]'>{city}</h1>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
        <div className='bg-white ]'>
            <div className='ml-4 max-h-[73vh] overflow-y-auto'>
                {children}
            </div>
        </div>
    </div>
    );
};

export default PopupCardWithImage;