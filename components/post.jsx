import Image from "next/image";
import React from 'react'
export default function Post({src, text}) {
    
    return (
        <div className="w-[100%] bg-white rounded mb-5 p-5 flex flex-col gap-3 justify-center items-center">
            <Image alt="post image" src={src} width='500' height='500' className=" rounded focus:scale-110 transition-all duration-500"/>
            <p className='max-w-[100%] rounded'>{text}</p>
        </div>

    )
}