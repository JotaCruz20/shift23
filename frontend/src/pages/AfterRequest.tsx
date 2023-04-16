import React from 'react';

import { useNavigate } from 'react-router';

import Complete from '../assets/images/Complete.png';
import Button from '../components/Button';
import { IAfterRequestProps } from '../interfaces/IProps';

const AfterRequest = ({id}: IAfterRequestProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src={Complete} alt="Logo" />
            <h1 className='text-3xl font-bold my-4'>Parabéns!</h1>
            <p className='text-lg text-center mb-4'>O seu pedido foi registrado e está em processamento.</p>
            <Button title="Ver Pedido" onClick={() => {}} type='button' disabled={false}/>
            <Button title="Continuar a Comprar" onClick={() => {navigate('/home')}} type='button' disabled={false} white={true}/>
        </div>
    );
};

export default AfterRequest;