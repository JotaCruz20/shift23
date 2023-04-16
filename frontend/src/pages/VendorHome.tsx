import React from "react";
import PopupCardWithImage from "../components/PopupCardWithImage";
import producers from "../data/producers.json"
import VendorOptions from "../components/VendorOptions";
import saleData from "../data/sales.json"
import VendorHistoryBlock from "../components/VendorHistoryBlock";

const VendorHome = ({}) =>{
    return (
    <div>
      <div className="fixed w-screen h-32 flex flex-col justify-center items-center">
            <p className="text-3xl text-white">Painel de Vendas</p>
            <p className="text-sm text-white">Bem vindo de volta</p>
            </div>
            <PopupCardWithImage image='https://pngimg.com/uploads/shrek/shrek_PNG2.png' name ='Armenio Silva' city='Coimbra'>
            <div className="h-[700px]">
                <VendorOptions/>
                <VendorHistoryBlock saleHistory={saleData}/>
            </div>  
           </PopupCardWithImage>
        </div>
    )
}

export default VendorHome