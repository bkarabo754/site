import React from 'react'
import {motion} from 'framer-motion'

const ExperienceCard = () => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[black] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img 
        initial={{y: 100, opacity: 0,}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center" src="https://media.licdn.com/dms/image/C4E0BAQG5p2usZuz0Vg/company-logo_200_200/0/1649920888214?e=2147483647&v=beta&t=-2nxGwCJIkfmzvb7cWP-G39fZTc8tsTaL3jWQdlcZGY" alt="" />

    <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Front End Developer</h4>
        <h3 className='font-bold text-2xl mt-1'>Command Quality</h3>
        <div className='flex space-x-2 my-2'>
            <img className="h-10 w-10 rounded-full" src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />
        </div>
        <p className='uppercase py-5 text-gray-300'>Wed May 30 2019 - Present</p>

        <ul class="list-disc space-y-4 ml-5 text-lg">
            <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
            <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
            <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
            <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
            <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
        </ul>
    </div>
    </article>
  )
}

export default ExperienceCard
