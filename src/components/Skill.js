import React from 'react'
import {motion} from 'framer-motion'

const direction = [
    {
        directionLeft: true

    }
]


const Skill = ({directionLeft}) => {
  return (
    <div className='group top-24 relative flex cursor-pointer'>
      <motion.img
        initial={{x: directionLeft ? -200 : 200, opacity: 0}}
        transition={{ duration: 1 }}
        whileInView={{opacity: 1, x: 0}}
        src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"
        className='rounded-full border border-accent object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition: duration-300 ease-in-out'
      />

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className="flex items-center justify-center h-full">
            <p className='text-3xl font-bold text-gray-500 opacity-100'>100%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill
