import React from "react";

import { useNavigate } from "react-router-dom";

import PopupCard from "../components/PopupCard";
import Button from "../components/Button";

const WelcomeScreen = () => {
    const navigate = useNavigate();
    return (
        <PopupCard>
            <h1 className="text-[24px] font-bold">Do Campo para sua Casa</h1>
            <p className="italic text-[15px] mt-4">Corte o intermediário, compre direto ao produtor.</p>
            <p className="text-[15px] mt-4">Faça escolhas conscientes e compre local.</p>
            <div className="flex mt-6 mb-6 justify-center mr-4">
                <Button title="Vamos Continuar" onClick={() => navigate("/register")} type="button" disabled={false} />
            </div>
        </PopupCard>
    
    );
};

export default WelcomeScreen;