import React from 'react';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';


function App() {



  return (
    <main className="bg-zinc-800 flex flex-col items-center h-screen w-screen text-white">
      <div title='navBar'><NavBar/></div>
      <div className=' h-screen flex flex-col gap-3 mb-20 p-10 justify-center items-center '>
        <span className='text-2xl'>Hi I'm Mark M</span>
        <span className='text-4xl font-bold md:txt-5xl lg:text-8xl xl:text-8xl 2xl:text-8xl '>Aspiring software engineer</span>
        <span> I focus on optimizing technology operations for businesses. By leveraging my expertise in designing, developing, and testing software applications
          and computer systems,<br /> I effectively streamline processes and minimize the complexities associated with technology. I enable businesses to make better use of their
          resources reallocating them to more <br /> vital aspects of their operations. With my professional approach, i contribute to enhancing efficiency and effectiveness in overall
          resource allocation.
          <span className='font-bold text-md mt-5 transform hover:scale-125 hover:text-yellow-400 underline underline-offset-8 transition duration-300 ease-in-out'><a href='/About'> Get to know me more</a></span>
          </span>
      </div>
      <div id='footer'><Footer /></div>
    </main>
    
  );
}

export default App;
