import React from 'react';
import Images from '../assets/avatar.svg'
import {FaGithub, FaYoutube, FaDribble, FaLinkedin, FaMedium} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Banner = () => {
  return (
  <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center bg-[#0F1624]" id="home">
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
            variants={fadeIn('up', 0.3)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Bongani <span>Masango</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className=" text-white mr-4">I am a</span>
            <TypeAnimation 
              sequence={[
              'Developer',
              2000,
              'Guy-who-loves-Coffee.js',
              2000,
              '<ButLovesToCodeMore />',
              2000,
            ]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>
            <motion.p
               variants={fadeIn('up', 0.5)}
               initial={'hidden'}
               whileInView={'show'}
               viewport={{once: false, amount: 0.7}}
               className="mb-8 max-w-lg mx-auto lg:mx-0">A passionate Front End Developer 🚀 having an experience of designing and    building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button class="btn btn-lg">Contact me</button>
              <a href="#" className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaMedium />
              </a>
            </motion.div>
        </div>
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial={'hidden'}
          whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Images} alt="" />
        </motion.div>
      </div>
    </div>  
  </section>
  );
};

export default Banner;
