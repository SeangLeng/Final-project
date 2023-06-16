'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function page() {
    const profileFetch = JSON.parse(localStorage.getItem("user"));
    const [profile, getProfile] = useState([])
    useEffect(() => {
        getProfile(profileFetch);
    }, [profileFetch])
    return (
        <div className='w-[340px]'>
            <img src={profile ? `${profile.avatar}` : `https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg`} className='w-[100%]' />
            <p className='text-center mt-5'>{profile ? `${profile.name}` : `name`}</p>
        </div>
    )
}
