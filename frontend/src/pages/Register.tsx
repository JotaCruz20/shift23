import React from "react";
import PopupCard from "../components/PopupCard";
import Button from "../components/Button";

import { IRegister } from "../interfaces/IForms";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'

import Switch from "react-switch";

const Register = () => {
    const navigate = useNavigate();

    const[checked, setChecked] = React.useState(false);

    const { register, handleSubmit, formState: { errors }, reset  } = useForm<IRegister>()

    const onSubmitNew = (data: IRegister) => {
        console.log(data)
        //TODO: FAZER POST PARA A API
        if(!checked){
            navigate("/home-seller")
        }else{
            navigate("/home")
        }
    }

    const handleChange = (checked: boolean) => {
        setChecked(checked)
    }

    return (
        <PopupCard>
            <h1 className="text-center font-bold text-[20px] mb-2">REGISTO</h1>
            <form className="flex flex-col space-y-4 items-center mb-4" onSubmit={handleSubmit(onSubmitNew )}>
                    <input
                        className={`w-[80%] h-[50px] shadow-lg rounded-lg bg-grey outline-none  pl-2 ${errors.name ? 'border-error' : 'border-background'}`}
                        type="text"
                        id="name"
                        placeholder={"Nome"}
                        maxLength={50}
                        {...register('name', { required: true, minLength: 1, maxLength: 50 })}
                        name="name"
                    />
                    {errors.name?.type === 'required' && <span className="text-error">Required Filed</span>}

                    <input
                        className={`w-[80%] h-[50px] shadow-lg rounded-lg bg-grey outline-none  pl-2 ${errors.telephone ? 'border-error' : 'border-background'}`}
                        type="text"
                        id="telephone"
                        placeholder={"Telemovel"}
                        maxLength={9}
                        {...register('telephone', { required: true, minLength: 1, maxLength: 9 })}
                        name="telephone"
                    />
                    {errors.telephone?.type === 'required' && <span className="text-error">Required Filed</span>}

                    <input
                        className={`w-[80%] h-[50px] shadow-lg rounded-lg bg-grey outline-none  pl-2 ${errors.email ? 'border-error' : 'border-background'}`}
                        type="text"
                        id="email"
                        placeholder={"Email"}
                        maxLength={50}
                        {...register('email', { required: true, minLength: 1, maxLength: 50 })}
                        name="email"
                    />
                    {errors.email?.type === 'required' && <span className="text-error">Required Filed</span>}

                    <input
                        className={`w-[80%] h-[50px] shadow-lg rounded-lg bg-grey outline-none  pl-2 ${errors.password ? 'border-error' : 'border-background'}`}
                        type="password"
                        id="password"
                        placeholder={"Password"}
                        maxLength={50}
                        {...register('password', { required: true, minLength: 1, maxLength: 50 })}
                        name="password"
                    />
                    {errors.password?.type === 'required' && <span className="text-error">Required Filed</span>}

                    <input
                        className={`w-[80%] h-[50px] shadow-lg rounded-lg bg-grey outline-none pl-2 ${errors.city ? 'border-error' : 'border-background'}`}
                        type="text"
                        id="city"
                        placeholder={"Cidade"}
                        maxLength={50}
                        {...register('city', { required: true, minLength: 1, maxLength: 50 })}
                        name="city"
                    />
                    {errors.city?.type === 'required' && <span className="text-error">Required Filed</span>}
                    <div className="flex flex-row space-x-1 mr-[5%]">
                        <p className="w-[40%]">Vendedor</p>
                        <Switch onChange={(event) => handleChange(event)} checked={checked} checkedIcon={false} uncheckedIcon={false} onColor="#A8CF54" offColor="#A8CF54"/>
                        <p className="w-[40%]">Cliente</p>
                    </div>
                    
                    <Button title="Register" onClick={() => console.log("clicked")} type="submit" disabled={false} />
            </form>
        </PopupCard>
    )
}

export default Register