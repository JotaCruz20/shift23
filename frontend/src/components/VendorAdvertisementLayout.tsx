import React, { useEffect, useState } from "react";

import { ProducerPageProps } from '../interfaces/IProps';
import PopupCardWithImage from "./PopupCardWithImage";
import BackButton from "./BackButton";

import { AiOutlineSearch } from "react-icons/ai";
import ProdTypeList from "./ProdTypeList";
import ProdGrid from "./ProdGrid";

import { api } from "../util/api";

//TODO: Fix import
//TODO: Fix Prog Grid Icon (porque estou a importar a mesma card do Market
const VendorAdvertisementLayout = () => {

    const [searchInput, setSearchInput] = useState<string>("")

    const [categories, setCategories] = useState<any>([])

    const [products, setProducts] = useState<any>([])
    const [selected, setSelected] = useState(0);

    const [allProducts, setAllProducts] = useState(products);
    const [visibleProducts, setVisibleProducts] = useState(products);

    // get producer info
    useEffect(() => {
        async function getProducts() {
            let categories = await api.get('categories')

            setCategories(categories)

            let products = await api.get(`seller/1/sales`)

            setAllProducts(products)
            setVisibleProducts(products.filter((product:any) => product.category === categories[0]))

        }
        getProducts()
    }, [])

    

    useEffect(() => {
        //setVisibleProducts(allProducts.filter((product) => product.category === categories[selected]))
    }, [selected])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    
        if (e.target.value.length > 0) {
            // Filter products by name and category
            const searchWords = e.target.value.toLowerCase().split(" ")

            setVisibleProducts(allProducts.filter((product: any) => {
                if(product.category !== categories[selected]) return false;
                const productName = product.title.toLowerCase()
                return searchWords.every((word: string) => productName.includes(word))
            }))
        }
        else {
            setVisibleProducts(visibleProducts.filter((product:any) => product.category === categories[selected]))
        }
    }


    return(
        <div>
            <div className="relative w-[90%] p-4">
                    <input type="text" onChange={handleChange} placeholder="Procura pelo o que gostas" className="bg-grey shadow-lg rounded-lg pl-10 px-4 py-5 w-full focus:outline-none cursor-text" />
                    <div className="absolute inset-y-0 left-3 pl-3 flex items-center">
                        <AiOutlineSearch className="h-6 w-6 " />
                    </div>
            </div>

            <ProdTypeList list={categories} selected={selected} onClick={(index: number) => setSelected(index)}/>
            <div className="h-[500px] overflow-y-auto">
                <ProdGrid list={visibleProducts} />
            </div>
            
        </div>


    )
}

export default VendorAdvertisementLayout