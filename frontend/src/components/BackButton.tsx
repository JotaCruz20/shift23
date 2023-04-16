import React from "react";
import {IoIosArrowBack} from "react-icons/io"

import { useNavigate} from 'react-router-dom';


function BackButton(){
    const navigate = useNavigate();
    return(
            <div className=" h-8 w-16 bg-white rounded-xl cursor-pointer" onClick={()=> navigate(-1)}>
                <div className="flex flex-row items-center">
                <IoIosArrowBack className="scale-150"/>
                <p className="p-1">Volte</p>
                </div>

            </div>
    )

}


export default BackButton