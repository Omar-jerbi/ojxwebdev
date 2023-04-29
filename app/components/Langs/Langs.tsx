"use client"

import { useLang } from "@/app/contexts/LangContext"
import US from 'country-flag-icons/react/3x2/US'
import IT from 'country-flag-icons/react/3x2/IT'

export default function Langs() {

    const { sl } = useLang()


    return (
        <div className="fixed top-24 right-0">
            <div className="flex justify-center items-center gap-4 max-sm:flex-col">
                <div className='bg-[var(--bg)] p-2 rounded-2xl flex justify-center items-center cursor-pointer max-sm:text-sm' onClick={() => sl("en")}><US className="h-6 max-sm:h-4" /></div>
                <div className='bg-[var(--bg)] p-2 rounded-2xl flex justify-center items-center cursor-pointer max-sm:text-sm' onClick={() => sl("it")}><IT className="h-6 max-sm:h-4" /></div>
            </div>

        </div>
    )
}
