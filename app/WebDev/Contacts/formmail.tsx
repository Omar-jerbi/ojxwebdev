"use client"

import Translatable from "@/app/components/Translatable/Translatable"
import { useState } from "react"
import swal from "sweetalert"

export function Formmail() {

    const [mail, smail] = useState('')
    const [msg, smsg] = useState('')
    const [l, sl] = useState(false)


    const send = async () => {
        if (mail != '' && msg != '') {
            sl(true)

            await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    user_id: process.env.NEXT_PUBLIC_EMAILJS_USER,
                    service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
                    template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
                    template_params: {
                        'site': 'OJXwebdev',
                        'subj': 'msg da home page',
                        'client_mail': mail,
                        'text': msg
                    }
                })
            })
                .then(res => {
                    sl(false)
                    swal("Messaggio inviato con successo. Ti invieremo un e-mail di risposta prima possibile!")
                })
        }
    }

    return (
        <div className="formmail">
            <div className="tit">
                <Translatable id="c.3" />:
            </div>
            <div className="form">
                <input type="text" placeholder="Email..." onChange={(e) => smail(e.target.value)} />
                <textarea placeholder="Text..." onChange={(e) => smsg(e.target.value)} />
            </div>
            <div className="btt">
                {l ?
                    "..."
                    :
                    <button onClick={() => send()}><Translatable id="send" /></button>
                }
            </div>
        </div>
    );
}
