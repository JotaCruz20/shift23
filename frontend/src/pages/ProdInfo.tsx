import React, { useEffect, useState } from "react";
import ProdTop from "../components/ProdTop";
import ProdBottom from "../components/ProdBottom";
import PopupCard from "../components/PopupCard";
import BackButton from "../components/BackButton";

import { useParams } from "react-router-dom";

import {api} from '../util/api'

const ProdPage = () => {

    const { id } = useParams()

    const [product, setProduct] = useState<any>(null)

    useEffect(() => {
        async function getProduct() {
            let product = await api.get(`sales/${id}`)

            setProduct(product)
        }
        getProduct()
    }, [])

    if(product === null) return <div></div>
    return (
        <div>
            <ProdTop 
                image={product.product_image}></ProdTop>
            <ProdBottom 
                title={product.product_name} id={product.product_id} image={product.product_image} unit={product.unit} value={product.price}  producerImage={product.producer_image} producerName={product.producer_name} />
        </div>
    
    )


}

export default ProdPage;