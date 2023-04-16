import React from "react";
import VendorRequestLayout from "../components/VendorRequestLayout";
import PopupCardWithImage from "../components/PopupCardWithImage";
import VendorAdvertisementLayout from "../components/VendorAdvertisementLayout";
import ProdTypeList from "../components/ProdTypeList";
import VendorNewLayout from "../components/VendorNewLayout";
import VendorSettingsLayout from "../components/VendorSettingsLayout";

import {api} from "../util/api"

const VendorHome = ({}) =>{

    const [selected, setSelected] = React.useState(0);

    const [sales, setSales] = React.useState<any>([])

    React.useEffect(() => {
        api.get("orders/seller/1")
        .then((response) => {
            console.log(response)
            setSales(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <div className="fixed w-screen h-32 flex flex-col justify-center items-center">
                <p className="text-3xl text-white">Painel de Vendas</p>
                <p className="text-sm text-white">Bem vindo de volta</p>
            </div>
            <PopupCardWithImage image={sales.length!=0 ? sales[0].user_image : "https://media.licdn.com/dms/image/C4E03AQGNXqNFbMGGbA/profile-displayphoto-shrink_800_800/0/1648069125360?e=2147483647&v=beta&t=9nSEQenJgUlc5CNxWI4oBJ2D-hI3g8St7HqDZ-SZ0tM"} name ='Armenio Silva' city='Coimbra'>
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