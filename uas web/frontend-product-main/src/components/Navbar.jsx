import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <navbar className="bg-[#1167b1] text-[#e4f4fd] flex justify-between h-[50px] items-center fixed w-full z-10">
                <h1 className="cursor-pointer hover:text-[#3134d9] pl-14 text-xl font-bold"><Link to={`/`}>CALMA</Link></h1>
                <ul className="flex space-x-14 mx-10 font-semibold ">
                    <li className="cursor-pointer hover:text-[#3134d9]"><Link to={`/`}>Home</Link></li>
                    <li className="cursor-pointer hover:text-[#3134d9]"><Link to={`/recomendation`}>Recomendation</Link></li>
                    <li className="cursor-pointer hover:text-[#3134d9]"><Link to={`/popular`}>Popular</Link></li>
                    <li className="cursor-pointer hover:text-[#3134d9]"><Link to={`/new`}>New</Link></li>
                </ul>
        </navbar>
    )
}

export default Navbar;