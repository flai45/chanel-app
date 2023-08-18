import Image from "next/image"
import React from 'react'
import { BiLike } from 'react-icons/bi'
export default function Post({src, text}:{src:string, text:string}) {
    
    return (
        <div className="bg-gray-100 rounded mb-5 p-5 flex flex-сol gap-3 border border-gray-200 justify-between items-center hover:shadow-md hover:bg-white transition-all duration-500 shadow-sm group">
            <div className=" overflow-hidden">
                <Image alt="post image" src={src} width='500' height='500' className="rounded transition-all duration-500 hover:scale-110"/>
            </div>
            {/* <div className="relative top-0 right-0 left-0 bottom-0"> */}
            <div className="flex flex-col justify-between w-[50%]">
                <p className='rounded group-hover:bg-gray-200 transition-all duration-500 self-start'>{text}</p>
                <div className="flex">
                    <button className="flex rounded hover:bg-red-600 border-red-600 border-2 hover:text-white transition-all duration-500 self-start w-[100%] h-6 p-1 items-center justify-center">
                       <BiLike/> 
                       Like
                    </button>
                </div>
            </div>
            {/* </div> */}
        </div>

    )
}