// import React from 'react'
import logo from '../assets/logo/logo.png'

import {BsFileBarGraph, BsCalendar2Date} from 'react-icons/bs'
import {HiPresentationChartLine, HiLocationMarker, HiCog} from 'react-icons/hi'
// import {GrMapLocation, GrLocation} from 'react-icons/gr'

const Nav = () => {
    return (
        <div className='absolute block hidden lg:block'>
            <div className='border border-black h-screen w-20'>
                <div className='flex justify-center items-center my-5'>
                    <img src={logo} alt='logo' className='w-12 '/>
                </div>
                <div className='flex flex-col gap-5 justify-center items-center xl:mt-20 lg:mt-12'>
                    <div className='bg-orange-400 rounded-xl shadow-xl'>
                        <BsFileBarGraph className='text-xl text-white m-3'/>
                    </div>
                    <div className="group hover:bg-orange-400 hover:rounded-xl hover:shadow-xl transition-all ease-in-out delay-0">
                        <HiPresentationChartLine class="text-xl m-3 group-hover:text-white" />
                    </div>
                    <div className="group hover:bg-orange-400 hover:rounded-xl hover:shadow-xl transition-all ease-in-out delay-0">
                        <HiLocationMarker class="text-xl m-3  group-hover:text-white" />
                    </div>
                    <div className="group hover:bg-orange-400 hover:rounded-xl hover:shadow-xl transition-all ease-in-out delay-0">
                        <BsCalendar2Date class="text-xl m-3 group-hover:text-white" />
                    </div>
                    <div className="group hover:bg-orange-400 hover:rounded-xl hover:shadow-xl transition-all ease-in-out delay-0">
                        <HiCog class="text-xl m-3 group-hover:text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav