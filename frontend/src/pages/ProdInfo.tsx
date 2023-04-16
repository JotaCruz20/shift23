import React from "react";
import ProdTop from "../components/ProdTop";
import ProdBottom from "../components/ProdBottom";
import PopupCard from "../components/PopupCard";
import BackButton from "../components/BackButton";

import { ProdInfoProps } from '../interfaces/IProps';

const ProdPage = ({ title, price, weight, unit, producerName, producerImage, productImage }: ProdInfoProps) => {
        return (
           <div>
                <ProdTop 
                    image={productImage}></ProdTop>
                <ProdBottom 
                    title={title} unit={unit} price={price} weight={weight} producerImage={producerImage} producerName={producerName}/>
            </div>
        
        )


}

export default ProdPage;