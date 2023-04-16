import React from "react";
import VendorRequestLayout from "../components/VendorRequestLayout";
import PopupCardWithImage from "../components/PopupCardWithImage";
import VendorAdvertisementLayout from "../components/VendorAdvertisementLayout";
import ProdTypeList from "../components/ProdTypeList";
import VendorNewLayout from "../components/VendorNewLayout";
import VendorSettingsLayout from "../components/VendorSettingsLayout";

import sales from "../data/sales.json"

const VendorHome = ({}) =>{

    const [selected, setSelected] = React.useState(0);

    return (
        <div>
            <div className="fixed w-screen h-32 flex flex-col justify-center items-center">
                <p className="text-3xl text-white">Painel de Vendas</p>
                <p className="text-sm text-white">Bem vindo de volta</p>
            </div>
            <PopupCardWithImage image='https://pngimg.com/uploads/shrek/shrek_PNG2.png' name ='Armenio Silva' city='Coimbra'>
                <div className="flex justify-center p-2">
                    <ProdTypeList list={['Pedidos', 'Novo', 'Anuncios', 'Definições']} selected={selected} onClick={(index: number) => setSelected(index)}/>
                </div>
                {selected === 0 && <VendorRequestLayout saleHistory={sales}/>}
                {selected === 1 && <VendorNewLayout/>}
                {selected === 2 && <VendorAdvertisementLayout/>}
                {selected === 3 && <VendorSettingsLayout/>}
            </PopupCardWithImage>
        </div>
    )
}

export default VendorHome