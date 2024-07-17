"use client";

import React from 'react'

function DigitalLibrary() {
    return (
        <div className="w-full h-full bg-gradient-to-b from-[#E5D8CC] to-[#7F7871] opacity-100 animate-fade-in-glow">
            <div className="w-full md:w-[80%] h-screen px-4 md:px-0 md:ps-16 py-10 md:pt-20">

                <p className='md:leading-[72px] font-bold text-[30px] md:text-[64px] text-[#211B12] inline-block'>
                    "Explore Knowledge: Your Digital
                </p>
                <p className='md:leading-[72px] font-bold text-[30px] md:text-[64px] text-[#211B12] inline-block'>
                    Library Awaits 📚"
                </p>

                <p className="w-[75%] md:w-[53%] mt-14 text-left text-sm md:text-xl text-[#514534] font-normal leading-5 md:leading-8 tracking-wider">
                    SreeNarayanaGuru Digital Library containing all the direct manuscripts of Sree Narayana Guru. 
                    Explore a vast collection of e-books, audiobooks, articles, and sacred texts. 
                    Accessible anytime, anywhere, our library is designed to support your spiritual growth and learning. 
                    Dive into a world of knowledge and enlightenment with us. 
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

export default DigitalLibrary