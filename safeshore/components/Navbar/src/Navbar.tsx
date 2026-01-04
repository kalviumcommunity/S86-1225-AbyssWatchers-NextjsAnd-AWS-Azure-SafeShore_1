import Image from "next/image";
import Link from "next/link";
import MenuCard from "./menucard";


export default function Navbar(){
    return(
        <>
            <div className="bg-white/2 p-6 sm:p-4 shadow-md select-none">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.svg"
                            alt="SafeShore Logo"
                            width={40}
                            height={40}
                            className="mr-2"
                        />
                        <span className="font-bold text-xl text-gray-800">SafeShore</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/about" className="text-gray-600 hover:text-gray-800 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-300">
                            About
                        </Link>

                        <Link href="/contact" className="text-gray-600 hover:text-gray-800 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-300">
                            Contact
                        </Link>
                        <MenuCard email="santhipandiyan03@gmail.com" />
                    </div>
                </div>
            </div>
        </>
    );
}