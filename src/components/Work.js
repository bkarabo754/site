import React from 'react'
import ProjectItem from './ProjectItem'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import Image4 from '../assets/image4.png'
import Image5 from '../assets/image5.png'
import Image6 from '../assets/image6.png'
import Image7 from '../assets/image7.png'

const Work = ({ id, src}) => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16" id="work">
      <h1 className="h2 leading-tight text-accent text-center">My Latest Work</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet, con, Lorem ipsum dolor sit amet, con, Lorem ipsum dolor sit amet, con, Lorem ipsum dolor sit amet, con, Lorem ipsum dolor sit amet, con, Lorem ipsum dolor sit amet, con</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={Image1} title="HooBank Website" />
        <ProjectItem img={Image2} title="Geritch's Restaurant Website" />
        <ProjectItem img={Image3} title="GPT-3 OpenAI Website"  />
        <ProjectItem img={Image4} title="Alina's Photography Website"  /> 
        <ProjectItem img={Image5} title="Void Tattoo Website"  /> 
        <ProjectItem img={Image6} title="Data Analytics"  /> 
        <ProjectItem img={Image7} title="Metaverse Website"  /> 
      </div>
    </div>
  )
}

export default Work