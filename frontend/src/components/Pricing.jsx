// eslint-disable-next-line no-unused-vars
import React from 'react'

import {AiOutlineDoubleRight} from 'react-icons/ai'
import { MdMergeType } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import house1 from '../assets/ND1.jpg'
import house2 from '../assets/ND2.png'
import house3 from '../assets/ND3.png'
import house4 from '../assets/ND4.jpg'
import house5 from '../assets/ND5.jpg'

const Pricing = () => {
  return (
    <div className='py-10'>
        <p className='px-4 py-1 text-xs bg-yellow-100 w-16 rounded-lg'>NEW</p>
        <h1 className='text-4xl font-bold'>Newest 𝕏 PRs.</h1>
        <div className="deals grid 2xl:grid-cols-5 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house1} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <IoCheckmarkDoneCircleSharp size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <h1 className='text-2xl font-semibold'>QuantumLeap Accelerator</h1>
                <div className='flex items-center space-x-2'>
                <MdMergeType/>
                <p className='text-sm text-gray-600'>Hardware</p>
                </div>
                </div>

            </div>

            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house2} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <IoCheckmarkDoneCircleSharp size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <h1 className='text-2xl font-semibold'>AeroBot Drone Explorer</h1>
                <div className='flex items-center space-x-2'>
                <MdMergeType/>
                <p className='text-sm text-gray-600'>Hardware</p>
                </div>
                </div>

            </div>

            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house3} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <IoCheckmarkDoneCircleSharp size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <h1 className='text-2xl font-semibold'>CodeCraft AI IDE</h1>
                <div className='flex items-center space-x-2'>
                <MdMergeType/>
                <p className='text-sm text-gray-600'>Software</p>
                </div>
                </div>

            </div>

            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house4} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <IoCheckmarkDoneCircleSharp size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <h1 className='text-2xl font-semibold'>SecureVault Manager</h1>
                <div className='flex items-center space-x-2'>
                <MdMergeType/>
                <p className='text-sm text-gray-600'>Software</p>
                </div>
                </div>

            </div>

            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house5} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <IoCheckmarkDoneCircleSharp size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <h1 className='text-2xl font-semibold'>QuantumLeap Algorithm</h1>
                <div className='flex items-center space-x-2'>
                <MdMergeType/>
                <p className='text-sm text-gray-600'>Software</p>
                </div>
                </div>

            </div>
            
        </div>
        <div className='w-full flex justify-center py-5'>
        <button className='bg-yellow-200 px-5 py-2 rounded-md text-xl flex items-center space-x-2'><span>View More</span> <AiOutlineDoubleRight/></button>
        </div>
    </div>
  )
}

export default Pricing