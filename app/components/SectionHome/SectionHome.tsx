import './SectionHome.scss';

interface props {
    text: string,
    imgsrc: string,
    reverse?: boolean,
    huerotate?: string
}


export default function SectionHome(props: props) {
    return (
        <div className={"sectionhome" + (props.reverse ? " rev" : '')}>
            <div className="text">
                <p>
                    {props.text}
                </p>
            </div>
            <div className="img">
                <img src={props.imgsrc} alt="" style={{ filter: `hue-rotate(${props.huerotate})` }} />
            </div>
        </div>
    )
}
