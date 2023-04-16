import React from "react";

import { ProdGridProps } from '../interfaces/IProps';

import SliderCard from "./SliderCard";
 
const ProdGrid = ({list}: ProdGridProps) => {
    return (
        <div className="grid grid-cols-4">
            {list.map((item) => (
                <div >
                <SliderCard
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    unit={item.unit}
                    image={item.image}
                    title={item.title}
                />
                </div>
            ))}
            </div>
    )
}

export default ProdGrid