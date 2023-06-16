'use client'
import '/src/app/globals.css'
import React from 'react'
import Script from 'next/script'

export default function layout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                <Script src="https://kit.fontawesome.com/dfbc5788ab.js" crossorigin="anonymous"></Script>
            </body>
        </html>
    )
}
