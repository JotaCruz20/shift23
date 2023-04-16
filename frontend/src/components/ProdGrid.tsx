import React from "react";

import { ProdGridProps } from '../interfaces/IProps';

import SliderCard from "./SliderCard";
 
const ProdGrid = ({list}: ProdGridProps) => {
    return (
        <div className="grid grid-cols-3">
            {list.map((item, index) => (
                <div key={index}>
                <SliderCard
                    id={item.id}
                    name={item.name}
                    value={item.value}
                    unit={item.unit}
                    image={item.image}
                    title={item.title}
                    isProducer={true}
                />
                </div>
            ))}
            </div>
    )
}

export default ProdGrid