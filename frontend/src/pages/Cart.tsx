import React from "react";
import PopupCard from "../components/PopupCard";
import BackButton from "../components/BackButton";

import { useNavigate } from "react-router";

import { useCart } from "../context/CartContext";
import Slider from "../components/Slider";
import SliderCart from "../components/SliderCart";

import { IoMdTrash } from "react-icons/io";
import Button from "../components/Button";

const Cart = () => {
    const { removeItem } = useCart();
    const navigator = useNavigate();

    let itemsString = localStorage.getItem('cart')
    let itemsArray = JSON.parse(itemsString!)

    console.log(itemsArray)

    // group items by producer name and inside of each producer group, group by id
    const groupedItems = itemsArray.reduce((acc: any, item: any) => {
        const producer = acc.find((i: any) => i[0].producer === item.producer);
        if (producer) {
            producer.push(item);
        } else {
            acc.push([item]);
        }
        return acc;
    }, []);

    function calculateTotal(item:any[]) {
        let total = 0
        item.forEach((item) => {
            total += item.quantity * item.price 
        })
        return total
    }

    function makeOrder(item:any[]) {
        for(let i = 0; i < item.length; i++) {
            removeItem(item[i].id)
        }
        //TODO: send order to backend
        navigator('/after-request')
    }


    return (
        <div>
            <div className="fixed top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center">
                <h1 className="text-[20px] text-white">O MEU CESTO</h1>
            </div>
            <div className="fixed top-8 left-16 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center">
                <BackButton />
            </div>
            
            <PopupCard>
                    {groupedItems.map((item: any, index:number) => (
                        <div key={index} className="bg-white rounded-lg border-white shadow-md w-[95%] mb-2">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <h1 className="ml-2 text-[20px] font-bold">{item[0].producerName}</h1>
                                </div>
                                <div>
                                    <IoMdTrash className="w-6 h-6 mr-2"/>
                                </div>
                            </div>
                            
                            <SliderCart key={index} items={item}/>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                <h1 className="ml-2 font-bold">Total: {calculateTotal(item)}€</h1>
                                </div>
                                <div className="w-[100px]">
                                    <Button title="Pedido" onClick={() => makeOrder(item)} type="button" disabled={false}/>
                                </div>
                            </div>
                            
                        </div>
                        
                    ))}
                
            </PopupCard>
        </div>
    );
};

export default Cart;