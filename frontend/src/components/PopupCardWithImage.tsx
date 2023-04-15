import React from 'react';

import { IPopUpCardWithImageProps } from '../interfaces/IProps';

import {HiLocationMarker} from "react-icons/hi"

const PopupCardWithImage = ({ children, image, name, city }: IPopUpCardWithImageProps) => {

    return (
    <div className='absolute bottom-0 w-full'>
        <div className=" bg-white rounded-tr-3xl rounded-tl-3xl shadow-2xl flex items-center border-b-2 border-b-grey">
            <div className="ml-4 pt-4 relative items-start">
                <div className="flex flex-row w-screen">
                <img
                    className="absolute rounded-full -top-12 w-[100px] h-[100px] object-cover"
                    src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="test"
                />
                <div className="flex flex-col w-screen ml-[120px]">
                    <h1 className=' text-[20px] ml-[4px]'>{name}</h1>
                    <div className='flex flex-row'>
                        <HiLocationMarker className="inline-block text-[20px]"/>
                        <h1>{city}</h1>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
        <div className='bg-white'>
            <div className='ml-4'>
                {children}
            </div>
        </div>
    </div>
    );
};

export default PopupCardWithImage;