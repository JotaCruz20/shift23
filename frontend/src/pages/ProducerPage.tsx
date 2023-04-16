import React, { useEffect, useState } from "react";

import { ProducerPageProps } from '../interfaces/IProps';
import PopupCardWithImage from "../components/PopupCardWithImage";
import BackButton from "../components/BackButton";

import { AiOutlineSearch } from "react-icons/ai";
import ProdTypeList from "../components/ProdTypeList";
import ProdGrid from "../components/ProdGrid";

import { useParams } from "react-router-dom";

import {api} from '../util/api'

//TODO: Fix import
const ProducerPage = () => {

    const { id } = useParams()

    const [producer, setProducer] = useState<any>(null)

    const [categories, setCategories] = useState<any>([])
    const [allProducts, setAllProducts] = useState<any>([])
    const [productsToShow, setProductsToShow] = useState<any>([])

    const [searchInput, setSearchInput] = useState<string>("")
    const [selected, setSelected] = React.useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchInput(e.target.value)
        if (e.target.value.length > 0) {
            // Filter products by name and category
            const searchWords = e.target.value.toLowerCase().split(" ")

            setProductsToShow(allProducts.filter((product: any) => {
                if(product.category !== categories[selected]) return false;
                const productName = product.title.toLowerCase()
                return searchWords.every((word: string) => productName.includes(word))
            }))
        }
        else {
            setProductsToShow(allProducts.filter((product:any) => product.category === categories[selected]))
        }
        
    }

    // get producer info
    useEffect(() => {
        async function getProducts() {
            let categories = await api.get('categories')

            setCategories(categories)

            let products = await api.get(`seller/${id}/sales`)

            setAllProducts(products)
            setProductsToShow(products.filter((product:any) => product.category === categories[0]))

            let producer = await api.get(`seller/${id}`)
            setProducer(producer)
        }
        getProducts()
    }, [])

    useEffect(() => {
        setProductsToShow(allProducts.filter((product:any) => product.category === categories[selected]))
    }, [selected])

    if(!producer) return <div></div>
    return(
        <div>
            <div className="fixed top-5 left-5 z-10">
                <BackButton />
            </div>
            <hr className='-mx-4 bg-green1'/>
           
            <PopupCardWithImage image={producer.image} name ={producer.name} city={producer.city}>
            <div className="relative w-[90%] p-4">
                <input type="text" placeholder="Procura pelo o que gostas" onChange={handleChange} className="bg-grey shadow-lg rounded-lg pl-10 px-4 py-5 w-full focus:outline-none cursor-text" />
                <div className="absolute inset-y-0 left-3 pl-3 flex items-center">
                    <AiOutlineSearch className="h-6 w-6 " />
                </div>
            </div>

            <ProdTypeList list={categories} selected={selected} onClick={(index: number) => setSelected(index)}/>
            <div className='h-[500px] overflow-y-auto mt-2' >
                <ProdGrid list={productsToShow} />
            </div>
            
            </PopupCardWithImage>
        </div>

    )
}

export default ProducerPage