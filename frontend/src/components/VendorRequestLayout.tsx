import React from "react";

import saleData from "../data/sales.json"
import {VendorRequestProps} from "../interfaces/IProps";
import VendorHistoryCard from "./VendorHistoryCard";
const VendorRequestLayout = ({saleHistory}: VendorRequestProps) =>{
    return(
        <div className="flex flex-col ">
            {saleHistory.map((item,index) => (
                <div className="my-1 mr-4" key={index}>
                    <VendorHistoryCard customer={item.customer} order_nr={item.order_nr} status={item.status} total={item.total} products={item.prod_list}/>
                </div>
            ))}
            </div>
    )
}

export default VendorRequestLayout