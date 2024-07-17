"use client";

import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import data from "@/app/components/dummyData/FaqData.json";
import AskQuestion from '../components/faq/AskQuestion';

function FAQ() {

	// const [dropDownToggle, setDropDownToggle] = useState(false);
	const [selectedId, setSelectedId] = useState("");
	const [popUpToggle, setPopUpToggle] = useState(false);
	const [sendSuccessToggle, setSendSuccessToogle] = useState(false);
	



	// arrange dummy data to display Q & A 
	const groupedData = data.reduce((acc, item) => {
		if (!acc[item.subject]) {
			acc[item.subject] = [];
		}
		acc[item.subject].push(item);
		return acc;
	}, {});

	// console.log(groupedData, "grouped data");


    return (
        <main className="w-full min-h-screen m-0 p-0 pb-20">

			{/* Navbar  */}
			<div className="w-full h-[88px] m-0 fixed top-0 left-0 right-0 z-20">
				<Navbar />
			</div>


			<div className="w-full h-[160px] m-0 mt-[88px] sm:px-16 bg-[#FFD9A6] flex justify-center items-center relative">
				<p className="text-[#422900] text-xl sm:text-[32px] font-semibold">Frequently Asked Questions</p>
				
				<button
					className='w-[190px] h-[40px] bg-[#422900] rounded-2xl text-base font-medium text-white absolute -bottom-5 right-16 shadow drop-shadow-xl'
					onClick={() => {
						setPopUpToggle(true);
					}}
				>
					Ask Any Questions ?
				</button>
			</div>



			{/* -----------Looping groupedData to display------- */}

			{
				Object.keys(groupedData).map((subject) => (

					<div className='w-full px-4 sm:px-16 pt-10 bg-white' key={subject}>

						<h3 className='text-2xl font-semibold'>{ subject }</h3>

						<div>
							{
								groupedData[subject].map(({ id, question, answer }) => (
            	        			<div key={id}>
										{/* Question */}
										<div className='min-h-12 mt-4 px-3 flex justify-between items-center border-[0.1px]'>
											<p className='text-sm sm:text-xl leading-6 text-[#815600] text-wrap'>{ question }</p>
											<div 
												className='size-8 rounded-full text-[#1C1B1F] bg-[#D9D9D9] flex justify-center items-center'
												onClick={() => {
													if(id === selectedId) {
														setSelectedId("");
													} else {
														setSelectedId(id);
													}
													
												}}
											>
												{ (id === selectedId) ? <IoIosArrowUp/> : <IoIosArrowDown />}
											</div>
										</div>
											
										{/* Answer */}
										{
											(id === selectedId) && 
											<div className='m-0 min-h-20 px-16 py-2 bg-white border-[0.1px] shadow drop-shadow-sm'>
												<p className='text-sm leading-6 text-[#514534]'>
													{ answer }
												</p>
											</div>
										}
									</div>
            	    			))
							}
						</div>
            	    	
            		</div>
        		))
			}


			

			{
				popUpToggle && <AskQuestion setPopUpToggle={ setPopUpToggle } />
			}


      	</main>
    )
}

export default FAQ