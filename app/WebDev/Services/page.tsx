import LongSection from '@/app/components/LongSection/LongSection';
import './Services.scss'
import SectionHome from '@/app/components/SectionHome/SectionHome';
import Link from 'next/link';



export default function () {
    return (
        <div className="services">
            <LongSection imgsrc='/services.jpg' text={
                <span className='tit'>
                    "Le tue idee, il tuo sito"
                    questo è il nostro approccio! Realizziamo siti professionali che ricalcano pienamente
                    l'immagine dei nostri client usando le ultime tecnologie
                    disponibili sul mercato. A differenza dai tool "fai da te" per lo sviluppo di una
                    applicazione web, affidandoti ad OJX avrai il pieno controllo sul
                    risultato finale del tuo progetto.
                </span>
            } />

            <SectionHome
                reverse
                text={<span>
                    Dalla creazione di siti statici allo sviluppo di
                    eCommerce, puoi contare sull'esperienza di un team giovane, serio e preparato.
                </span>}
                imgsrc='/serviceshome.jpg' />

            <SectionHome
                text={<span>
                    Pensiamo a tutto noi. Non ti
                    dovrai preoccupare di acquistare domini, allestire mail box o gestire l'hosting delle tue pagine.
                    Il sito che realizzeremo per te sarà completo di tutto il necessario per essere acceduto dai pricipali browser e raggiunto dai motori di ricerca
                </span>}
                imgsrc='/services2.jpg' />

            <SectionHome
                reverse
                text={<span>
                    Vuoi imparare il mestiere, o "l'arte", dello sviluppo web? Dai un'occhiata alla nostra web academy dedicata!
                    <br />
                    <Link style={{color:"var(--grey)"}} href={'/'}>Vai a OJX academy...</Link>
                </span>}
                imgsrc='/services3.jpg' />

        </div>
    );
}