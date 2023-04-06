import './Paragraph.scss'
import { ReactElement } from "react"

interface props {
    text: string | ReactElement
}

export default function Paragraph({ text }: props) {
    return (
        <div className="paragraph">
            <span className='tit'>
                {text}
            </span>
        </div>
    )
}
