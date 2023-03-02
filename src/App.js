import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';

// bg-[#0F1624]

const App = () => {
  return (
    <div className='bg-no-repeat bg-cover overflow-hidden bg-[#0F1624]'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Projects />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
