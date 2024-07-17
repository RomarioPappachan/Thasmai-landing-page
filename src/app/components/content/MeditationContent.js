"use client";

import React from 'react'

function MeditationContent() {
    return (
        <div className="w-full h-full bg-[#211B12] opacity-100 animate-fade-in-glow">
            <div className="w-full md:w-[80%] h-screen px-4 md:px-0 md:ps-16 py-10 md:pt-20">

                {/* For media breakpoint less than 768px */}
                <h1 className='w-full md:hidden font-bold text-[30px] bg-gradient-to-r from-[#FCEFE0] to-[#F8AD2B] bg-clip-text text-transparent inline-block'>
                    Embrace Your <br />Spiritual Journey <br />With Us
                </h1>
                <span className='text-[30px] md:hidden'>🌿</span>


                {/* For media breakpoint greater than 768px */}
                <p className='leading-7 md:leading-tight font-bold text-[30px] md:text-[64px] bg-gradient-to-r from-[#FCEFE0] to-[#F8AD2B] bg-clip-text text-transparent md:inline-block hidden'>
                    Embrace Your Spiritual
                </p><br />
                <p className='leading-7 md:leading-tight font-bold text-[30px] md:text-[64px] bg-gradient-to-r from-[#FCEFE0] to-[#F8AD2B] bg-clip-text text-transparent md:inline-block hidden'>
                    Journey With Us 
                </p>
                <span className='text-[30px] md:text-[64px] hidden md:inline'>🌿</span>

                <p className="w-[75%] md:w-full mt-14 text-xs md:text-xl text-white font-normal leading-5 md:leading-8 tracking-wider">
                    SMS Meditation Registration and entry to E commerce trading. Join us to cultivate inner peace, clarity, and a deeper connection with your true self. 
                    Our guided sessions are designed to support your spiritual journey and enhance your well-being. Embrace tranquility and spiritual growth with us.
                </p>

                <div className='w-full mt-14 flex flex-wrap gap-x-2 md:gap-x-28 gap-y-12'>

                    <div className='h-8 md:h-[56px] px-6 md:px-10 bg-[#F8AD2B] rounded-2xl flex justify-center items-center'>
                        <img className="size-5 md:size-[48px]" src="/australian-flag.png" alt="Australian-flag" />
                        <p className='ms-2 text-sm md:text-2xl text-white'>Australia</p>
                    </div>

                    <div className='h-8 md:h-[56px] px-6 md:px-10 bg-[#F8AD2B] rounded-2xl flex justify-center items-center'>
                        <img className="size-5 md:size-[48px]" src="/canadian-flag.png" alt="Australian-flag" />
                        <p className='ms-2 text-sm md:text-2xl text-white'>Canada</p>
                    </div>

                    <div className='h-8 md:h-[56px] px-6 md:px-10 bg-[#F8AD2B] rounded-2xl flex justify-center items-center'>
                        <img className="size-5 md:size-[48px]" src="/middle-eastern-flags.png" alt="Australian-flag" />
                        <p className='ms-2 text-sm md:text-2xl text-white'>Middle East</p>
                    </div>

                    <div className='h-8 md:h-[56px] px-6 md:px-10 bg-[#F8AD2B] rounded-2xl flex justify-center items-center'>
                        <img className="size-5 md:size-[48px]" src="/european-union-flag.png" alt="Australian-flag" />
                        <p className='ms-2 text-sm md:text-2xl text-white'>Europe</p>
                    </div>

                    <div className='h-8 md:h-[56px] px-6 md:px-10 bg-[#F8AD2B] rounded-2xl flex justify-center items-center'>
                        <img className="size-5 md:size-[48px]" src="/african-union-flag.png" alt="Australian-flag" />
                        <p className='ms-2 text-sm md:text-2xl text-white'>Africa</p>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default MeditationContent