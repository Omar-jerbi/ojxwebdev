"use client"

import Translatable from "@/app/components/Translatable/Translatable";
import Image from "next/image";
import React, { useState } from "react";

interface props {
    img1: string,
    img2?: string,
    tit: string,
    link?: string,
    enlarge?: boolean
}

export function ExEntry({ img1, img2, link, tit, enlarge }: props) {

    const [si, ssi] = useState(false)

    return (
        <>
            <div className="col-span-4 xl:col-span-1 md:col-span-2 flex flex-col gap-4 p-1 border border-[var(--font)] rounded-lg">
                <Image onClick={() => ssi(true)} loading="eager" className='rounded-md aspect-square w-64 max-sm:w-full object-cover object-left ' src={img1} alt='i1' width={700} height={700} />

                {img2 &&
                    <Image className='rounded-md w-64 h-20 max-sm:w-full object-cover object-left ' src={img2} alt='i1' width={700} height={700} />
                }

                {link ?
                    <a className="text-end underline underline-offset-4" href={link} target="_blank" rel="noopener noreferrer">
                        {tit}
                    </a>
                    :
                    <div className="">
                        {tit}
                    </div>
                }
            </div>

            {(enlarge && si) &&
                <div onClick={()=>ssi(false)} className="bimg fixed h-screen w-screen bg-black/90 top-0 left-0 z-[999] flex justify-center items-center">
                    <img src={img1} alt={img1} className="max-sm:hidden h-[80vh]" />
                    <div className="text-white sm:hidden"><Translatable id="alert"/></div>
                </div>
            }

        </>
    );
}
