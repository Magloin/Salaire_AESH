import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return (<div></div>)
    /*return (   
        <nav className="bg-gray-00 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 max-sm:p-2">
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 max-sm:p-2 lg:text-2xl xl:text-3xl">
                    <li>
                        <NavLink to="/"         className={({isActive}) => `${isActive ? "text-blue-600" : "text-gray-900"} block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Simulateur de salaire</NavLink>
                    </li>
                    <li>
                        <NavLink to="/carence"  className={({isActive}) => `${isActive ? "text-blue-600" : "text-gray-900"} block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Simulateur de carence</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )*/
}

export default Navbar;