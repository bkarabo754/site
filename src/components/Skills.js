import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'

const Skills = () => {
  return (
    <motion.section 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='bg-[#0F1624] snap-start h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[100%] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center' id="skills">
      <h3 className='absolute top-10 h2 uppercase tracking-[20px] text-accent text-2xl'>Skills</h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-white h3 text-sm'>Hover over skill for current proficiency</h3>

      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.section>
  )
}

export default Skills
