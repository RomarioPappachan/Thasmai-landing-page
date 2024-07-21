"use client";

import React from 'react'
import Navbar from '../components/navbar/Navbar';
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiMapPinAreaFill } from "react-icons/pi";

function AboutUs() {
    return (
        <main className="w-full min-h-screen m-0 p-0">

			{/* Navbar  */}
			<div className="w-full h-[88px] m-0 fixed top-0 left-0 right-0 z-20">
				<Navbar />
			</div>

			<div className='w-full min-h-screen lg:h-screen pt-[132px] pb-11 px-4 sm:px-12  lg:px-16 bg-[#372F26] flex flex-col lg:flex-row justify-center'>

				<div className='w-full lg:w-[60%] h-full lg:pe-10 flex flex-col gap-4 justify-between'>
					{/* ------About Us------- */}
					<div className='w-full lg:h-[264px] ps-8 lg:pe-24 py-8 bg-[#211B12] text-white'>
						<h3 className='font-philosopher text-2xl leading-8 text-white'>About us</h3>
						<p className='mt-2 text-sm leading-6'>
							Thasmai is a world revolutionary project, to rehabilitate the world as a single
							entity as envisioned by the creator.
						</p>

						<h3 className='mt-8 font-philosopher text-2xl leading-8 text-white'>Follow us</h3>
						<div className='mt-2 text-white flex gap-4'>
							<RiFacebookCircleFill className='text-5xl hover:scale-105' />
							<RiInstagramFill className='text-5xl hover:scale-105' />
						</div>
					</div>

					{/* ---------Contact us-------- */}
					<div className='w-full lg:h-[264px] px-8 py-8 bg-[#211B12]'>
						<h3 className='font-philosopher text-2xl leading-8 text-white'>Contact us</h3>

						<div className='flex flex-col sm:flex-row mt-5'>
							<div className='w-full sm:w-1/2'>
								<p className='text-sm leading-6 text-white flex'>
									<PiMapPinAreaFill className='text-xl text-[#F8AD2B] me-2' />
									Thasmai Meditation Center. <br />
									13-Ganga Eswar, Behind Deathacalon,<br />
									Near new Banglore Public School,<br />
									Chikkajaala Bengaluru, KARNATAKA,<br />
									Bangalore, India, Karnataka. <br />
								</p>
							</div>
							<div className='w-full sm:w-1/2 mt-4 sm:mt-0'>
								<p className='text-sm leading-6 text-white flex items-center'>
									<IoMdMail className='text-xl text-[#F8AD2B] me-2'/>
									info@Thasmai.Org.In
								</p>
								<p className='mt-4 text-sm leading-6 text-white flex items-center'>
									<BiSolidPhoneCall className='text-xl text-[#F8AD2B] me-2' />
									+91 89283 50018
								</p>
								<p className='text-sm leading-6 text-white ps-7'>+91 88920 55550</p>
							</div>
						</div>
					</div>
				</div>

				<div className='w-full lg:w-[40%] mt-5 lg:mt-0 flex flex-col justify-between'>
					<h3 className='my-3 lg:m-0 font-philosopher text-2xl leading-8 text-white'>Map Location</h3>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.9313769950436!2d77.63235208915935!3d13.166726720595731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1f0db3fbdb4d%3A0x4f7385b726593895!2sThasmai%20retreat!5e0!3m2!1sen!2sin!4v1721018232582!5m2!1sen!2sin" 
						className='w-full h-[400px] md:h-[500px] border-none'
						allowFullScreen="" 
						loading="lazy" 
						referrerPolicy="no-referrer-when-downgrade">
					</iframe>
				</div>
			</div>
      	</main>
    )
}

export default AboutUs