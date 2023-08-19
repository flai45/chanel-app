import Image from "next/image"
import React from 'react'
import { BiLike } from 'react-icons/bi'
export default function Post({src, text}:{src:string, text:string}) {
    
    return (
       
        <div className="grid grid-cols-5 grid-rows-6 gap-2  bg-gray-100 rounded mb-5 p-5 border border-gray-200 hover:shadow-md hover:bg-white transition-all duration-500 shadow-sm group">
            <div className="col-span-3 row-span-5 rounded overflow-hidden">
                <Image alt="post image" src={src} width='500' height='500' className="rounded transition-all duration-500 hover:scale-110"/>
            </div>
            <p className="col-span-2 row-span-5 col-start-4 rounded group-hover:bg-gray-200 transition-all duration-500">{text}</p>
            <button className="col-span-5 row-start-6 rounded hover:bg-black border-black border-2 hover:text-white transition-all duration-500 h-10 flex items-center justify-center">
            <BiLike/> Like
            </button>
        </div>
    
    )
}