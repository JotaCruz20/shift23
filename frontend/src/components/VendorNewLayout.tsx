import React from "react";

//import hook forms
import { useForm } from "react-hook-form";
import Button from "./Button";


const VendorNewLayout = () => {
    const categories = ['Legumes', 'Frutas', 'Ovos'] //TODO: Ir buscar a api
    const unit = ["UN", "KG"]

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div className="flex">
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <p className="mt-6">Adicione uma fotografia do produto</p>
                <input type="file" className="text-sm text-white px-24
                file:mr-5 file:py-2 file:px-6
                file:rounded-full file:border-0
                file:text-sm  file:text-green2
                hover:file:cursor-pointer" {...register("image", { required: true })} />

                <p className="mt-6">Adicione o nome do produto</p>
                <input type="text" placeholder="ex: Banana" className="bg-grey shadow-lg rounded-xl pr-4  px-2 py-2 w-[69%] focus:outline-none cursor-text" {...register("name", { required: true })} />

                <p className="mt-6">Adicione a descrição do produto</p>
                <input type="text" placeholder="ex: Rica em fibras, potássio e vitaminas C e vi..." className="bg-grey  px-2 shadow-lg rounded-xl pr-4 py-2 w-[69%] focus:outline-none cursor-text"  {...register("description", { required: true })} />

                <p className="mt-6">Categoria</p>
                <select className="bg-grey shadow-lg rounded-xl pr-4 py-2 w-[69%]  px-2 focus:outline-none cursor-text" {...register("category", { required: true })}>
                    {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
                </select>

                <p className="mt-6">Preço</p>
                <input type="number" placeholder="ex: 1,19€" className="bg-grey shadow-lg rounded-xl pr-4 px-2 py-2 w-[69%] focus:outline-none cursor-text" {...register("price", { required: true })} />

                <p className="mt-6">Unidade</p>
                <select className="bg-grey shadow-lg rounded-xl pr-4 py-2 w-[69%]  px-2 focus:outline-none cursor-text mb-8 " {...register("unit", { required: true })}>
                    {unit.map((unit, index) => <option key={index} value={unit}>{unit}</option>)}
                </select>

                <div className="mb-6">
                    <Button title="Publicar" onClick={() => (console.log("publicado"))} disabled={false} type="submit"/>
                </div>
            
            </form>

        </div>
    )
}

export default VendorNewLayout