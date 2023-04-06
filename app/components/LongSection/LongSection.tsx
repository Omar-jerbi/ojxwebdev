import { ReactElement } from 'react'
import './LongSection.scss'

interface props {
    text?: string | ReactElement,
    tit?: string,
    imgsrc: string,
    children?: React.ReactNode
}

export default function LongSection(props: props) {
    return (
        <div className="longsection">
            <div className="bg">
                <img src={props.imgsrc} alt="" />
            </div>

            <div className="content">
                <div className="text">
                    <p>
                        {props.text}
                    </p>
                </div>
                {props.children &&
                    <div className='child'>
                        {props.children}
                    </div>
                }
            </div>
        </div>
    )
}
