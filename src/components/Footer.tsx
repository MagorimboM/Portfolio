import React from 'react'

function Footer() {




    return (<main>
        <footer className=" w-screen rounded-lg shadow m-4">
            <div className="w-full mx-auto max-w-screen-xl flex justify-between items-center p-8 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Mark.M. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        Email: mark.magorimbo@gmail.com
                    </li>
                </ul>
            </div>
        </footer>
    </main>)
};

export { Footer }; 