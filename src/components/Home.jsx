// import React from 'react'
import { FiSearch } from 'react-icons/fi' 
import { BsBell, BsCloudSun } from 'react-icons/bs' 
import { CiMenuBurger } from 'react-icons/ci' 
import { RiWindyFill } from 'react-icons/ri' 

const Home = () => {
    return (
        <div className="absolute xl:left-20">
            <div className="flex flex-col xl:flex-row h-screen items-center">
                <div className="w-screen xl:w-[950px]">
                    <div className="flex justify-between items-center mx-2 xl:mx-8 lg:mt-5 2xl:mt-5">
                        <div className='block lg:hidden border ml-2 p-2 border-gray-300 rounded-md'>
                            <CiMenuBurger/>
                        </div>
                        <div className='lg:text-xl 2xl:text-2xl font-bold'>
                            Hello, Sir
                        </div>
                        <div className='flex justify-center items-center gap-5'>
                            <div className='relative'>
                                <div>
                                    <input type="text" className="bg-[#EDF0F0] rounded-lg pl-5 py-2 w-44 xl:w-72 outline-none" placeholder="Search place..."/>
                                </div>
                                <div className='absolute top-2.5 right-1.5 xl:right-5 text-xl text-orange-400'>
                                    <FiSearch/>
                                </div>
                            </div>
                            <div className='border border-gray-300 p-2 xl:p-3 rounded-full'>
                                <BsBell/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col xl:flex-row gap-5 mt-8 mx-8'>
                        <div className='flex flex-col bg-img1 bg-cover w-full xl:w-[430px] lg:h-72 2xl:h-[300px] bg-white rounded-md shadow-md p-4 xl:p-8'>
                            <div className='flex gap-3'>
                                <div className='flex justify-center items-center shadow-2xl bg-white w-fit h-fit p-3 rounded-full text-orange-400'>
                                    <BsCloudSun className='text-xl'/>
                                </div>
                                <div>
                                    <h1 className='text-white font-bold'>Weather</h1>
                                    <span className='text-white text-sm'>What&apos;s the weather</span>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <h1 className='text-5xl text-white'>22°C</h1>
                                <span className='text-white'>Party Cloudy</span>
                            </div>
                            <div className='flex justify-center gap-3 flex-row mt-8'>
                                <div className='w-fit py-3 px-5 bg-[#1c2023] rounded-lg'>
                                    <h1 className='flex justify-center text-white text-sm font-bold'>Pressure</h1>
                                    <span className='text-white text-sm'>10 km/h</span>
                                </div>
                                <div className='w-fit py-3 px-5 bg-[#bed64c] rounded-lg'>
                                    <h1 className='flex justify-center text-white text-sm font-bold'>Visibility</h1>
                                    <span className='flex justify-center text-white text-sm'>4.3 km</span>
                                </div>
                                <div className='w-fit py-3 px-5 bg-white rounded-lg'>
                                    <h1 className='flex justify-center text-sm font-bold'>Humadity</h1>
                                    <span className='flex justify-center text-sm'>87%</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col bg-img2 bg-cover w-full xl:w-[430px] lg:h-72 2xl:h-[300px] bg-white rounded-md shadow-md p-4 xl:p-8'>
                            <div className='flex gap-3'>
                                <div className='flex justify-center items-center shadow-2xl bg-white w-fit h-fit p-3 rounded-full text-orange-400'>
                                    <RiWindyFill className='text-xl'/>
                                </div>
                                <div>
                                    <h1 className='text-white font-bold'>Air Quality</h1>
                                    <span className='text-white text-sm'>Main pollution : PM 2.5</span>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <h1 className='text-5xl'>390</h1>
                                <span className=''>West Wind</span>
                            </div>
                            <div className='mt-8 w-full py-3 px-5 bg-white rounded-lg'>
                                <div className='flex justify-between'>
                                    <h1 className='text-sm'>Pressure</h1>
                                    <h1 className='text-sm'>Pressure</h1>
                                </div>
                                <div className="mt-3 w-full h-2 bg-gray-200 rounded overflow-hidden">
                                    <div className="h-full w-44 bg-blue-500 rounded animate-progress"></div>
                                    <div className="h-full w-full bg-gray-300 rounded animate-progress-reverse"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col xl:flex-row gap-5 mt-5 mx-9'>
                        <div className='flex flex-col bg-img1 bg-cover w-full xl:w-[900px] lg:h-56 2xl:h-[300px] bg-white rounded-md shadow-md p-4 xl:p-8'>
                            <div className='flex gap-3'>
                                <div className='flex justify-center items-center shadow-2xl bg-white w-fit h-fit p-3 rounded-full text-orange-400'>
                                    <BsCloudSun className='text-xl'/>
                                </div>
                                <div>
                                    <h1 className='text-white font-bold'>Weather</h1>
                                    <span className='text-white text-sm'>What&apos;s the weather</span>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <h1 className='text-5xl text-white'>22°C</h1>
                                <span className='text-white'>Party Cloudy</span>
                            </div>
                        </div>

                        <div className='flex flex-col bg-img3 bg-cover w-full xl:w-[430px] lg:h-56 2xl:h-[300px] bg-white rounded-md shadow-md p-4 xl:p-8'>
                            <div className='flex'>
                                <div>
                                    <h1 className='text-white font-bold'>Tomorrow</h1>
                                    <span className='text-white text-sm'>Tabaco City</span>
                                </div>
                            </div>
                            <div className='mt-20'>
                                <h1 className='text-white text-5xl'>20°</h1>
                                <span className='text-white'>Rainny</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-screen w-screen 2xl:w-[505px] bg-[#EDF0F0]">
                    <div className='flex justify-between items-center my-5 mx-5'>
                        <div>
                            <h1 className='font-bold'>Sun</h1>
                        </div>
                        <div>
                            <h1 className='text-4xl text-orange-500'>22°C</h1>
                        </div>
                    </div>
                    <hr className="border-t border-gray-300 my-6 mx-5"/>
                    <div className="flex justify-between h-32 w-32  relative overflow-hidden">
                        <div className="h-full w-full border-dashed bg-transparent border-2 border-orange-400 rounded-tl-full"></div>
                        <div className="h-full w-full border-dashed bg-transparent border-2 border-orange-400 rounded-tr-full"></div>
                        <div className="absolute bottom-0"></div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Home