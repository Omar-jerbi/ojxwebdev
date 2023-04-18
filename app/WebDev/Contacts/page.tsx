import { Formmail } from './formmail';
import Paragraph from "@/app/components/Paragraph/Paragraph";
import './Contacts.scss'

export default function () {
    return (
        <div className="contacts center" style={{ paddingTop: "50px" }}>

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
                        Per informazioni sui corsi OJX: <a href="https://ojxacademy.com" target='_blank'>ojxacademy.com</a>
                    </span>
                }
            />

            <Paragraph
                text={
                    <span>
                        Chat <a href="https://discordapp.com/users/6823">Discord</a>
                    </span>
                }
            />

            <Paragraph
                text={
                    <span>
                        Chat <a href="https://t.me/OJXwebdev">Telegram</a>
                    </span>
                }
            />

            <Paragraph
                text={
                    <Formmail />
                }
            />

        </div>
    );
}