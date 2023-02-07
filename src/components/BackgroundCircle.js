import React from 'react'
import {motion} from 'framer-motion'


function BackgroundCircle() {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='border border-red-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
      <div className="rounded full border-blue-500 h-[500] w-[300] absolute mt-52" />
      <div className="rounded full border-yellow-500 h-[500] w-[500] absolute mt-52"/>
      <div className='rounded-full border-pink-500 opacity-20 h-[650px] w-[650px] absolute mt-55 animate-pulse'/>
      <div className='rounded-full border border-blue-500 opacity-20 h-[650px] w-[650px]  mt-55 mr-10' />
   
    </div>
  )
}

export default BackgroundCircle
