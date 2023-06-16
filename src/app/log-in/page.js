'use client'
import React, { useEffect, useState } from 'react'
import logoProject from "../images/logo-project.jpg"
import Image from 'next/image'
import "./loginStyle.css"

export const getUserToCheck = async () => {
    const request = await fetch("https://api.escuelajs.co/api/v1/users?limit=5")
    const response = await request.json();
    return response;

}

export default function LogInPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkUser, getUser] = useState([]);

    useEffect(() => {
        getUserToCheck().then((user) => getUser(user))
    }, [])

    let setUser;
    const handleSubmit = (event) => {
        event.preventDefault();
        // using api to check the user 
        checkUser.map((user) => {
            if (user.name === username && user.password === password) {
                setUser = localStorage.setItem('user', JSON.stringify(user))
                window.history.back();
                document.getElementById('tryAgain').innerHTML = " "
            }
        })
    }
    useEffect(() => {
        setUser;
    }, [])
    return (
        <div className='logIn p-20'>
            <form onSubmit={handleSubmit}>
                <Image src={logoProject} alt="logo-image" />
                <p className='capitalize text-4xl font-semibold text-center mt-20'>log me in</p>
                <p id='tryAgain' className='mt-10'></p>
                <div className='input mt-10'>
                    <div class="mb-6">
                        <input type="text" id="email" value={username} onChange={(e) => setUsername(e.target.value)} className="p-4 w-full rounded-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
                    </div>
                    <div class="mb-6">
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-4 w-full rounded-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password' required />
                        <div className='w-full flex justify-end items-end mt-3'>
                            <a href='#'>Forget password</a>
                        </div>
                    </div>

                </div>
                <div className='links-part grid w-full'>
                    <a href='#' className='text-center mb-5 mt-10 text-xl'>
                        I am <span className='underline font-semibold'>ISTAD Student</span>
                    </a>
                    <a href='#' className='text-center mb-5 text-xl'>
                        Has an account yet ? <span className='underline font-semibold'>sign - in</span>
                    </a>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-14 py-3 mt-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}
