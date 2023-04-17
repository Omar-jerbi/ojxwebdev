import { ReactElement } from 'react';
import './SectionHome.scss';

interface props {
    text: string | ReactElement,
    imgsrc: string,
    reverse?: boolean,
    huerotate?: string
}


export default function SectionHome(props: props) {
    return (
        <div className={"sectionhome" + (props.reverse ? " rev" : '')}>
            <div className="text">
                <article>
                    {props.text}
                </article>
            </div>
            <div className="img">
                <img src={props.imgsrc} alt="" style={{ filter: `hue-rotate(${props.huerotate})` }} />
            </div>
        </div>
    )
}
