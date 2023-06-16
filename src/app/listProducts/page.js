'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage';

export async function fetchGatgory() {
    const req = await fetch("https://api.escuelajs.co/api/v1/products?limit=10&offset=1")
    const res = await req.json();
    return res;
}

export default function CVList() {
    const [gateGory, setGate] = useState([])
    useEffect(() => {
        fetchGatgory().then(res => setGate(res));
    }, [])

    return (
        <>
            {
                gateGory.map(e => (
                    <div className='w-[340px]'>
                        <img src={e ? `${e.images[0]}` : `https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg`} className='w-[100%]' />
                        <p className='text-center mt-5'>{e ? `${e.title}` : `name`}</p>
                    </div>
                ))
            }
        </>
    )
}
