"use client"

import Link from 'next/link'
import './SideNavbar.scss'
import { useEffect } from 'react'
import Translatable from '../Translatable/Translatable'

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


        //preserve selected on refresh
        document.querySelectorAll('.link').forEach(beforelink => {
            const x = beforelink as Element //fix bug classlist
            x.classList.remove("selected")
        })
        if (window.location.pathname.includes("Services")) {
            document.querySelector("#Services")?.classList.add("selected")
        } else
            if (window.location.pathname.includes("Work")) {
                document.querySelector("#Work")?.classList.add("selected")
            } else
                if (window.location.pathname.includes("Contacts")) {
                    document.querySelector("#Contacts")?.classList.add("selected")
                } else
                    document.querySelector("#Home")?.classList.add("selected")
    }, [])

    return (
        <nav className='sidenavbar hover:w-52 max-sm:text-xs max-sm:hover:w-32'>
            <div id='Home' className="link selected px-7 max-sm:px-1">
                <Link href={"/"}>Home</Link>
                <hr />
            </div>
            <div id='Services' className="link px-7 max-sm:px-1">
                <Link href={"/WebDev/Services"}><Translatable id='servs' /></Link>
                <hr />
            </div>
            <div id='Work' className="link px-7 max-sm:px-1">
                <Link href={"/WebDev/Work"}><Translatable id='meths' /></Link>
                <hr />
            </div>
            <div id='Contacts' className="link px-7 max-sm:px-1">
                <Link href={"/WebDev/Contacts"}><Translatable id='contacts' /></Link>
                <hr />
            </div>
            <div className="link px-7 max-sm:px-1">
                <Link href={'https://ojxacademy.com'} target="_blank">OJXacademy</Link>
                <hr />
            </div>

            <div className="filler w-52 max-sm:w-32"></div>
        </nav>
    )
}
