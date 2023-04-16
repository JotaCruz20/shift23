import React from "react";
import { VendorHistoryCardProps } from "../interfaces/IProps";
import {RiCloseCircleLine} from "react-icons/ri"
import Button from "./Button";

import VendorHistorySlider from "./VendorHistorySlider";



const VendorHistoryCard = ({customer,status, total , products, order_nr}: VendorHistoryCardProps) => {
    return(
    <div className="flex w-screen justify-center">
        <div className="flex flex-col items-center w-4/5 h-[250px] border-grey border-4 rounded-lg">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col p-2">
                    <p>{customer}</p>
                    <p className="text-xs">Pedido#{order_nr}</p>
                </div>
                <div className="flex flex-row items-center px-4">
                    <p className="px-2">{status}</p>
                    <RiCloseCircleLine className="scale-150"/>
                </div>
            </div>
            <div className="h-64 w-full">
                <VendorHistorySlider products={products}/>
            </div>
            <div className="flex flex-row w-full justify-between items-center">
                <div className="flex ">
                        <p className="p-2">Total: {total}€</p>
                </div>
                <div  className="w-32">
                    <Button title='Ver Mais' onClick={() => 1} type='button' disabled={false}/>
                </div>
            </div>
        </div>
            
    </div>

    )
  }
  
  export default VendorHistoryCard