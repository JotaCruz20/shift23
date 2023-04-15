import React from "react";

import { HiLocationMarker } from "react-icons/hi"
import { BsFillPersonFill } from "react-icons/bs";
import { RiShoppingBasketLine } from "react-icons/ri"

const HomeScreen = () => {
return (
  <div>
    <div className="flex justify-center h-full">
      <div className="inline-flex bg-green1 px-2 rounded-lg mx-auto mt-5">
        <div className="flex flex-row">
          <HiLocationMarker className="mb-[3px] h-6 w-6"/>
          <h1 className="text-[16px] font-bold">Coimbra</h1>
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-between mt-8 items-center">
      <div className="flex flex-col ml-8">
        <div className="flex rounded-full items-center justify-center h-7 w-7 bg-orange">
          <BsFillPersonFill className="mb-[3px] h-6 w-6"/>
        </div>
        <p className="text-[12px]">Perfil</p>
      </div>
      <p className="text-[20px]">Bem Vindo de Volta</p>
      <div className="flex flex-col mr-8 items-center">
        <div className="flex rounded-full items-center justify-center h-7 w-7 bg-orange">
          <RiShoppingBasketLine className="mb-[3px] h-6 w-6"/>
        </div>
        <p className="text-[12px] ">Cesto</p>
      </div>
    </div>
    <div className="flex justify-center h-full">
      <div className="inline-flex px-2 rounded-lg mx-auto mt-5">
        <h1>MERDA PARA PROCURAR</h1>
      </div>
    </div>
    <div>
      <h1 className="text-[30px]">Produtores</h1>
    </div>
  </div>
);
};

export default HomeScreen;