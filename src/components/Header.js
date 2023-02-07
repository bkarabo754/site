import React from 'react';
import Logo from '../assets/logo.svg';
import { DiCssdeck } from 'react-icons/di'

const Header = () => {
  return (
  <header className="bg-[#0F1624] py-8">
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a href="#" className='flex items-center text-white mb-2'>
          <DiCssdeck size="3rem" /> <span className='text-[55px] font-semibold leading-[0.8] lg:text-[20px]'>Bongani Masango</span>
        </a>
        <button className="btn btn-sm">Work with me</button>
      </div>
    </div>
  </header>
  );
};

export default Header;
