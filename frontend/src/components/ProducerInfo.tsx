import React from "react";

import { ProducerInfoProps } from '../interfaces/IProps'


const ProducerInfo = ({name, image}: ProducerInfoProps) =>{
    return(
        <div>
            <hr className='-mx-4 bg-green1'/>
            <div className='bg-white flex flex-row justify-between'>
                <div className="flex flex-col">
                    <p className='text-2xl underline underline-offset-4 decoration-green1 '>Produtor:</p>
                    <p className="py-2">{name}</p>
                </div>
                <div>
                    <img className='rounded-full h-16 w-16 m-6'src={image}></img>
                </div> 
            </div>
            <hr className='-mx-4 bg-green1'/>
        </div>
    )
}

export default ProducerInfo