"use client";
import React from 'react'

function FilmsAndDocumentaries() {
    return (
        <div className="w-full h-full bg-gradient-to-b from-[#464C26] to-[#A4B259] opacity-100 animate-fade-in-glow">
            <div className="w-full md:w-[80%] h-screen px-4 md:px-0 md:ps-16 py-10 md:pt-14">

                <p className='md:leading-[72px] font-bold text-[30px] md:text-[64px] bg-gradient-to-r from-[#777867] to-[#FFFFFF] bg-clip-text text-transparent inline-block'>
                    "Stories Unveiled: Our Films and
                </p>
                <p className='md:leading-[72px] font-bold text-[30px] md:text-[64px] bg-gradient-to-r from-[#777867] to-[#FFFFFF] bg-clip-text text-transparent inline-block'>
                    Documentaries
                </p>
                <span className='text-[30px] md:text-[64px]'>🎬✨"</span>

                <p className="w-[75%] md:w-[53%] mt-20 text-left text-sm md:text-xl text-[#FBFAED] font-normal leading-5 md:leading-8 tracking-wider">
                    Film and Documentaries produced by Thasmai. Each production is crafted to inspire, educate, and elevate your spiritual journey. 
                    Explore profound stories, teachings, and experiences that illuminate the path to inner peace and understanding. 
                    Join us in experiencing the transformative power of spiritual cinema. 
                </p>

                <button
                    className='w-[160px] h-10 md:w-[362px] md:h-[56px] mt-14 bg-[#F8AD2B] rounded-xl md:rounded-2xl text-white text-lg md:text-2xl md:leading-[48px] hover:bg-[#e4a73e]'
                >
                    visit our site
                </button>

            </div>
        </div>
    )
}

export default FilmsAndDocumentaries