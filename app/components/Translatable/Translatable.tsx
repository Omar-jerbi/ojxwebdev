"use client"

import React from 'react'
import { getTranslation } from './getTranslation'


interface props {
    id: string
}

function Translatable({ id }: props) {

    return (
        <span className="translatable">
            {
                getTranslation(id)
            }
        </span>
    )
}

export default Translatable
