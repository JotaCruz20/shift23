import React from "react"

import { PropsButton } from "../interfaces/IProps"



const Button = ({ title, onClick, type, disabled }: PropsButton) => {

    let style = ` bg-green1 text-white font-medium w-[70%] h-[40px] rounded-lg shadow-lg  enabled:cursor-pointer disabled:opacity-25 disabled:opacity-25 disabled:cursor-not-allowed mb-2`

    return (
        <button 
            onClick={onClick ? () => onClick() : () => {}}
            className = {style}
            type = {type}
            disabled = {disabled ? disabled : false}
        >
            <div className='text-xl justify-center align-top '>
               <h1>{title}</h1>
            </div>
        </button>
    )
}


export default Button
