import Link from "next/link"
import Image from "next/image"
import { AiOutlineUser } from 'react-icons/ai';
export default function Header() {
    return (
        <nav className="h-10 my-5 flex justify-between items-center">
            <Link href='/'>
                <Image alt="logo" src='/logo.svg' height='40' width='40' className="transition-all duration-500 hover:scale-105"/>
            </Link>
            <Link href='/profile'>
                <div className="flex justify-center items-center text-2xl">
                    <AiOutlineUser width='50' height='50' className="w-8 h-8 rounded-full border-2 transition-all duration-500 hover:scale-105 border-gray-600 text-gray-600 hover:border-black hover:text-black"/>
                    
                </div>
            </Link>
        </nav>
    )
}