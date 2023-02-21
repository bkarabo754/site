import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const service = [
  {
    name: 'Front End Developer',
    description: 'fkdvjbjbdvifkbdvsfbdjvbkjdbfvjlkalfbkdnfbkdfkbndkfnbkndfknkbnkdfbkdfnbkdnfbknkfdnbkdnfbkndbkbnkb.',
    link: 'Learn more'
    
  },
  {
    name: 'Development',
    description: 'fkdvjbjbdvifkbdvsfbdjvbkdnfbkndfbkdnfbkdfkbndkfnbkndfknkbnkdfbkdfnbkdnfbknkfdnbkdnfb.',
    link: 'Learn more'
    
  },
  {
    name: 'Mentor',
    description: 'fkdvjbjbdvifkbdvsfbdjvbkjdbfvjlkaljfldhfnjuihuvsyvdbjfnbpojlghbnbkdnfbkndbkbnkbndknfbkndknkbndknfbdfb.',
    link: 'Learn more'
    
  },
  {
    name: 'Mentor',
    description: 'fkdvjbjbdvifkbdvsfbdjvbkjdbfvjlkaljfldhfnjuihuvsyvdbjfnbpojlghbnbkdnfbkndbkbnkbndknfbkndknkbndknfbdfb.',
    link: 'Learn more'
    
  }
]

const Services = () => {
  return (
  <section className="section bg-[#0F1624]" id="services">
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className="h2 text-accent mb-6">What I Do.</h2>
          <h3 className="h3 max-w-[455px] mb-16">I'm a Freelance Front-end Developer with over 5 years of experience.</h3>
          <button className="btn btn-sm">See my work</button>
        </div>
        <div className='flex-1'>
          <div>
            {service.map((service, index) => {

              const {name, description, link} = service; 
              return (
                <div key={index}>
                  <div className='max-w-[476px]'>
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </div>
                  <div>links</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export default Services;
