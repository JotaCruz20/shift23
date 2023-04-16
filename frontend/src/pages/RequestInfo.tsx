import React, { useEffect } from "react";
import BackButton from "../components/BackButton";

import First from "../assets/images/first.png"
import Second from "../assets/images/second.png"
import Third from "../assets/images/third.png"
import Fourth from "../assets/images/fourth.png"
import Map from "../assets/images/map.png"
import Call from "../assets/images/call.png"
import NoCall from "../assets/images/no_call.png"
import Done from "../assets/images/done.png"
import UnDone from "../assets/images/undone.png"

import { useNavigate } from "react-router";

const RequestInfo = () => {

    const navigator = useNavigate()

    const dotted = ["h-[5px] w-[3px] ml-[65px] bg-orange", "h-[5px] w-[3px] ml-[65px] bg-white"]

    const [isSecondDone, setIsSecondDone] = React.useState(false)
    const [isThirdDone, setIsThirdDone] = React.useState(false)

    useEffect(() => {
        const secondTimeout = setTimeout(() => {
          setIsSecondDone(true);
        }, 3000);
      
        const thirdTimeout = setTimeout(() => {
          setIsThirdDone(true);
        }, 6000);

        setTimeout(() => {
            navigator("/home")
        }, 9000)
      
        return () => {
          clearTimeout(secondTimeout);
          clearTimeout(thirdTimeout);
        };
      }, []);

    return (
        <div>
            <div className="flex flex-row mt-20 ml-4 items-center">            
                <BackButton/>
                <h1 className="ml-[75px] text-white text-[30px]">Recolha</h1>
            </div>
            <div className="absolute h-full w-full mt-10  bg-white">
                <div className="flex flex-row items-center mt-10">
                    <img className="h-[70px] w-[70px] ml-8" src={First} alt="first" />
                    <h1 className="w-[230px] ml-6">O produtor recebeu o seu pedido!</h1>
                    <img className="mr-4 h-[20px] w-[20px]" src={Done} alt="first" />
                </div>

                {Array.from({ length: 10 }, (_, i) => (
                    <div className={dotted[i % 2]} key={i} />
                ))}
                

                <div className="flex flex-row items-center">
                    <img className="h-[70px] w-[70px] ml-8" src={Second} alt="first" />
                    <h1 className="w-[300px] ml-6">O seu pedido está a ser  processado...</h1>
                    {isSecondDone ?
                        <img className="mr-7 h-[20px] w-[20px]" src={Done} alt="first" />
                        :
                        <img className="mr-4 h-[20px] w-[20px]" src={UnDone} alt="first" />
                    }
                </div>

                {Array.from({ length: 10 }, (_, i) => (
                        <div className={dotted[i % 2]} key={i} />
                ))}

                {isSecondDone &&
                    <div>
                        <div className="flex flex-row items-center">
                            <img className="h-[70px] w-[70px] ml-8" src={Third} alt="first" />
                            <h1 className="w-[300px] ml-6">Recolha o seu pedido</h1>
                            {isThirdDone ?
                                <img className="mr-4 h-[50px] w-[50px]" src={Call} alt="first" />
                                :
                                <img className="mr-4 h-[50px] w-[50px]" src={NoCall} alt="first" />
                            }
                            
                        </div>
                        {Array.from({ length: 5 }, (_, i) => (
                            <div className={dotted[i % 2]} key={i} />
                        ))}
                       <img className="ml-10 w-[100%px]" src={Map} alt="first" />
                       {Array.from({ length: 5 }, (_, i) => (
                            <div className={dotted[i % 2]} key={i} />
                        ))}
                    </div>
                }
                {isThirdDone &&
                    <div className="flex flex-row items-center">
                        <img className="h-[70px] w-[70px] ml-8" src={Fourth} alt="first" />
                        <h1 className="w-[300px] ml-6">Pedido Concluído</h1>
                        
                    </div>
                }
                
            </div>

        </div>
    );
};

export default RequestInfo;