'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage';

export default function CVList() {
    const getuser = secureLocalStorage.getItem("user")
    const profile = JSON.parse(getuser)

    return (
        <div className='w-[340px]'>
            <img src={profile ? `${profile.avatar}` : `https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg`} className='w-[100%]' />
            <p className='text-center mt-5'>{profile ? `${profile.name}` : `name`}</p>
        </div>
    )
}
