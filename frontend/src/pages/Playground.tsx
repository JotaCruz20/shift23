import React from "react"

import Navbar from "../components/Navbar"
import PopupCard from "../components/PopupCard"
import BackButton from "../components/BackButton"



const Playground = () => {
    
    return(
        <div>
            <div className="fixed top-0 left-0 z-10">
                <BackButton />
            </div>
            <PopupCard>
                <h1>teste</h1>
            </PopupCard>
        </div>
    )
}

export default Playground