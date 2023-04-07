"use client"

import Link from 'next/link'
import './SideNavbar.scss'
import { useEffect } from 'react'

export default function SideNavbar() {

    useEffect(() => {
        document.querySelectorAll('.link').forEach(e => {
            e.addEventListener('click', (l) => {
                document.querySelectorAll('.link').forEach(beforelink => {
                    const x = beforelink as Element //fix bug classlist
                    x.classList.remove("selected")
                })
                const x = l.currentTarget as Element //fix bug classlist
                x.classList.add("selected")
            })
        })
    }, [])

    return (
        <nav className='sidenavbar'>
            <div className="link selected">
                <Link href={"/WebDev"}>Home</Link>
                <hr />
            </div>
            <div className="link">
                {/* + academy*/}
                <Link href={"/WebDev/Services"}>Servizi</Link>
                <hr />
            </div>
            <div className="link">
                {/* + lavora con noi */}
                <Link href={"/WebDev/Work"}>Metodi di lavoro</Link>
                <hr />
            </div>
            <div className="link">
                {/* + form + mails(webdev+academy) + phone*/}
                <Link href={"/WebDev/Contacts"}>Contatti</Link>
                <hr />
            </div>
            <div className="link">
                {/* link esterno */}
                <Link href={"#"}>OJXacademy</Link>
                <hr />
            </div>

            <div className="filler"></div>
        </nav>
    )
}
