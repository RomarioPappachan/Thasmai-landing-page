"use client";

import React from 'react'

function Thasmai() {
    return (
        <div className='w-full h-full bg-white opacity-100 animate-fade-in-glow'>
            <div className='w-full md:w-[80%] h-screen px-4 md:px-0 md:ps-16 flex flex-col md:flex-row'>
                <div className='w-full md:w-[45%] pt-10 md:pt-20'>
                    {/* <h1 className='font-bold text-[64px] bg-gradient-to-r from-[#201B13] to-[#F8AD2B] bg-clip-text text-transparent'>
                        Embrace Your Spiritual Journey With Us 🌿
                    </h1> */}
                    <p className='leading-tight font-bold text-[31px] md:text-[64px] bg-gradient-to-r from-[#201B13] to-[#F8AD2B] bg-clip-text text-transparent inline-block'>
                        1. Embrace Your
                    </p><br />
                    <p className='leading-tight font-bold text-[31px] md:text-[64px] bg-gradient-to-r from-[#201B13] to-[#F8AD2B] bg-clip-text text-transparent inline-block'>
                        Spiritual Journey
                    </p><br />
                    <p className='leading-tight font-bold text-[31px] md:text-[64px] bg-gradient-to-r from-[#201B13] to-[#F8AD2B] bg-clip-text text-transparent inline-block'>
                        With Us
                    </p>
                    <span className='text-[31px] md:text-[64px]'>🌿</span>

                    <p className='w-[75%] md:w-full mt-5 text-black text-xs md:text-xl font-normal leading-5 md:leading-8'>
                        Welcome to our spiritual sanctuary, offering services to nurture your soul and enhance your journey. <br />
                        Enjoy personalized guidance, meditation, prayer, healing programs, yoga, retreats, and study groups. <br />
                        Find peace, clarity, and connection with us.
                    </p>

                </div>

                <div className='w-full md:w-[55%]'>
                    <img className="w-[267px] h-[264px] md:w-[95%] md:h-auto" src="/meditation-tree.png" alt="" />
                </div>
            </div>

            
        </div>
    )
}

export default Thasmai