import React from "react";
import { ProdUnitProps } from "../interfaces/IProps";

import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"




const ProdUnit = ({price, unit, weight}: ProdUnitProps) => { 

    return (
            <div className="flex flex-row p-4">
                <AiOutlineMinusCircle className="scale-150 my-4 ml-1 " onClick={()=> 1}/>
                <p className="mx-4 my-3 ">{weight}Kg</p>
                <AiOutlinePlusCircle className="scale-150 my-4 ml-1" onClick={()=> 1} />
            </div>
    )
}

export default ProdUnit