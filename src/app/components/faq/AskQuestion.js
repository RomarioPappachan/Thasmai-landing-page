"use client";

import React from 'react'

function AskQuestion(props) {
    return (
        <div className='z-30 m-0 px-2 md:p-0 w-screen min-h-screen bg-[rgba(0,0,0,0.74)] backdrop-blur-sm flex justify-center items-center fixed top-0 left-0'>
            {/* Close button */}
            <button 
                className='size-10 text-5xl text-white bg-[rgba(0,0,0,0.42)] rounded-full flex justify-center items-center rotate-45 absolute top-5 right-5 md:top-10 md:right-10 cursor-pointer'
                onClick={() => {
                    props.setPopUpToggle(false);
                }}
            >+</button>


            <div className='sm:w-[720px] sm:h-[544px] px-4 py-12 sm:p-[72px] bg-[#FFF8F4] rounded-[32px]'>

                <p className='mb-6 text-base font-normal text-black'>
                    Please send us any queries you may have about any of our products or websites so we can assist you as much as possible. 
                    Your provided email will receive a replay from us.
                </p>

                <input 
                    type="email" 
                    placeholder='Email'
                    className="w-full h-10 px-4 mb-4 rounded-lg bg-white text-[#514534] border-2 border-[#847562] outline-none placeholder:text-[#847562]"
                />  
                <input 
                    type="text" 
                    placeholder='Subject'
                    className="w-full h-10 px-4 mb-4 rounded-lg bg-white text-[#514534] border-2 border-[#847562] outline-none placeholder:text-[#847562]"
                />
                <textarea 
                    className='w-full h-[120px] p-4 mb-6 rounded-lg bg-white text-[#514534] border-2 border-[#847562] outline-none placeholder:text-[#847562]'
                    placeholder='Enter your question'
                ></textarea>

                <button
                    className='w-full sm:w-72 h-12 bg-[#422900] text-white rounded-2xl'
                >
                    Send
                </button>

            </div> 

        </div>
    )
}

export default AskQuestion