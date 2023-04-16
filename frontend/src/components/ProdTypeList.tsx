import React from "react";

import {ProdTypeListProp} from '../interfaces/IProps';
import ProdTypeButton from "./ProdTypeButton";

const ProdTypeList = ({list}: ProdTypeListProp) => {
    return (
        <div className="flex flex-row gap-2 overflow-x-auto">
            {
            list.map((item) => <ProdTypeButton name={item}/>)
            }

        </div>

    )
}

export default ProdTypeList