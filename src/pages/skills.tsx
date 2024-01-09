import React from 'react';
import NavBar from '../components/NavBar';
import { Footer } from '../components/Footer';
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoDocumentAttachOutline } from "react-icons/io5"; 


const Skills = () => {

    const skillSet = [
        { name: 'HTML', icon: <FaHtml5 size={20} />, style: "h-1 bg-green-500 w-3/4" },
        { name: 'JavaScript', icon: <IoLogoJavascript size={20} />, style: "h-1 bg-green-500 w-3/4" },
        { name: 'CSS', icon: <FaCss3 size={20} />, style: "h-1 bg-green-500 w-3/4" },
        { name: 'Next JS', icon: <SiNextdotjs size={20} />, style: "h-1 bg-green-500 w-3/4" },
        { name: 'PostgresSQL', icon: <BiLogoPostgresql size={20} />, style: "h-1 bg-amber-500 w-2/4" },
        { name: 'GIT', icon: <FaGithub size={20} />, style: "h-1 bg-amber-500 w-2/4" },
    ];

    const skillsetTwo = [
        { name: 'TypeScript', icon: <SiTypescript size={20} />, style: "h-1 bg-green-500 w-3/4" },
        { name: 'Python', icon: <FaPython size={20} />, style: "h-1 bg-amber-500 w-2/4" },
        { name: 'Express JS', icon: <SiExpress size={20} />, style: "h-1 bg-green-500 w-3/4" },
        { name: 'React JS', icon: <FaReact size={20} />, style: "h-1 bg-green-500 w-3/4" },
        { name: 'Mongo DB/No SQL', icon: <DiMongodb size={20} />, style: "h-1 bg-green-500 w-3/4" },
        { name: 'Project documentation', icon: <IoDocumentAttachOutline size={20} />, style: "h-1 bg-amber-500 w-2/4" },
    ];


    return (
        <main className=' bg-zinc-800 text-white scroll overflow-y-scroll flex flex-col items-center justify-center h-screen w-screen'>
            <NavBar />
            <div className='h-full m-8 p-8 w-full flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center scroll overflow-scroll'>

                <div className='w-full flex flex-col gap-4 m-2'>
                    {skillSet.map((skills: any) => (
                        <>
                            
                            <div className='flex gap-5'>
                                <div>{skills.icon}</div>
                                <p>{skills.name}</p>

                            </div>
                        <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                            <div className={skills.style}></div>
                            </div>
                        </>
                    ))}
                </div>
                <div className='w-full flex flex-col gap-4 m-2'>
                    {skillsetTwo.map((skillsTwo: any) => (
                        <>
                            <div className='flex gap-5'>
                                <div>{skillsTwo.icon}</div>
                                <p>{ skillsTwo.name}</p>
                                
                            </div>
                            
                        <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                            <div className={skillsTwo.style}></div>
                            </div>
                    
                        </>
                    ))}
                </div>

            </div>
            <div id='footer'><Footer /></div>
        </main>
    );
};

export { Skills };
