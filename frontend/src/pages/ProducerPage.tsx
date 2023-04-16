import React from "react";

import { ProducerPageProps } from '../interfaces/IProps';
import PopupCardWithImage from "../components/PopupCardWithImage";
import BackButton from "../components/BackButton";

import { AiOutlineSearch } from "react-icons/ai";
import ProdTypeList from "../components/ProdTypeList";
import ProdGrid from "../components/ProdGrid";

const ProducerPage = ({name}: ProducerPageProps) => {
    return(
        <div>
            <div className="fixed top-5 left-5 z-10">
                <BackButton />
            </div>
            <hr className='-mx-4 bg-green1'/>
           
            <PopupCardWithImage image='https://pngimg.com/uploads/shrek/shrek_PNG2.png' name ='Armenio Silva' city='Coimbra'>
            <div className="relative w-[90%] p-4">
                                <input type="text" placeholder="Procura pelo o que gostas" className="bg-grey shadow-lg rounded-lg pl-10 px-4 py-5 w-full focus:outline-none cursor-text" />
                                <div className="absolute inset-y-0 left-3 pl-3 flex items-center">
                                    <AiOutlineSearch className="h-6 w-6 " />
                                </div>
            </div>

            <ProdTypeList list={['Legumes', 'Frutas', 'Ovos', 'Frutas', 'Ovos', 'Frutas', 'Ovos', 'Frutas', 'Ovos', 'Frutas', 'Ovos','Frutas', 'Ovos','Frutas', 'Ovos','Frutas', 'Ovos','Frutas', 'Ovos']}/>
            <ProdGrid list={[{title:'Banana'}]} />


            </PopupCardWithImage>
        </div>

    )
}

export default ProducerPage