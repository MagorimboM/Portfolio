import React from 'react';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';


function App() {



  return (
    <main className="bg-zinc-800 flex flex-col items-center h-screen w-screen text-white">
      <div title='navBar'><NavBar/></div>
      <div className=' h-screen flex flex-col gap-3 mb-20 p-10 justify-center items-center '>
        <span className='text-2xl'>Hi I'm Mark M</span>
        <span className='text-4xl font-bold md:txt-5xl lg:text-8xl xl:text-8xl 2xl:text-8xl '>I'm a junior software engineer</span>
        <span>with 3+ years of professional experience in residential planning, scheduling
          and estimating 1+ years of full-stack developement. Diploma in Software Engineering <br /> and emerging graduate  
          in Bach of Computer Science. Expertise in C++, JavaScript,HTML, CSS, Tailwind CSS,
          TypeScript, Python, React.JS, Next JS, Express JS, <br />NoSQL Database, PostgreSQL & AWS.
          <span className='font-bold text-md mt-5 transform hover:scale-125 hover:text-yellow-400 underline underline-offset-8 transition duration-300 ease-in-out'><a href='/projects'> View My Projects</a></span>
          </span>
      </div>
      <div id='footer'><Footer /></div>
    </main>
    
  );
}

export default App;
