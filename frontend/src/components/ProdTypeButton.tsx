import React from "react";

import { ProdTypeButtonProps } from "../interfaces/IProps";

const ProdTypeButton = ({name}: ProdTypeButtonProps) =>{
    return(
        <div className="bg-white border-green1 border-2 rounded-2xl py-1 px-2">
            <p>{name}</p>
        </div>
    )
}

export default ProdTypeButton