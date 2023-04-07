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
                        Per informazioni riguardanti i corsi OJX: <a href="mailto:info@ojxacademy.com">info@ojxacademy.com</a>
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
                    <div className="formmail">
                        <div className="tit">
                            Oppure scrivi direttamente qui il tuo messaggio:
                        </div>
                        <div className="form">
                            <input type="text" placeholder="La tua email..." />
                            <textarea placeholder="Il tuo messaggio..."></textarea>
                        </div>
                        <div className="btt">
                            <button>Invia</button>
                        </div>
                    </div>
                }
            />

        </div>
    );
}