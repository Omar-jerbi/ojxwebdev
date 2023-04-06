import SectionHome from '@/app/components/SectionHome/SectionHome';
import './About.scss'

export default function () {
    return (
        <div className="about">
            <div className="top">
                <div className="img">
                    <img src="/about.jpg" alt="" />
                </div>

                <div className="profile">
                    <div className="wrapper">
                        <div className="text">
                            <span className='tit'> Sono Omar, dottore in informatica laureato presso l'università di Genova e founder di OJX.</span>
                            <br />
                            <span className='tit'>
                                Con OJX, miro a indirizzare le mie capacita informatiche nello sviluppo e la gestione di progetti per privati e aziende.
                                Oltre alla formazione universitaria, ho coltivato negli anni molte esperienze lavorative presso aziende del settore, cio mi ha permesso di sviluppare skills che ti garantiranno un prodotto di qualità superiore
                            </span>
                        </div>
                        <div className="imgprofile">
                            <img src="/me.jpeg" alt="me" />
                        </div>
                    </div>
                </div>
            </div>

            <SectionHome
                text='
                    Il team OJX si impegna a fornire un servizio professionale e adatto alle tue esigenze. 
                    Farai parte anche tu del team di lavoro in quanto, sopra tutto nelle prime fasi di realizzazione del progetto, le tue idee e i tuoi feedback
                    ci aiuteranno a dare vita al sito che desideri per la tua azienda o la tua persona.
                    '
                imgsrc='/about2.jpg'
            />

        </div>
    );
}
