"use client"

import Link from 'next/link'
import './SideNavbar.scss'
import { useEffect } from 'react'
import { useLang } from '@/app/contexts/LangContext'
import Translatable from '../Translatable/Translatable'

export default function SideNavbar() {

    const { sl } = useLang()

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
        <nav className='sidenavbar'>
            <div className="flex flex-col justify-center items-center gap-5">
                <button onClick={() => sl("en")}>EN</button>                
                <button onClick={() => sl("it")}>IT</button>
            </div>
            <div id='Home' className="link selected">
                <Link href={"/"}>Home</Link>
                <hr />
            </div>
            <div id='Services' className="link">
                <Link href={"/WebDev/Services"}><Translatable id='servs' /></Link>
                <hr />
            </div>
            <div id='Work' className="link">
                <Link href={"/WebDev/Work"}><Translatable id='meths' /></Link>
                <hr />
            </div>
            <div id='Contacts' className="link">
                <Link href={"/WebDev/Contacts"}><Translatable id='contacts' /></Link>
                <hr />
            </div>
            <div className="link">
                {/* link esterno */}
                <Link href={'https://ojxacademy.com'} target="_blank">OJXacademy</Link>
                <hr />
            </div>

            <div className="filler"></div>
        </nav>
    )
}
