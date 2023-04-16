import React from "react";
import VendorRequestLayout from "../components/VendorRequestLayout";
import PopupCardWithImage from "../components/PopupCardWithImage";
import AdvertisementLayout from "../components/VendorAdvertisementLayout";
import VendorOptions from "../components/VendorOptions";


//VendorRequestLayout/>
//<AdvertisementLayout/>

const VendorHome = ({}) =>{
    return (
    <div>
      <div className="fixed w-screen h-32 flex flex-col justify-center items-center">
            <p className="text-3xl text-white">Painel de Vendas</p>
            <p className="text-sm text-white">Bem vindo de volta</p>
      </div>
      <PopupCardWithImage image='https://pngimg.com/uploads/shrek/shrek_PNG2.png' name ='Armenio Silva' city='Coimbra'>
      <div className="flex justify-center p-2">
                <VendorOptions/>
            </div>
            <AdvertisementLayout/>
           </PopupCardWithImage>
        </div>
    )
}

export default VendorHome