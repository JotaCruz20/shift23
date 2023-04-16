import React from "react";

import { ProducerPageProps } from '../interfaces/IProps';
import PopupCardWithImage from "./PopupCardWithImage";
import BackButton from "./BackButton";

import { AiOutlineSearch } from "react-icons/ai";
import ProdTypeList from "./ProdTypeList";
import ProdGrid from "./ProdGrid";
import products from "../data/products.json"

//TODO: Fix import
//TODO: Fix Prog Grid Icon (porque estou a importar a mesma card do Market
const AdvertisementLayout = () => {
    return(
        <div>
            <div className="relative w-[90%] p-4">
                    <input type="text" placeholder="Procura pelo o que gostas" className="bg-grey shadow-lg rounded-lg pl-10 px-4 py-5 w-full focus:outline-none cursor-text" />
                    <div className="absolute inset-y-0 left-3 pl-3 flex items-center">
                        <AiOutlineSearch className="h-6 w-6 " />
                    </div>
            </div>

            <ProdTypeList list={['Legumes', 'Frutas', 'Ovos', 'Frutas', 'Ovos', 'Frutas', 'Ovos', 'Frutas', 'Ovos', 'Frutas', 'Ovos','Frutas', 'Ovos','Frutas', 'Ovos','Frutas', 'Ovos','Frutas', 'Ovos']}/>
            <div className="h-[500px] overflow-y-auto">
                <ProdGrid list={products} />
            </div>
            
        </div>


    )
}

export default AdvertisementLayout