"use client";

import React from 'react'
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { IoMdMenu } from "react-icons/io";


function Navbar() {

    const pathName = usePathname();
    
    return (
        <>
            <nav className="w-full h-full m-0 px-4 sm:px-8 lg:px-16 bg-white flex justify-between items-center">
        
                <div className="md:w-[50%] flex items-center">
                    <Link href="/" className='w-14 h-14 md:w-[10%] md:h-auto m-0'>
                        <img className="w-full" src="/thasmai-logo.png" alt="thasmai-logo" />
                    </Link>
                    <h1 className="ms-2 text-[25px] md:text-5xl font-semibold">Thasmai</h1>
                </div>
        
                <div className="hidden lg:inline-block">
                    <ul className="m-0 flex justify-between text-xl text-[#211B12] font-semibold">
                        <Link href="/">
                            <li className={`${pathName === "/" ? "text-[#847562]" : ""}`}>Home</li>
                        </Link>
                        <Link href="/faq">
                            <li className={`${pathName.startsWith("/faq") ? "ms-20 text-[#847562]" : "ms-20"}`}>FAQ</li>
                        </Link>
                        <Link href="/aboutUs">
                            <li className={`${pathName.startsWith("/aboutUs") ? "ms-20 text-[#847562]" : "ms-20"}`}>About us</li>
                        </Link>
                    </ul>
                </div>

                {/* daisyUI drawer component */}
                <div className='w-[10%] lg:hidden h-full flex justify-center items-center'>
                    <div class="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                        <div class="drawer-content">
                           {/* Page content here  */}
                            <label for="my-drawer-4" class="drawer-button bg-white ">
                                <IoMdMenu className='text-4xl '/>
                            </label>
                        </div>
                        <div class="drawer-side">
                            <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
                            <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-24 gap-y-4">
                                 {/* Sidebar content here  */}
                                {/* <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li> */}
                                <Link href="/">
                                    <li className={`${pathName === "/" ? "ms-10 text-2xl text-[#847562]" : "ms-10 text-2xl"}`}>Home</li>
                                </Link>
                                <Link href="/faq">
                                    <li className={`${pathName.startsWith("/faq") ? "ms-10 text-2xl text-[#847562]" : "ms-10 text-2xl"}`}>FAQ</li>
                                </Link>
                                <Link href="/aboutUs">
                                    <li className={`${pathName.startsWith("/aboutUs") ? "ms-10 text-2xl text-[#847562]" : "ms-10 text-2xl"}`}>About us</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                
        
            </nav>
			<hr className="m-0 border-b-[0.01px] border-t-0 border-gray-300"/>

        </>
    )
}

export default Navbar