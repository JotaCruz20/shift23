import React, { useState, useEffect } from "react";

import {useNavigate} from 'react-router-dom';

import { HiLocationMarker } from "react-icons/hi"
import { BsFillPersonFill } from "react-icons/bs";
import { RiShoppingBasketLine } from "react-icons/ri"
import { AiOutlineSearch } from "react-icons/ai"

import products from "../data/products.json"
import producers from "../data/producers.json"
import Slider from "../components/Slider";

import { api } from "../util/api"

const HomeScreen = () => {

  const [searchInput, setSearchInput] = useState<string>("")

  const navigate = useNavigate();
  
  const [allProducts, setAllProducts] = useState<any>([])
  const [allProducers, setAllProducers] = useState<any>([])

  const [productsToShow, setProductsToShow] = useState<any>([])
  const [producersToShow, setProducersToShow] = useState<any>([])

  //make a api request to get the products and producers
  useEffect(() => {
    api.get("customer/2/sellers")
    .then((response) => {
      console.log(response)
      setAllProducers(response)
      setProducersToShow(response)
    })
    .catch((error) => {
      console.log(error)
    })

    api.get("customer/2/sales")
      .then((response) => {
        setAllProducts(response)
        setProductsToShow(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchInput(e.target.value)

    if (e.target.value.length > 0) {
        const searchWords = e.target.value.toLowerCase().split(" ")

        setProducersToShow(allProducers.filter((producer: any) => {
            const producerName = producer.title.toLowerCase()
            return searchWords.every((word: string) => producerName.includes(word))
        }))

        setProductsToShow(allProducts.filter((product: any) => {
            const productName = product.title.toLowerCase()
            return searchWords.every((word: string) => productName.includes(word))
        }))

    }
    else {
        setProducersToShow(allProducers)
        setProductsToShow(allProducts)
    }
  }

  return (
    <div>
      <div className="flex justify-center h-full">
        <div className="inline-flex bg-green2 px-2 rounded-lg mx-auto mt-5">
          <div className="flex flex-row">
            <HiLocationMarker className="mb-[3px] h-6 w-6"/>
            <h1 className="text-[16px] font-bold">Coimbra</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-8 items-center">
        <div className="flex flex-col ml-8">
          <div className="flex rounded-full items-center justify-center h-7 w-7 bg-grey">
            <BsFillPersonFill className="mb-[3px] h-6 w-6 fill-green2"/>
          </div>
          <p className="text-[12px]">Perfil</p>
        </div>
        <p className="text-[20px]">Bem Vindo de Volta</p>
        <div className="flex flex-col mr-8 items-center">
          <div className="flex rounded-full items-center justify-center h-7 w-7 bg-grey" onClick={() => navigate("/cart")}>
            <RiShoppingBasketLine className="mb-[3px] h-6 w-6 fill-green2"/>
          </div>
          <p className="text-[12px] ">Cesto</p>
        </div>
      </div>
      <div className="flex justify-center h-full">
        <div className="inline-flex px-2 rounded-lg mx-auto mt-5">
          <div className="relative w-[300px] mt-[10%]">
              <input type="text" placeholder="Procura pelo que gostas" onChange={handleChange} value={searchInput} className="bg-grey shadow-lg rounded-xl pl-10 pr-4 py-2 w-full focus:outline-none cursor-text" />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <AiOutlineSearch className="h-6 w-6 fill-ternaryColor1 " />
              </div>
          </div>
        </div>
      </div>
      
      {producersToShow.length > 0 &&
      <div>
        <div className="mt-10">
          <h1 className="text-[30px] ml-[20px]">Produtores</h1>
          <div className="h-[3px] w-[120px] ml-[20px] bg-green1"/>
        </div>

        <Slider items={producersToShow}/>
      </div>
      }

      {productsToShow.length > 0 &&
      <div>
        <div className="mt-10">
          <h1 className="text-[30px] ml-[20px]">Produtos</h1>
          <div className="h-[3px] w-[80px] ml-[20px] bg-green1"/>
        </div>

        <Slider items={productsToShow}/>
      </div>
      }

    </div>
  );
};

export default HomeScreen;