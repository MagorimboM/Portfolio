import React from 'react'
import NavBar from '../components/NavBar'
import { IoIosArrowForward } from "react-icons/io";
import { Footer } from '../components/Footer';

const About = () => {
    const keyFunctions = [

        {
            description: 'Collaboration with project team members.',
            icon: <IoIosArrowForward />
        },
        {
            description: 'Identification and analysis of high cost areas within business operations.',
            icon: <IoIosArrowForward />
        },
        {
            description: 'Identification of threats to productivity and production rates.',
            icon: <IoIosArrowForward />
        },
        {
            description: 'Problem-solving and providing solutions for project leaders.',
            icon: <IoIosArrowForward />
        },

    ];
    return (
        <main className=' bg-zinc-800 text-white h-screen w-screen flex flex-col items-center'>
            <div title='NavBar'><NavBar /></div>
            <div className="flex justify-center items-center h-screen p-10">
                <div className="w-full h-full flex flex-col justify-center scroll overflow-scroll items-center">

                    <h1 className=" text-4xl  text-center md:text-[35px] lg:text-[55px] xl:text-[55px] 2xl:text-[55px] textfont-extrabold text-white">
                        About Me <br />

                    </h1>
                    <p className=" text-xs md:text-sm lg:text-lg xl:text-lg 2xl:text-lg mx-auto mt-[40px] text-sm font-light text-[#C5C5C5] w-full" >I am a junior software engineer with over
                        3 years of experience in diverse, project-based environments with a keen focus on project management, problem-solving and cost control as a cost engineer.
                        I have performed this role in service of tier 2 and tier 3 companies within the Australian construction industry including BGC Housing Group, Shelford Group and PCM Group.
                        Key functions within this role include, but are not limited to:
                        <br />
                        <br />

                        <ul>
                            {keyFunctions.map((keyRoles: any) => (
                                <li className='flex items-center'>{keyRoles.icon}{keyRoles.description}
                                </li>
                            ))}

                        </ul>
                        <br />
                        This experience has allowed me to develop transferrable skills required to analyse
                        project/business needs and identify opportunities for improvement and success.
                        This includes the ability to identify and analyse business issues/needs,
                        work closely with clients/internal teams, capture client requirements and create
                        solutions for clients and project stakeholders.My cost engineering/project management
                        skillset, coupled with software engineering qualifications and experience, allowed
                        me to bridge the gap between technical and non-technical teams within an organisation.
                        This provides opportunity to effectively address stakeholder concerns and work closely with technical teams.
                        An example of this is the role I served as a quantity estimator and mediator between fullstack developers and project team members
                        for the ongoing inhouse software development. We had to re-design database, refactor code base and ammend user interaction inorder to
                        increase production rate, remove bugs and reduce work-load by automating repetitve tasks, and streamline estimation processes. Due to
                        legal reasons i cannot reference company and software developed however my personal projects demonstrate skills/experience aqcuired
                        when conducting the software improvement endavour.</p>

                </div>
            </div>
            <div id='footer'><Footer /></div>
        </main >
    );
};

export { About }; 