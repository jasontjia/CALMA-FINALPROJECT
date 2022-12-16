import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, daerah, name, price, text_desc, id }) => {
    return(
        <div className='lg:w-[280px] sm:w-[225px] w-[200px] lg:h-[425px] h-[405px] rounded-xl border-b border-l border-r border-r-gray-400 border-l-gray-200 border-b-gray-400'>
            <div className='relative h-[180px] w-full'>
                <img src={img} alt='' className='z-0 h-full w-screen rounded-t-xl'/>
                <div className='absolute bottom-0 left-0 px-8 py-1 bg-[#1f4066] bg-opacity-80 rounded-tr-2xl'>
                    <h2 className='text-[white]'>{daerah}</h2>
                </div>
            </div>
            <div className='pt-3 px-4 space-y-2'>
                <h1 className='font-bold lg:text-2xl text-xl'>{name}</h1>
                <p className='text-[#8a8a8a] font-medium text-xs'>Rp. {price}</p>
                <p className='font-medium lg:text-sm text-xs text-justify'>{text_desc}</p>
                <div className="rounded-lg w-max px-4 py-[4px] bg-[#1f4066]">
                    <Link to={`/menu/${id}`} className="text-white">
                        Detail
                    </Link>
                </div>
            </div>
      </div>
    )
}

export default Card;
