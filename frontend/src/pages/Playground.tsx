import React from "react"
import BackButton from "../components/BackButton"
import ProdPage from "./ProdInfo"
import ProdBottom from "../components/ProdBottom"


const Playground = () => {
    //TODO: Make this a component
    return(
        
        <div className="w-64 h-64 bg-green1">
            <ProdPage unit='$' productImage="https://pngimg.com/uploads/shrek/shrek_PNG2.png" title='Banana' price={1.39} weight={1.3} producerName='Armenio Silva' producerImage='https://pngimg.com/uploads/shrek/shrek_PNG2.png'/>
        </div>
        )
}


export default Playground