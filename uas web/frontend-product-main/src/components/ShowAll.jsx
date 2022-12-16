import React from "react";
import { Link } from "react-router-dom";

const DetailDisplay = ({ img, OpenClose, name, price, text_desc, id }) => {
    return(
        <div className="w-max mx-auto my-10">
            <div className="rounded-2xl border border-gray-300 w-[1200px] bg-[#f5f7f9]">
                <div className="flex space-x-20 px-10 py-10">
                    <img src={img} alt="" className="w-[400px] h-[220px] rounded-lg my-auto"/>
                    <div className="space-y-3 h-max my-auto w-[400px]">
                        <h1 className="text-5xl font-semibold">{name}</h1>
                        <h2>Rp. {price}</h2>
                        <h3>{OpenClose}</h3>
                        <p>{text_desc}</p>
                        <div className="rounded-lg w-max px-4 py-[6px] bg-[#1f4066] my-5">
                            <Link to={`/menu/${id}`} className="text-white">
                                Detail
                            </Link>
                </div>
                    </div>
                </div>
                <div className="px-10">
                    
                </div>
                
            </div>
        </div>
    )
}

export default DetailDisplay;
