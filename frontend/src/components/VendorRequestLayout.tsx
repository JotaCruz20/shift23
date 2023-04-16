import React from "react";
import VendorOptions from "./VendorOptions";
import saleData from "../data/sales.json"
import VendorHistoryBlock from "./VendorHistoryBlock";

const VendorRequestLayout = () =>{
    return(
        <div>
            <div className="flex justify-center p-2">
                <VendorOptions/>
            </div>
            
            <VendorHistoryBlock saleHistory={saleData}/>
        </div>
        
    )
}

export default VendorRequestLayout