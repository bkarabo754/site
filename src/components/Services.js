import React from 'react';
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard';


const Services = () => {
  return (
  <motion.section 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="section bg-[#0F1624] top snap-center h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center" id="services">
    <h3 className='absolute top-14 h2 uppercase tracking-[20px] text-accent text-2xl'>Experience</h3>
    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
    </div>
  </motion.section>
  );
};

export default Services;
