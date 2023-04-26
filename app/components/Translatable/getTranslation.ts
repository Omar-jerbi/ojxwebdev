"use client"

import { useLang } from "@/app/contexts/LangContext"

export const getTranslation = (id:string) => {
    const langContext = useLang()
        
    return (langContext.l.find(v => v.k === id)?.v)
}