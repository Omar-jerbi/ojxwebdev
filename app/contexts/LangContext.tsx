"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { dics } from "../locales/dics"


interface entry {
    k: string,
    v: string
}

interface lang {
    l: entry[]
    sl: (nl: string) => void
}

const LangContext = createContext<lang>({ l: dics.it, sl: () => { } });

export const LangContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [l, setl] = useState<entry[]>(dics.it)

    useEffect(() => {
        if (localStorage.getItem("lang"))
            setl(localStorage.getItem("lang") == "it" ? dics.it : dics.en)
    }, [])


    const sl = (nl: string) => {
        setl(nl == "it" ? dics.it : dics.en)
        localStorage.setItem("lang", nl)
    }


    return (
        <LangContext.Provider value={{ l, sl }} >
            {children}
        </LangContext.Provider >
    )
}


export const useLang = () => useContext(LangContext)