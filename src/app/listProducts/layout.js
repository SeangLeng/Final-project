
import Navbar from '@/components/navbar'
import '/src/app/globals.css'
import Script from 'next/script'
import ProfileAside from '@/components/profileAside'

export default function layout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <ProfileAside />
                <div class="p-10 sm:ml-64 flex flex-wrap mt-24">
                    {children}
                </div>
                <Script src="https://kit.fontawesome.com/dfbc5788ab.js" crossorigin="anonymous"></Script>
            </body>
        </html>
    )
}
