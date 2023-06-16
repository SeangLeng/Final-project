import React, { useEffect, useState } from 'react'
import logo2 from '../app/images/logo-project.jpg'
import Image from 'next/image'

const fetchStorage = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export default function Navbar() {
    const user = fetchStorage();
    const resetUser = () => {
        localStorage.clear();
        window.location = '/'
    }

    if (user === undefined || user === null) {
        return (
            <nav class="bg-white dark:bg-gray-900 px-5 fixed w-full z-30 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div class=" flex flex-wrap items-center justify-between pr-4">
                    <a href="/" class="flex items-center gap-5">
                        <Image src={logo2} class="h-50 w-20 rounded-[50%]" alt="Flowbite Logo" />
                        <span
                            class=" text-blue-800 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PortISTAD</span>
                    </a>
                    <div class="flex gap-10">
                        <div class="flex md:order-2">
                            <a type="button" href='/log-in'
                                class="flex gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                                <svg width="20" height="19" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.4719 20.3624C16.2807 19.7227 16.9165 18.5243 17.4719 17.9655C18.1867 17.2465 19.0607 14.7703 19.0607 14.7703C20.4901 14.1306 20.6495 13.0925 20.8073 12.3734C21.4431 10.2956 19.8543 9.97656 19.8543 9.97656C19.8543 9.97656 21.1244 6.54159 20.0926 3.90506C18.742 0.470088 13.2625 -0.809252 12.3096 2.38757C5.79818 0.947962 7.14719 9.97502 7.14719 9.97502C7.14719 9.97502 5.55842 10.2941 6.19423 12.3719C6.35356 13.0909 6.51139 14.129 7.94082 14.7687C7.94082 14.7687 8.81487 17.2449 9.52959 17.964C10.085 18.5228 10.7208 19.7212 9.52959 20.3608C7.14719 21.6387 0 21.9593 0 27.5514H27C27.0015 21.9593 19.8543 21.6402 17.4719 20.3624Z"
                                        fill="white" />
                                </svg>

                                Log in</a>
                            <button data-collapse-toggle="navbar-sticky" type="button"
                                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-sticky" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul
                                class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="/"
                                        class="block py-2 pl-3 pr-4  text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700z  "
                                        aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href={`/listProducts`}
                                        class="block py-2 pl-3 pr-4  text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Templates</a>
                                </li>
                                <li>
                                    <a href="#aboutUs"
                                        class="block py-2 pl-3 pr-4  text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About
                                        Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    } else if (user === undefined || user === null || user.role !== "admin") {
        return (
            <nav class="bg-white dark:bg-gray-900 fixed px-5 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div class="flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" class="flex items-center">
                        <Image src={logo2} class="h-50 w-20" alt="PortISTAD Logo" />
                        <span class=" text-blue-800 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PortISTAD</span>
                    </a>
                    <div className="flex gap-10">
                        <div class="flex md:order-2">
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                <img src={user.avatar} className="h-20 w-20 p-4 rounded-[50%]" alt="Placeholder" /><span > {user.name} </span>
                                <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>

                            <div id="dropdownNavbar" class=" z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-2 text-sm text-gray-700  bg-blue-800  dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href={`/profile/${user.id}`} class="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Profile</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Settings</a>
                                    </li>
                                    <li>
                                        <a href="/log-in" class="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Log - in</a>
                                    </li>
                                    <li>
                                        <button onClick={resetUser} class="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Log - out</button>
                                    </li>
                                </ul>
                            </div>
                            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="/" class="block py-2 pl-3 pr-4  text-blue-800 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="/listProducts" class="block py-2 pl-3 pr-4  text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Templates</a>
                                </li>
                                <li>
                                    <a href="#aboutUs" class="block py-2 pl-3 pr-4  text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        )
    } else {
        return (
            <nav class="bg-white dark:bg-gray-900 fixed px-5 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div class="flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" class="flex items-center">
                        <Image src={logo2} class="h-50 w-20" alt="PortISTAD Logo" />
                        <span class=" text-blue-800 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PortISTAD</span>
                    </a>
                    <div className="flex gap-10">
                        <div class="flex md:order-2">
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                <img src={user.avatar} className="h-20 w-20 p-4 rounded-[50%]" alt="Placeholder" /><span > {user.name} </span>
                                <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>

                            <div id="dropdownNavbar" class=" z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-2 text-sm text-gray-700  bg-blue-800  dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href={`/profile/${user.id}`} class="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Profile</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Settings</a>
                                    </li>
                                    <li>
                                        <a href='/dashboard' class="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="/log-in" class="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Log - in</a>
                                    </li>
                                    <li>
                                        <button onClick={resetUser} class="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Log - out</button>
                                    </li>
                                </ul>
                            </div>
                            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="/" class="block py-2 pl-3 pr-4  text-blue-800 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="/listProducts" class="block py-2 pl-3 pr-4  text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Templates</a>
                                </li>
                                <li>
                                    <a href="#aboutUs" class="block py-2 pl-3 pr-4  text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        )
    }
}
