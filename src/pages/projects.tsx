import React from 'react';
import NavBar from '../components/NavBar';
import cover from '../pictures/webStore.jpeg';
import DashBoard from '../pictures/DashBoardApp.png';
import LoginApp from '../pictures/LoginApp.png';
import { Footer } from '../components/Footer';

function Projects() {

    const projects = [

        {
            id: 'item1',
            title: 'Ecommerce App',
            link: 'https://web-app-store-ochre.vercel.app/',
            image: cover,
            description:
                <>
                    <ul className='list-disc list-outside'>
                        <li>Developed a feature-rich ecommerce application with capabilities such as product listing,shopping cart, checkout,and order management.</li>
                        <li>Leveraged Supabase's features for seamless and scalable data storage and retrieval.</li>
                        <li>Designed and implemented an intuitive and responsive user interface for the ecommerce app, ensuring a positive user experience.</li>
                        <li>Utilized frontend technologies such as Next JS, Tailwind CSS for dynamic and interactive user interfaces.</li>
                        <li>Developed the backend logic of the ecommerce app, handling product catalog management, order processing, and inventory updates.</li>
                        <li>Implemented server-side functionalities to enhance the performance and reliability of the ecommerce system.</li>
                        <li>Implemented database queries and optimizations for improved performance.</li>
                        <li>Utilized Git version control systems to manage the codebase, track changes, and collaborate effectively with other developers.</li>
                        <li>Implemented thorough testing procedures, including unit testing and end-to-end testing, to ensure the reliability and functionality of the ecommerce app.</li>
                    </ul>
                </>
        },
        {
            id: 'item2',
            title: 'Login App',
            image: LoginApp,
            link: 'https://login-app-one-ebon.vercel.app/',
            description:
                <>
                    <ul className='list-disc list-outside'>
                        <li>Developed a custom authentication app from scratch, including user registration, login, and password functionalities.</li>
                        <li>Successfully integrated the authentication app with Supabase, utilizing Supabase Auth for user management.</li>
                        <li>Leveraged Supabase's database functionalities to store and manage user profiles securely.</li>
                        <li>Designed and implemented a user-friendly frontend interface for the authentication app using mention relevant frontend technologies, Next JS & Tailwind CSS.</li>
                        <li>Ensured responsive design and a seamless user experience across various devices.</li>
                        <li>Developed the backend of the authentication app, handling user authentication requests and interacting with Supabase services.</li>
                        <li>Implemented server-side logic to enhance the security and efficiency of the authentication process.</li>
                        <li>Prioritized and implemented features that enhance the overall user experience, streamlining the registration and login processes.</li>
                        <li>Implemented thorough testing procedures, including unit testing and end-to-end testing, to ensure the reliability and functionality of the ecommerce app.</li>
                    </ul>
                </>
        },
        {
            id: 'item3',
            title: 'DashBoard App',
            link:'https://dash-board-gilt.vercel.app/', 
            image: DashBoard,
            description:
                <>
                    <ul className='list-disc list-outside'>
                        <li>Developed a dynamic and visually appealing dashboard application to present data in an accessible and user-friendly format.</li>
                        <li>Designed and implemented interactive data visualizations and charts for effective data representation.</li>
                        <li>Connected the dashboard app to a data API, enabling real-time or near-real-time data updates and retrieval.</li>
                        <li>Implemented a responsive and intuitive user interface for the dashboard app using , Next JS & Tailwind CSS.</li>
                        <li>Developed the backend logic to handle data retrieval, processing, and storage for the dashboard app..</li>
                        <li>Utilized data visualization libraries, chart js,  to create compelling and insightful visual representations of the data.</li>
                        <li>Demonstrated the ability to consume and integrate data from external APIs seamlessly into the dashboard app..</li>
                        <li>Handled API responses effectively, including error handling and efficient data parsing.</li>
                        <li>Ensured data accuracy and consistency through proper error handling and validation.</li>
                    </ul>
                </>
        },

    ]; 



    return (
        <main className='bg-zinc-800 flex flex-col items-center h-screen w-screen text-white'>
            <div className='w-full'><NavBar /></div>
            <div className="carousel m-20 h-full w-full">
                {projects.map((project:any)=>(
                    <div id={project.id} className="carousel-item w-full">
                        <div className="card lg:card-side flex justify-between shadow-xl">
                            <figure><img className=' ml-20 border rounded-lg hidden h-[30vh] w-[70vh] xl:block' src={project.image} alt="Album" /></figure>
                            <div className="card-body scroll overflow-scroll flex flex-col justify-center items-center justify-between">
                                <h2 className="card-title">{project.title}</h2>
                                <div className='ml-20'>{project.description}</div>
                                <div className="card-actions justify-end">
                                    <a href={project.link}><button className="btn btn-primary">View App</button></a>
                                </div>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="cursor-pointer transition hover:scale-125 duration-300 ease-in-out hover hover:bg-yellow-400 btn btn-sm">1</a>
                <a href="#item2" className="cursor-pointer transition hover:scale-125 duration-300 ease-in-out hover hover:bg-yellow-400 btn btn-sm">2</a>
                <a href="#item3" className="cursor-pointer transition hover:scale-125 duration-300 ease-in-out hover hover:bg-yellow-400 btn btn-sm">3</a>
            </div>
            <div id='footer'><Footer /></div>
        </main>
    );
};

export { Projects }; 