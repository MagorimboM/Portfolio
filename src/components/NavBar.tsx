import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";


const NavBar = () => {


    const NavBarLinks = [

        { href: '/', name: 'Home' },
        { href: '/projects', name: 'Projects' },
        { href: '/about', name: 'About' },
        { href: '/skills', name: 'Skills' },
        { href: "https://www.google.com", name: <FaGithub /> },
        { href: 'https://www.linkedin.com/in/mark-magorimbo-645065212',name: <FaLinkedinIn />}
    ];


    return (
        <div className='w-screen flex pt-10 pl-5 pr-5 items-center justify-between md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'>
            <div>
                <div className='font-bold pl-10 text-xl lg:text-2xl 
                md:text-2xl xl:text-2xl 2xl: text-2xl cursor-pointer  '>
                    <a href='/'>
                        <h2 className='flex flex-col lg:flex-row md:flex-row xl:flex-row 2xl:flex-row'>
                            Software &nbsp;
                            <span className=' transition duration-300 ease-in-out 
                                  rounded-lg hover:text-white text-yellow-400
                                  hover:shadow-yellow-400/50 '>
                                Engineer
                            </span>
                        </h2>
                    </a>
                </div>
            </div>
            <div className=''>
                <ul className='flex flex-row text-sm md:flex-row 
                lg:flex-row xl:flex-row 2xl:flex-row gap-2 sm:gap-10 md:gap-10 lg:gap-10
                xl:gap-10 2xl:gap-10 text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg
                md:pr-10 lg:pr-10 xl:pr-10 2xl:pr-10'>
                    {NavBarLinks.map((navs: any) => (
                        <li className=' cursor-pointer hover:underline underline-offset-8 transform hover:scale-125 hover:text-yellow-400 transition duration-300 ease-in-out'> <a href={navs.href}>{navs.name} </a></li>))}
                </ul>
            </div>
        </div>
    )
};

export default NavBar; 