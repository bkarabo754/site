import React from 'react';
import {motion} from 'framer-motion'
import Image from '../assets/image1.png'


const Work = () => {
  const projects = [1, 2, 3, 4, 5]
  return (
  <div className="h-screen snap-start bg-[#0F1624] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0" id="projects">
    <h3 className="absolute top-36 uppercase tracking-[20px] text-accent h2 text-2xl">Projects</h3>

    <div className="relative w-full flex overflow-scroll overflow-y-hidden overflow-x-hidden snap-x snap-mandatory z-20">
      {projects.map((project, i) => (
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <img src={Image} alt="" />
      <div>
        <h4 className='text-4xl font-semibold text-center'>
          <span className='underline decoration-[#99208f]'>Case Study {i + 1} of {projects.length}:</span> HooBank Website
        </h4>
      </div>
      </div>
))}
    </div>

    <div className="w-full absolute top-[30%] bg-accent/10 left-0 h-[500px] -skew-y-12"/>
  </div>
  );
};

export default Work;
