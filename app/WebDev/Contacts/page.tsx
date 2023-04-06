import Paragraph from "@/app/components/Paragraph/Paragraph";
import './Contacts.scss'
import LinkButton from "@/app/components/LinkButton/LinkButton";


export default function () {
    return (
        <div className="contacts" style={{ paddingTop: "50px" }}>

            <Paragraph
                text={
                    <span>
                        Per informazioni e richieste di preventivi: <a href="mailto:info@ojxwebdev.com">info@ojxwebdev.com</a>
                    </span>
                }
            />
            <Paragraph
                text={
                    <span>
                        Per informazioni riguardanti i nostri corsi: <a href="mailto:info@ojxacademy.com">info@ojxacademy.com</a>
                    </span>
                }
            />

            <Paragraph
                text={
                    <span>
                        Chatta con noi su <a href="/">Discord</a>
                    </span>
                }
            />

            <Paragraph
                text={
                    <span>
                        Chatta con noi su <a href="/">Telegram</a>
                    </span>
                }
            />

            <Paragraph
                text={
                    <div className="formmail">
                        <div className="tit">
                            Scrivici un messaggio direttamente qui:
                        </div>
                        <div className="form">
                            <input type="text" placeholder="La tua email..."/>
                            <textarea placeholder="Il tuo messaggio..."></textarea>
                        </div>
                        <LinkButton width="100%">
                            <span>
                                Invia
                            </span>
                        </LinkButton>
                    </div>
                }
            />

        </div>
    );
}