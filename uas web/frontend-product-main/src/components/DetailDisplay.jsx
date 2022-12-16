import React from "react";
import { Link } from "react-router-dom";

const DetailDisplay = ({ img, OpenClose, name, price, text_desc, daerah }) => {
    return(
        <div className="w-max pt-[70px] mx-auto">
            <div className="rounded-2xl border border-gray-300 w-[1200px] bg-[#f5f7f9]">
                <div className="flex space-x-20 px-10 py-10">
                    <img src={img} alt="" className="w-[400px] h-[220px] rounded-lg"/>
                    <div className="space-y-3 h-max my-auto">
                        <h1 className="text-5xl font-semibold">{name}</h1>
                        <h4 className="text-3xl font-medium">{daerah}</h4>
                        <h2 className="text-[#6e6e6f]">Rp. {price}</h2>
                        <h3 className="text-[#6e6e6f]">{OpenClose}</h3>
                    </div>
                </div>
                <div className="px-10">
                    <p>{text_desc}</p>
                </div>
                <div className="ml-10 rounded-lg w-max px-4 py-[6px] bg-[#1f4066] my-5">
                    <Link to={`/`} className="text-white">
                        Back to menu
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DetailDisplay;
