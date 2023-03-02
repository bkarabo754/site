import React from 'react'


const ProjectItem = ({img, title}) => {
  const portfolio = [
    {
      id: 1,
      src:'https://alina-lee-photographer.netlify.app/'
      
    },
    {
      id: 2,
      src:'https://alina-lee-photographer.netlify.app/'
      
    },
    {
      id: 3,
      src:'https://alina-lee-photographer.netlify.app/'
      
    },
    {
      id: 4,
      src:'https://alina-lee-photographer.netlify.app/'
      
    },
    {
      id: 5,
      src:'https://alina-lee-photographer.netlify.app/'
      
    },
    {
      id: 6,
      src:'https://alina-lee-photographer.netlify.app/'
      
    },
    {
      id: 7,
      src:'https://alina-lee-photographer.netlify.app/'
      
    },
  ]

  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-100 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#0F1624]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10 group-hover:scale-100 transition-all duration-500'/>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold mb-5 text-white tracking-wider text-center'>{title}</h3>
        <a href="/" />
        <p className="text-center p-3 rounded-lg bg-[#0F1624] text-white font-bold cursor-pointer text-lg">Visit Site</p>
      </div>
    </div>
  )
}

export default ProjectItem
