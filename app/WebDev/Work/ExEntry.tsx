import Image from "next/image";
import React from "react";

interface props {
    img1: string,
    img2: string,
    tit: string,
    link: string,
}

export function ExEntry({ img1, img2, link, tit }: props) {
    return (
        <div className="max-sm:col-span-4 flex flex-col gap-4 p-1 border border-[var(--font)] rounded-lg">
            <Image loading="eager" className='rounded-md aspect-square w-64 max-sm:w-full object-cover object-left ' src={img1} alt='i1' width={700} height={700} />
            <Image className='rounded-md w-64 h-20 max-sm:w-full object-cover object-left ' src={img2} alt='i1' width={700} height={700} />
            
            <a className="text-end underline underline-offset-4" href={link} target="_blank" rel="noopener noreferrer">
                {tit}
            </a>
        </div>
    );
}
