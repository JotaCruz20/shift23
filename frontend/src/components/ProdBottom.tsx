import React from "react";
import PopupCard from "./PopupCard";
import { ProdBottomProps } from "../interfaces/IProps";
import ProdUnit from "./ProdUnit";

import ProducerInfo from "./ProducerInfo"
import BasketButton from "./BasketButton"

const ProdBottom = ({title, unit, price, weight, producerName, producerImage }: ProdBottomProps) =>{
    return (
        <div className="w-32 h-32 bg-white">
             <PopupCard>
                <h1 className='text-3xl'> {title}</h1>
                <div className="flex flex-row justify-between ">
                    <ProdUnit unit={unit} price={price} weight={weight}/>
                        <div>
                            <p className="text-3xl font-bold my-6 mx-6">{price}{unit}/Kg</p>
                        </div>
                    </div>
                <ProducerInfo name={producerName} image={producerImage}/>
                <div className="w-full h-32"></div>
                <div className="flex justify-end w-full -mx-4 my-4">
                    <BasketButton/>
                </div>
            </PopupCard>
        </div>




    )
}

export default ProdBottom