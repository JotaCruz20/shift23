import React from "react";

import {ProdTypeListProp} from '../interfaces/IProps';
import ProdTypeButton from "./ProdTypeButton";

const ProdTypeList = ({list, selected, onClick}: ProdTypeListProp) => {
    return (
        <div className="flex flex-row gap-2 overflow-x-auto mr-5 ">
            {
                list.map((item, index) => 
                <div key={index} onClick={() => onClick(index)}>
                    <ProdTypeButton  selected={selected===index} name={item} />
                </div>
            )
            }
        </div>

    )
}

export default ProdTypeList