"use client";
import React from 'react'

function Sidebar(props) {
    return (
        <div className='w-full py-4 flex flex-col items-end gap-[14px]'>

            {/* component divs */}
            <div 
                id='section1'
                className={
                    props.section === "section1" ? 
                        'width-transition h-16 md:h-[88px] px-2 bg-[#F8AD2B] rounded-l-full flex items-center'
                        :
                        'w-[76px] h-16 md:w-[241px] md:h-[88px] px-2 bg-[#F8AD2B] rounded-l-full flex items-center'
                }
                onClick={() => {
                    props.setSection("section1");
                }}
            >
                <div className='w-[56px] h-[56px] md:w-[72px] md:h-[72px]'>
                    <img className="w-full rounded-full" src="meditation-tree.png" alt="" />
                </div>
                <div className='hidden md:block h-full'>
                    <div 
                        id='sectionName1'
                        className={
                            props.section === "section1" ? 'h-full ps-2 py-2 flex flex-col link-show' : 'h-full ps-2 py-2 flex flex-col justify-center'
                        }
                    >
                        <p className='font-philosopher font-bold text-base'>Thasmai</p>
                        {props.section === "section1" && 
                            <a 
                                className='w-[133px] h-[32px] text-sm  font-semibold font-sans rounded-lg bg-[#A1B53A] text-[#2C3400] flex justify-center items-center'
                                href='https://thasmai.tstsvc.in/'
                                target='_blank'
                            >
                                Visit our website
                            </a> 
                        }
                    </div>
                </div>
                
            </div>

            <div 
                id='section2'
                className={
                    props.section === "section2" ? 
                        'width-transition h-16 md:h-[88px] px-2 bg-[#F8AD2B] rounded-l-full flex items-center'
                        :
                        'w-[76px] h-16 md:w-[241px] md:h-[88px] px-2 bg-[#F8AD2B] rounded-l-full flex items-center'
                }
                onClick={() => {
                    props.setSection("section2");
                }}
            >
                <div className='w-[56px] h-[56px] md:w-[72px] md:h-[72px]'>
                    <img className="w-full rounded-full" src="lotus-pose-yoga.jpg" alt="" />
                </div>
                <div className='hidden md:block h-full'>
                    <div 
                        id='sectionName2'
                        className={
                            props.section === "section2" ? 'h-full ps-2 py-2 flex flex-col link-show' : 'h-full ps-2 py-2 flex flex-col justify-center'
                        }
                    >
                        <p className='font-philosopher font-bold text-base'>SMS Meditation</p>
                        {props.section === "section2" && <a 
                            className='w-[133px] h-[32px] text-sm  font-semibold font-sans rounded-lg bg-[#A1B53A] text-[#2C3400] flex justify-center items-center'
                            href='https://thasmai.tstsvc.in/'
                            target='_blank'
                            >
                                Visit our website
                            </a> 
                        }
                    </div>
                </div>
                
            </div>

            <div 
                id='section3'
                className={
                    props.section === "section3" ? 
                        'width-transition h-16 md:h-[88px] px-2 bg-[#F8AD2B] rounded-l-full flex items-center'
                        :
                        'w-[76px] h-16 md:w-[241px] md:h-[88px] px-2 bg-[#F8AD2B] rounded-l-full flex items-center'
                }
                onClick={() => {
                    props.setSection("section3");
                }}
            >
                <div className='w-[56px] h-[56px] md:w-[72px] md:h-[72px]'>
                    <img className="w-full rounded-full" src="Ellipse57.png" alt="" />
                </div>
                <div className='hidden md:block h-full'>
                    <div 
                        id='sectionName3'
                        className={
                            props.section === "section3" ? 'h-full ps-2 py-2 flex flex-col link-show' : 'h-full ps-2 py-2 flex flex-col justify-center'
                        }
                    >
                        <p className='font-philosopher font-bold text-base'>Thasmai Solutions</p>
                        {props.section === "section3" && <a 
                            className='w-[133px] h-[32px] text-sm  font-semibold font-sans rounded-lg bg-[#A1B53A] text-[#2C3400] flex justify-center items-center'
                            href='https://thasmai.tstsvc.in/'
                            target='_blank'
                            >
                                Visit our website
                            </a> 
                        }
                    </div>
                </div>
                
            </div>

            <div 
                id='section4'
                className={
                    props.section === "section4" ? 
                        'width-transition h-16 md:h-[88px] px-2 bg-[#F8AD2B] rounded-l-full flex items-center'
                        :
                        'w-[76px] h-16 md:w-[241px] md:h-[88px] px-2 bg-[#F8AD2B] rounded-l-full flex items-center'
                }
                onClick={() => {
                    props.setSection("section4");
                }}
            >
                <div className='w-[56px] h-[56px] md:w-[72px] md:h-[72px]'>
                    <img className="w-full rounded-full" src="Ellipse58.png" alt="" />
                </div>
                <div className='hidden md:block h-full'>
                    <div 
                        id='sectionName4'
                        className={
                            props.section === "section4" ? 'h-full ps-2 py-2 flex flex-col link-show' : 'h-full ps-2 py-2 flex flex-col justify-center'
                        }
                    >
                        <p className='font-philosopher font-bold text-base'>Blogs & Articles</p>
                        {props.section === "section4" && <a 
                            className='w-[133px] h-[32px] text-sm  font-semibold font-sans rounded-lg bg-[#A1B53A] text-[#2C3400] flex justify-center items-center'
                            href='https://thasmai.tstsvc.in/'
                            target='_blank'
                            >
                                Visit our website
                            </a> 
                        }
                    </div>
                </div>
                
            </div>

            <div 
                id='section5'
                className={
                    props.section === "section5" ? 
                        'width-transition h-16 md:h-[88px] px-2 bg-[#F8AD2B] rounded-l-full flex items-center'
                        :
                        'w-[76px] h-16 md:w-[241px] md:h-[88px] px-2 bg-[#F8AD2B] rounded-l-full flex items-center'
                }
                onClick={() => {
                    props.setSection("section5");
                }}
            >
                <div className='w-[56px] h-[56px] md:w-[72px] md:h-[72px]'>
                    <img className="w-full rounded-full" src="Ellipse59.png" alt="" />
                </div>
                <div className='hidden md:block h-full'>
                    <div 
                        id='sectionName5'
                        className={
                            props.section === "section5" ? 'h-full ps-2 py-2 flex flex-col justify-center link-show' : 'h-full ps-2 py-2 flex flex-col justify-center'
                        }
                    >
                        <p className='font-philosopher font-bold text-base'>Digital Library</p>
                        {props.section === "section5" && 
                            <a 
                                className='w-[133px] h-[32px] text-sm  font-semibold font-sans rounded-lg bg-[#A1B53A] text-[#2C3400] flex justify-center items-center'
                                href='https://thasmai.tstsvc.in/'
                                target='_blank'
                            >
                                Visit our website
                            </a> 
                        }
                    </div>
                </div>
                
            </div>

            <div 
                id='section6'
                className={
                    props.section === "section6" ? 
                        'width-transition h-16 md:h-[88px] px-2 bg-[#F8AD2B] rounded-l-full flex items-center'
                        :
                        'w-[76px] h-16 md:w-[241px] md:h-[88px] px-2 bg-[#F8AD2B] rounded-l-full flex items-center'
                }
                onClick={() => {
                    props.setSection("section6");
                }}
            >
                <div className='w-[56px] h-[56px] md:w-[72px] md:h-[72px]'>
                    <img className="w-full rounded-full" src="Ellipse60.png" alt="" />
                </div>
                <div className='hidden md:block h-full'>
                    <div 
                        id='sectionName6'
                        className={
                            props.section === "section6" ? 'h-full ps-2 py-2 flex flex-col link-show' : 'h-full ps-2 py-2 flex flex-col justify-center'
                        }
                    >
                        <p className='font-philosopher font-bold text-base'>Films & Documentaries</p>
                        {props.section === "section6" && <a 
                            className='w-[133px] h-[32px] text-sm  font-semibold font-sans rounded-lg bg-[#A1B53A] text-[#2C3400] flex justify-center items-center'
                            href='https://thasmai.tstsvc.in/'
                            target='_blank'
                            >
                                Visit our website
                            </a> 
                        }
                    </div>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default Sidebar