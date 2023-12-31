
import Navbar from '@/components/navbar'
import '@/app/listProducts/productsListStyle.css'
import Script from 'next/script'
import ProfileAside from '@/components/profileAside'
import { Suspense } from 'react'
import Loading from '../loading'

export default function layout({ children }) {
    return (
        <div>
            <Navbar />
            <ProfileAside />
            <div className="p-10 sm:ml-64 flex flex-wrap mt-24 justify-center gap-5 items-center">
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </div>
            <Script src="https://kit.fontawesome.com/dfbc5788ab.js" crossorigin="anonymous"></Script>
        </div>
    )
}
