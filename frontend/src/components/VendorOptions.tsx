import React from "react";
import ProdTypeList from "./ProdTypeList";


const VendorOptions = () => {
    return(
        <div>
            <ProdTypeList list={['Pedidos', 'Novo', 'Anuncios', 'Definições']}/>
        </div>
    )
}

export default VendorOptions