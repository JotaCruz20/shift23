import React from "react";
import {VendorHistoryProps } from "../interfaces/IProps";
import VendorHistoryCard from "./VendorHistoryCard";



const VendorHistoryBlock = ({saleHistory}: VendorHistoryProps) => {
    return (
        <div className="flex flex-col overflow-y-scroll h-full">
            {saleHistory.map((item) => (
                <div className="my-2">
                    <VendorHistoryCard customer={item.customer} order_nr={item.order_nr} status={item.status} total={item.total} products={item.prod_list}/>
                </div>
            ))}
            </div>
    )
}

export default VendorHistoryBlock