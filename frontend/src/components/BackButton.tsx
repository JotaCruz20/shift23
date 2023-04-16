import React from "react";
import {IoIosArrowBack} from "react-icons/io"

function BackButton(){
    return(
            <div className=" h-8 w-16 bg-white rounded-xl cursor-pointer" onClick={()=> 1}>
                <div className="flex flex-row items-center">
                <IoIosArrowBack className="scale-150"/>
                <p className="p-1">Volte</p>
                </div>

            </div>
    )

}


export default BackButton