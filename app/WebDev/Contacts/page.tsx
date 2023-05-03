import { Formmail } from './formmail';
import Paragraph from "@/app/components/Paragraph/Paragraph";
import './Contacts.scss'
import Translatable from '@/app/components/Translatable/Translatable';



export const metadata = {
    title: 'OJXwebdev | Informati sui costi di sviluppo del tuo sito web',
    description: 'Contatti per informazioni sui costi di sviluppo del tuo sito web Wordpress o Custom',
    keywords: [
        "preventivo sito internet",
        "preventivo sito web",
        "wordpress"
    ],
}


export default function () {
    return (
        <div className="contacts center" style={{ paddingTop: "50px" }}>

            <Paragraph
                text={
                    <span>
                        <Translatable id='c.1'/>: <a href="mailto:info@ojxwebdev.com">info@ojxwebdev.com</a>
                    </span>
                }
            />
            <Paragraph
                text={
                    <span>
                        <Translatable id='c.2'/>: <a href="https://ojxacademy.com" target='_blank'>ojxacademy.com</a>
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