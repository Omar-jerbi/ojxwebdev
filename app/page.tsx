import Link from 'next/link'
import LongSection from './components/LongSection/LongSection';
import SectionHome from './components/SectionHome/SectionHome';
import './WebDev.scss'
import './WebDev/About/About.scss'



export default function () {
    return (
        <div className="home">
            <div className="hero relative flex flex-col justify-center">
                <div className="text tracking-[0.2rem] ml-48 max-sm:ml-2 max-sm:tracking-wide">
                    <h1 className='mb-9 text-8xl font-normal w-fit max-sm:text-3xl max-sm:mb-3'>Sviluppiamo il<span className='font-semibold'> tuo </span>sito web</h1>
                    <div className="w-max text-end">
                        <h2 className='mb-7 text-4xl font-normal  max-sm:text-xl max-sm:mb-2'>Solo le migliori tecnologie</h2>
                        <h2 className='text-4xl font-normal  max-sm:text-lg'>...per i migliori risultati</h2>
                    </div>
                </div>


                <div className="bttts ml-48 flex gap-10 absolute bottom-24 max-sm:ml-0 flex-wrap max-sm:bottom-8 max-sm:w-full pr-2 justify-end">
                    <div>
                        <Link className='text-lg font-semibold py-4 px-8 bg-[var(--grey)] rounded-lg text-white' href={"/WebDev/Contacts"}>
                            Vai ai contatti
                        </Link>
                    </div>

                    <div>
                        <Link className='text-lg font-semibold border border-[var(--grey)] py-4 px-2 rounded-lg text-[var(--grey)]' href={'https://ojxacademy.com'} target="_blank">
                            Visita OJX Academy
                        </Link>
                    </div>
                </div>

                <div className="bga absolute h-full w-4/6 z-0 right-0 max-sm:w-full">
                    <div className="max-sm:hidden">
                        <div className="absolute bg-[var(--bg)] h-48 w-48 z-0 left-0"></div>
                        <div className="absolute bg-[var(--bg)] h-48 w-48 z-0 left-96">
                            <div className="absolute bg-[var(--bg)] h-48 w-48 z-0 left-96"></div>
                        </div>
                        <div className="absolute bg-[var(--bg)] h-48 w-48 z-0 left-48 top-48">
                            <div className="absolute bg-[var(--bg)] h-48 w-48 z-0 left-96"></div>
                        </div>
                        <div className="absolute bg-[var(--bg)] h-48 w-48 z-0 left-0 top-96">
                            <div className="absolute bg-[var(--bg)] h-48 w-48 z-0 left-96"></div>
                        </div>
                        <div className="absolute bg-[var(--bg)] h-48 w-48 z-0 left-[580px] top-[580px]"></div>
                    </div>
                </div>
            </div>


            <div className="center">
                <div className="mt-56"></div>
                <SectionHome imgsrc='/abouthome.jpg' text={
                    <span id='sizereact'>Utilizzando le tecnologie più avanzate sul mercato, il tuo sito verrà sviluppato seguendo le TUE idee.</span>
                }
                />

                <div className="about">
                    <div className="top">
                        <div className="img">
                            <img src="/banner.webp" alt="" />
                        </div>

                        <div className="profile">
                            <div className="wrapper">
                                <div className="text">
                                    <article style={{ all: 'unset' }}>
                                        <span className='tit'>Sono Omar, dottore in informatica laureato presso l'università di Genova e founder di OJXwebdev e OJXacademy.</span>
                                        <br />
                                        <span className='tit'>
                                            Con questi miei due progetti miro ad indirizzare le mie capacità informatiche nello sviluppo e la gestione di siti web per privati e aziende.
                                            <br />
                                            Partendo dal design dell'interfaccia della pagina e proseguendo con il suo sviluppo e la successiva messa in produzione, la qualità del tuo sito realizzato con OJX non avrà eguali!
                                        </span>
                                    </article>
                                </div>

                                <div className="imgprofile">
                                    <img src="/me.jpeg" alt="Omar J profile picture" title='Omar J profile picture' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <LongSection text={<span className='tit'>
                    Tutti i siti che vuoi! Intuitivi per i tuoi clienti e di facile manutenzione per gli upgrade futuri
                </span>}
                >
                    <div className="servs">
                        <div className="icon" title='eCommerce'>
                            <label>eCommerce</label>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg>
                        </div>
                        <div className="icon" title='Blog'>
                            <label>Blogs</label>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 136c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm0 120a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                        </div>
                        <div className="icon" title='Multilingua'>
                            <label>Siti multilingua</label>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z" /></svg>
                        </div>
                        <div className="icon" title='Portfolio'>
                            <label>Portfolio personali</label>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z" /></svg>
                        </div>
                        <div className="icon" title='Per eventi'>
                            <label>Siti per eventi</label>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64H576V256H384V224H320v48c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H243.1 177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z" /></svg>
                        </div>
                        <div className="icon" title='Molti altri'>
                            <label>Molti altri</label>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>
                        </div>
                    </div>
                </LongSection>

                <SectionHome reverse={true} imgsrc='/methshome.jpg'
                    text={<span id='sizereact'>
                        Utilizziamo un approccio user-friendly per la progettazione
                         dell'interfaccia desiderata. 
                         I tuoi feedback guideranno l'intera fase di sviluppo così da consegnarti
                          un prodotto <b>completo che rispecchi pienamente le tue idee e che offra delle performace senza eguali.</b>
                    </span>
                    }
                />





            </div>
        </div >
    );
}