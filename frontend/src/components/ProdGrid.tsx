import React from "react";

import { ProdGridProps } from '../interfaces/IProps';
import Card from "./Card";
 
const ProdGrid = ({list}: ProdGridProps) => {
    return (
        <div className="grid grid-rows-2 overflow-y-auto">
            {
            list.map((item) => <Card name={item.name} price={item.price} unit={item.unit} image={item.image} title={item.image}/>)
            }
        </div>
    )
}

export default ProdGrid