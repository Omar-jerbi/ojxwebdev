"use client"

import Link from 'next/link'
import './TopNavbar.scss'
import { useEffect, useState } from 'react'

const darkPalette = {
    font: "#EBEBEB",
    bg: "#001011",
    red: "#f698a8",
    grey: "#548687",
    bgtrans: "#001011f1"

}

const lightPalette = {
    font: "#001011",
    bg: "#EBEBEB",
    red: "#bb2e2e",
    grey: "#6B818C",
    bgtrans: "#EBEBEBf1"
}

export default function TopNavbar() {
    const [palette, setPalette] = useState(localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")!) : lightPalette)

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(palette))

        document.documentElement.style.setProperty('--font', palette.font);
        document.documentElement.style.setProperty('--bg', palette.bg);
        document.documentElement.style.setProperty('--red', palette.red);
        document.documentElement.style.setProperty('--grey', palette.grey);
        document.documentElement.style.setProperty('--bgtrans', palette.bgtrans);
    }, [palette])

    return (
        <nav className='topnavbar'>
            <div className="left">
                <Link href={"/WebDev"} onClick={() => {
                    document.querySelectorAll('.link').forEach(oldlink => {
                        oldlink.classList.remove('selected')
                    })

                    document.querySelector('.link')?.classList.add('selected')
                }}>
                    {/* OJXwebdev.com */}
                    <svg height={"53px"} width={"191px"}>
                        <g data-v-70b83f88="" fill="#333" className="iconlettersvg-g iconlettersvg">
                            <g>
                                <g className="tp-name" transform="matrix(1,0,0,1,0,0)" opacity="1">
                                    <g transform="scale(1)">
                                        <g transform="translate(0, 0)" id='first'>
                                            <g className="name-imagesvg">
                                                <g>
                                                    <rect fill="#333" fill-opacity="0" stroke-width="2" x="0" y="0" width="49.83326190573111" height="50" className="image-rect"></rect>
                                                    <svg x="0" y="0" width="49.83326190573111" height="50" className="image-svg-svg primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265.99 266.89">
                                                            <g fill="#26125b">
                                                                <path d="M199.62 0H65.46A66.37 66.37 0 0 0 0 55.47c.73-.8 1.48-1.59 2.25-2.38a100 100 0 0 1 33.21-23q24-10.07 55-10 28.06 0 50.74 8.69A110.07 110.07 0 0 1 180.82 55a111.91 111.91 0 0 1 25.5 41.68q8.48 24.18 8.45 54.9 0 30.45-8.38 54.5a111.78 111.78 0 0 1-25.31 41.48A108.89 108.89 0 0 1 156 266.89h43.65A66.37 66.37 0 0 0 266 200.52V66.37A66.37 66.37 0 0 0 199.62 0z"></path>
                                                                <path d="M157.48 150.35q0-21.09-4.62-36.61c-3.06-10.34-7.62-18.81-13.63-25.51a58.5 58.5 0 0 0-21.09-15.14A69.68 69.68 0 0 0 90.94 68a69.45 69.45 0 0 0-27.27 5.12 59.58 59.58 0 0 0-21.29 15.37c-6.1 6.78-10.71 15.33-13.82 25.74s-4.68 22.68-4.68 36.8q0 20.83 4.8 36.4c3.19 10.38 7.93 19 14.21 26a62.29 62.29 0 0 0 21.44 15.73 65.62 65.62 0 0 0 26.61 5.24 65.58 65.58 0 0 0 26.53-5.2 61.15 61.15 0 0 0 21.25-15.6c6.19-6.9 10.86-15.56 14-26.08s4.76-22.93 4.76-37.17z"></path>
                                                            </g>
                                                        </svg>
                                                    </svg>

                                                </g>
                                            </g>
                                        </g>
                                        <g transform="translate(49.83326190573111, 0)" id='second'>
                                            <g className="name-imagesvg">
                                                <g>
                                                    <rect fill="#333" fill-opacity="0" stroke-width="2" x="0" y="0" width="50.01686145487425" height="50" className="image-rect"></rect>
                                                    <svg x="0" y="0" width="50.01686145487425" height="50" className="image-svg-svg primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266.9 266.89">
                                                            <path d="M200.52 0H66.37A66.37 66.37 0 0 0 0 66.37V193l42.22-4.85.11 2.69a112.53 112.53 0 0 0 2 18 35.9 35.9 0 0 0 4 11.24 24.79 24.79 0 0 0 9.39 9.22 27.86 27.86 0 0 0 13.42 3.08 36.11 36.11 0 0 0 13.51-2.24 18.67 18.67 0 0 0 8.4-6.39 21.86 21.86 0 0 0 2.73-5.49 51.13 51.13 0 0 0 2.08-8.32 148.42 148.42 0 0 0 1.72-24.8V89.69H74.19v-47h109v47H155v92.21c0 20.88-1.81 37-5.59 48.62a70.19 70.19 0 0 1-27.56 36.35h78.73a66.37 66.37 0 0 0 66.38-66.37V66.37A66.38 66.38 0 0 0 200.52 0z" fill="#26125b"></path>
                                                        </svg>
                                                    </svg>

                                                </g>
                                            </g>
                                        </g>
                                        <g transform="translate(99.85012336060537, 0)" id='third'>
                                            <g className="name-imagesvg">
                                                <g>
                                                    <rect fill="#333" fill-opacity="0" stroke-width="2" x="0" y="0" width="50" height="50" className="image-rect"></rect>
                                                    <svg x="0" y="0" width="50" height="50" className="image-svg-svg primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266.89 266.89">
                                                            <path d="M200.52 0H66.37A66.38 66.38 0 0 0 2.2 49.39l51.12 72.36L103.64 49l.75-1.08H173L88.26 164.79l76.8 102.1h35.46a66.36 66.36 0 0 0 66.37-66.37V66.37A66.36 66.36 0 0 0 200.52 0zM16.42 163.04L0 140.64v44.56l16.42-22.16zm35.83 45.7L22.19 250a66.11 66.11 0 0 0 44.18 16.85h28.07z" fill="#bb2e2e"></path>
                                                        </svg>
                                                    </svg>

                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>

                            <g data-gra="path-slogan" fill-rule="" className="tp-slogan" fill="#333333" transform="matrix(1,0,0,1,134.71506309509277,23)" opacity="1">
                                <g mask="url(#13bf197d-c38c-4b13-afcd-65e0d7d680a5)">
                                    <g>
                                        <rect data-gra="graph-name-bg" stroke-width="2" className="i-icon-bg" x="0" y="0" width="52.42000198364258" height="11.869999885559082" fill-opacity="1"></rect>
                                    </g>
                                    <g transform="translate(5,2)">
                                        <g transform="scale(1, 1)" fill="#feffff">
                                            <g transform="scale(1)">
                                                <path d="M1.94 0L0.28-7.87L1.31-7.87L2.14-3.59Q2.24-2.94 2.36-2.32Q2.48-1.69 2.59-1.04L2.59-1.04L2.64-1.04Q2.77-1.69 2.92-2.32Q3.06-2.95 3.19-3.59L3.19-3.59L4.28-7.87L5.20-7.87L6.29-3.59Q6.43-2.96 6.58-2.33Q6.72-1.69 6.86-1.04L6.86-1.04L6.91-1.04Q7.02-1.69 7.13-2.32Q7.24-2.95 7.36-3.59L7.36-3.59L8.18-7.87L9.14-7.87L7.51 0L6.31 0L5.12-4.74Q5.02-5.20 4.93-5.63Q4.84-6.07 4.74-6.53L4.74-6.53L4.69-6.53Q4.60-6.07 4.49-5.63Q4.39-5.20 4.30-4.74L4.30-4.74L3.13 0L1.94 0ZM10.51 0L10.51-7.87L15.05-7.87L15.05-7.03L11.51-7.03L11.51-4.56L14.50-4.56L14.50-3.71L11.51-3.71L11.51-0.85L15.17-0.85L15.17 0L10.51 0ZM16.84 0L16.84-7.87L19.18-7.87Q19.78-7.87 20.27-7.76Q20.77-7.66 21.13-7.43Q21.48-7.20 21.68-6.83Q21.88-6.47 21.88-5.95L21.88-5.95Q21.88-5.36 21.54-4.89Q21.20-4.42 20.51-4.24L20.51-4.24L20.51-4.19Q21.37-4.06 21.85-3.59Q22.33-3.12 22.33-2.30L22.33-2.30Q22.33-1.73 22.12-1.30Q21.90-0.86 21.50-0.58Q21.11-0.29 20.56-0.14Q20.00 0 19.34 0L19.34 0L16.84 0ZM17.83-4.51L19.00-4.51Q20.02-4.51 20.45-4.86Q20.89-5.21 20.89-5.87L20.89-5.87Q20.89-6.52 20.43-6.80Q19.97-7.08 19.04-7.08L19.04-7.08L17.83-7.08L17.83-4.51ZM17.83-0.79L19.20-0.79Q20.22-0.79 20.78-1.17Q21.35-1.55 21.35-2.35L21.35-2.35Q21.35-3.08 20.80-3.43Q20.24-3.77 19.20-3.77L19.20-3.77L17.83-3.77L17.83-0.79ZM23.89 0L23.89-7.87L25.86-7.87Q27.68-7.87 28.63-6.86Q29.58-5.86 29.58-3.97L29.58-3.97Q29.58-3.04 29.34-2.30Q29.10-1.56 28.63-1.05Q28.16-0.54 27.48-0.27Q26.80 0 25.91 0L25.91 0L23.89 0ZM24.89-0.82L25.79-0.82Q27.17-0.82 27.86-1.64Q28.55-2.47 28.55-3.97L28.55-3.97Q28.55-5.47 27.86-6.26Q27.17-7.06 25.79-7.06L25.79-7.06L24.89-7.06L24.89-0.82ZM31.27 0L31.27-7.87L35.81-7.87L35.81-7.03L32.27-7.03L32.27-4.56L35.26-4.56L35.26-3.71L32.27-3.71L32.27-0.85L35.93-0.85L35.93 0L31.27 0ZM39.04 0L36.52-7.87L37.58-7.87L38.84-3.62Q39.06-2.92 39.22-2.32Q39.38-1.72 39.61-1.02L39.61-1.02L39.66-1.02Q39.88-1.72 40.04-2.32Q40.21-2.92 40.42-3.62L40.42-3.62L41.68-7.87L42.70-7.87L40.20 0L39.04 0Z" transform="translate(-0.276, 7.872)"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className="right" onClick={() => {
                if (palette == lightPalette)
                    setPalette(darkPalette)
                else
                    setPalette(lightPalette)
            }}>

                {
                    palette == lightPalette ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" /></svg>
                }
            </div>

            <div className="iconmenu">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 6C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4C18.4477 4 18 4.44772 18 5C18 5.55228 18.4477 6 19 6Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 20C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18C18.4477 18 18 18.4477 18 19C18 19.5523 18.4477 20 19 20Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 6C5.55228 6 6 5.55228 6 5C6 4.44772 5.55228 4 5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

        </nav>
    )
}
