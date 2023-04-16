import React, { useState } from "react";
import BackButton from "./BackButton";

import { ProdTopProps } from '../interfaces/IProps'

const ProdTop = ({image} : ProdTopProps) => {

    return(
        <div className="fixed top-5 left-5 z-10">
           <BackButton />
           <div className='flex justify-center w-screen'>
            <img src={image} className="h-64 w-64 align-center"></img>
           </div>
           
        </div>
    )

}

export default ProdTop