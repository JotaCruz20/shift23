import React from "react";
import PopupCard from "./PopupCard";
import { ProdBottomProps } from "../interfaces/IProps";

import ProducerInfo from "./ProducerInfo"

import { useCart } from "../context/CartContext";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const ProdBottom = ({id, image, title, unit, value, producerName, producerImage }: ProdBottomProps) =>{

    const {addItem} = useCart()

    const [count, setCount] = React.useState(0);

    function handleAddItem() {
        addItem({
            id,
            title,
            image,
            value,
            unit,
            producerName,
            quantity: count
        })
    }

    return (
        <div className="w-32 h-32 bg-white">
             <PopupCard>
                <h1 className='text-3xl font-bold'> {title}</h1>
                <div className="flex flex-row justify-between ">
                    <div>
                        <div className="flex flex-row p-4">
                            <AiOutlineMinusCircle className="scale-150 my-4 ml-1 " onClick={()=> setCount(count => count-1)}/>
                            <p className="mx-4 my-3 ">{count}/{unit}</p>
                            <AiOutlinePlusCircle className="scale-150 my-4 ml-1" onClick={()=> setCount(count => count+1)} />
                        </div>
                    </div>
                </div>
                <ProducerInfo name={producerName} image={producerImage}/>
                <div className="w-full h-32"></div>
                <div className="flex justify-end w-full -mx-4 my-4">
                    <div className="h-12 w-64 bg-green2 rounded-md flex items-center justify-center flexbox" onClick={handleAddItem}>
                        <p className='text-white'>Adicionar ao Cesto</p>
                    </div>
                </div>
            </PopupCard>
        </div>




    )
}

export default ProdBottom