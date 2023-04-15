import React from 'react';

import { IPopUpCardProps } from '../interfaces/IProps';

const PopupCard= ({ children }: IPopUpCardProps) => {

    return (
        <div className="relative w-screen h-screen bg-green1">
            <div className="absolute bottom-0 w-[100%] bg-white rounded-tr-3xl rounded-tl-3xl shadow-2xl">
                <div className='ml-4 pt-4'>
                    {children}
                </div>
            </div>
        </div>
        
        );
};

export default PopupCard;