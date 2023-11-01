"use client"
import React from 'react'
import {useState} from 'react'

import CloseSvg from '../components/CloseSvg';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProfileMenuView() {
     const [open, setOpen] = useState(true)
     const [percentage, setPercentage] = useState(10); // put value here
     const [used, setUsed] = useState("0.67") // put value here
     const [totalSpace, setTotalSpace] = useState(10) // put value here

     const handleClickOpen = () => {
          setOpen(!open)
     }
  return (
    <div className='bg-slate-200'>

     <div>
          <img src="https://picsum.photos/200/300" alt="" className='cursor-pointer rounded-full h-16 w-16 max-sm:ml-[80%] sm:ml-[90%] xl:ml-[96%] m-1'
          onClick={handleClickOpen}/>
     </div>

     <div className={`${open ? "lg:left-[68%] max-sm:left-[0%] sm:left-[47%] xl:left-[79.5%] md:left-[61%]" : "left-[100%]"} duration-300 top-full h-[50%] bg-white relative w-[400px] rounded-md shadow-2xl`}>
          <div className='flex'>
               <img src="https://picsum.photos/200/300" alt="profile_pic" className='object-cover h-32 p-2 m-2 ml-10 w-28 rounded-xl'/>
               <div className='block'>
                    <div className='mx-5 mt-5 text-lg font-bold'><p>Name</p></div>
                    <div className='mx-5 mt-5 text-sm font-medium'><p>example@email.com</p></div>
                    <div className='mx-5 mt-5 text-sm font-medium'><p>User ID: 0000000</p></div>
               </div>
               <div className='ml-[7%] mr-2 pt-2 cursor-pointer w-8 h-8' onClick={handleClickOpen}>
                    <CloseSvg/>
               </div>
          </div>
          
          <div className='m-3 mt-10'>
               <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" className='object-cover w-full rounded' />
               <div className='mt-10 ml-10 font-medium text-md'>You are in 'Mail Lite plan'</div>
               <div className='mt-2 ml-10 text-sm font-extralight'>Plan expires on 10/8/24'</div>

               <div className='flex mt-10'>
                    <div className='w-20 h-20 m-5 mx-10'>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>

                    <div className='m-5 mb-12'>
                         <p className='my-1 ml-16'>Mail</p>
                         <p className='mx-auto my-1 ml-16 text-blue-400'>{percentage}%</p>
                         <p className='text-blue-400'>{used} GB of {totalSpace} GB Used<p> </p></p>
                    </div>
               </div>
          </div>
          
     </div>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas blanditiis, repudiandae officiis molestiae saepe, cumque expedita et dolorum numquam sequi sed nesciunt aut, facilis asperiores harum beatae odit esse. Corporis?</p>
    </div>
  )
}
