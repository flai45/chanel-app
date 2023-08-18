import Image from "next/image"
import React from 'react'

export default function Post({src, text}:{src:string, text:string}) {
    
    return (
        <div className="w-[100%] bg-white rounded mb-5 p-5 flex flex-col gap-3 justify-center items-center hover:shadow-md transition-all duration-500 shadow-sm group">
            <div className=" overflow-hidden"><Image alt="post image" src={src} width='500' height='500' className="rounded transition-all duration-500 hover:scale-110"/></div>
            <p className='max-w-[100%] rounded group-hover:bg-gray-200 transition-all duration-500'>{text}</p>
        </div>

    )
}