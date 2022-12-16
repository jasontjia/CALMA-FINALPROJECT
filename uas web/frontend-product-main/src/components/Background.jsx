import React from "react";
import Manado from '../assets/Manado.webp';

const Background = () => {
    return(
        <div className="w-[1000px] h-auto mx-auto relative z-0 pt-[70px]">
            <div className="">
                <img src={Manado} alt="" className="rounded-xl" />
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-1">
                    <h1 className="text-4xl font-bold">WELCOME, READY TO START <br></br> THE JOURNEY WITH YOU</h1>
                    <h2 className='py-4 text-4xl font-bold'>READY TO TRAVEL</h2>
                </div>
            </div>
        </div>
    )
}

export default Background;