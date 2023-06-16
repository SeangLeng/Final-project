"use client"
import Script from 'next/script'
import thumbnail from "@/app/images/teamShowcase.png"
import NavbarDashboard from '@/components/navbarDash'
import SideBar from '@/components/sideBar'
import DashboardFooter from '@/components/dashboardFooter'

export const metadata = {
    title: 'PortISTAD',
    thumbnail: { thumbnail },
    description: 'This is the kind of project, which you can generate your cv and portfoio. Just try us to see what you can do.',
}


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <NavbarDashboard />
                <SideBar />
                <div class="p-4 sm:ml-64">
                    <div class="p-4 dark:border-gray-700 mt-24">
                        {children}
                    </div>
                </div>
                <DashboardFooter />
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
                <Script src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></Script>
            </body>
        </html>
    )
}