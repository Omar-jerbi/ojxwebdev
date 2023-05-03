import { ExEntry } from './ExEntry';
import Step from '@/app/components/Step/Step';
import './Work.scss'
import Translatable from '@/app/components/Translatable/Translatable';


export const metadata = {
    title: 'OJXwebdev | Design e sviluppo siti web professionali Wordpress e Custom',
    description: "Con OJXwebdev il tuo sito verrà sviluppato usando tecnologie avanzate che garamtiranno una resa ottimale di SEO e un'esperienza di utilizzo impeccabile",
    keywords: [
        "sito ecommerce",
        "wordpress italia",
        "sito web business",
        "design sito web",
        "design sito internet",
    ],
}

export default function () {
    return (
        <div className="work max-sm:mt-32">
            <div className="top">
                <div className="img flex justify-center items-center">
                    <div className="text container mx-auto">
                        <h1 className='text-8xl font-normal w-fit mb-7 max-sm:text-xl'><Translatable id='work.1' /></h1>
                        <h2 className='text-lg w-11/12 flex max-sm:text-sm h-fit'>
                            <hr className='bg-[var(--font)] w-1 h-auto mr-1' />
                            <div>
                                <Translatable id='work.2' />
                            </div>
                        </h2>
                    </div>
                </div>
            </div>



            <div className="center">


                <div>
                    <h2 className="text-6xl max-sm:text-3xl font-semibold opacity-40 my-36 max-sm:my-16">
                        <Translatable id='w6' />
                    </h2>

                    <article className='w-full md:w-2/3 2xl:w-1/2 mx-auto text-lg'>
                        <h3 className='text-2xl font-bold mb-8'>
                            <Translatable id='w7' />
                        </h3>
                        <p>
                            <Translatable id='w8' />
                            <br />
                            <Translatable id='w9' />
                            <br />
                            <Translatable id='w10' />
                            <br />
                            <Translatable id='w11' />
                            <br />
                            <Translatable id='w12' />
                            <br />
                            <Translatable id='w13' />
                        </p>
                        <br /><br />
                        <p>
                            <Translatable id='w14' />
                        </p>
                    </article>
                </div>


                <hr className='my-10 bg-[var(--font)] border-0' style={{ height: "1px" }} />


                <article className="steps">
                    <div className="w-full md:w-2/3 2xl:w-1/2 mx-auto mb-10  text-lg">
                        <h3 className='text-2xl font-bold mb-8 '>
                            <Translatable id='w15' />
                        </h3>
                        <p>
                            <Translatable id='w16' />
                            <br />
                            <Translatable id='w17' />
                            <br />
                            <Translatable id='w18' />
                            <br />
                            <Translatable id='w19' />
                            <br />
                            <Translatable id='w20' />
                            <br />
                            <Translatable id='w21' />
                            <br />
                            <Translatable id='w22' />
                        </p>
                        <br /><br />
                        <p>
                            <Translatable id='w23' />
                        </p>
                    </div>

                    <Step arrow tit={<Translatable id='work.3' />} svg={
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="M16,4c-4.963,0-9,4.038-9,9c0,3.186,1.781,5.278,3.212,6.959C11.172,21.085,12,22.059,12,23v5h3
	v1h2v-1h3v-5c0-0.941,0.828-1.915,1.788-3.041C23.219,18.278,25,16.186,25,13C25,8.038,20.963,4,16,4z M18,26h-4v-2h4V26z
    M20.265,18.662c-0.923,1.084-1.805,2.12-2.132,3.338h-4.266c-0.327-1.218-1.209-2.254-2.132-3.338C10.391,17.083,9,15.45,9,13
	c0-3.86,3.141-7,7-7s7,3.14,7,7C23,15.45,21.609,17.083,20.265,18.662z M16,7v2c-2.206,0-4,1.794-4,4h-2C10,9.691,12.691,7,16,7z"
                            />
                        </svg>
                    } />

                    <Step
                        tit={<span>Design UI</span>}
                        arrow
                        svg={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192h0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496V440.6c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1V496c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>
                        } />

                    <Step
                        tit={<Translatable id='work.4' />}
                        arrow
                        svg={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                        } />
                    <Step
                        tit={<Translatable id='work.5' />}
                        arrow
                        svg={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
                        } />
                    <Step
                        tit={"Testing"}
                        arrow
                        svg={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM32 448H320c70.7 0 128-57.3 128-128s-57.3-128-128-128V128c106 0 192 86 192 192c0 49.2-18.5 94-48.9 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm80-64H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
                        } />
                    <Step
                        tit={<Translatable id='work.6' />}
                        svg={
                            <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                                <g>
                                    <path d="M256,79.553c9.902,0,16.652-21.627,19.222-43.438C278.44,8.79,266.897,0,256,0
		c-10.914,0-22.441,8.79-19.24,36.115C239.332,57.926,246.065,79.553,256,79.553z"/>
                                    <path d="M256,432.439c-9.936,0-16.669,21.628-19.24,43.446C233.56,503.202,245.087,512,256,512
		c10.897,0,22.44-8.798,19.222-36.115C272.652,454.067,265.902,432.439,256,432.439z"/>
                                    <path d="M167.134,102.964c8.591-4.935,3.632-27.068-5.058-47.22c-10.88-25.268-25.26-27.101-34.714-21.661
		c-9.454,5.465-15.026,18.842,1.394,40.908C141.907,92.572,158.542,107.931,167.134,102.964z"/>
                                    <path d="M344.849,409.036c-8.574,4.926-3.632,27.06,5.042,47.228c10.897,25.26,25.277,27.092,34.73,21.644
		c9.438-5.448,15.044-18.842-1.392-40.9C370.093,419.428,353.441,404.077,344.849,409.036z"/>
                                    <path d="M74.967,128.762c-22.042-16.419-35.427-10.822-40.884-1.384c-5.456,9.453-3.615,23.825,21.645,34.722
		c20.168,8.683,42.293,13.617,47.236,5.059C107.923,158.559,92.548,141.898,74.967,128.762z"/>
                                    <path d="M456.239,349.908c-20.135-8.699-42.277-13.625-47.219-5.066c-4.96,8.6,10.415,25.26,27.997,38.395
		c22.058,16.42,35.426,10.83,40.867,1.385C483.357,375.176,481.516,360.797,456.239,349.908z"/>
                                    <path d="M79.545,255.992c0-9.902-21.645-16.644-43.438-19.223C8.79,233.56,0.016,245.103,0.016,255.992
		c0,10.921,8.774,22.448,36.091,19.248C57.9,272.677,79.545,265.918,79.545,255.992z"/>
                                    <path d="M475.876,236.76c-21.794,2.588-43.422,9.322-43.422,19.232c0,9.926,21.628,16.669,43.422,19.239
		c27.334,3.218,36.108-8.326,36.108-19.239C511.984,245.087,503.21,233.56,475.876,236.76z"/>
                                    <path d="M55.728,349.908c-25.26,10.889-27.101,25.268-21.645,34.714c5.474,9.445,18.842,15.035,40.884-1.385
		c17.581-13.135,32.939-29.796,27.98-38.395C98.021,336.283,75.896,341.209,55.728,349.908z"/>
                                    <path d="M456.239,162.1c25.277-10.897,27.118-25.268,21.645-34.722c-5.441-9.454-18.809-15.035-40.867,1.384
		c-17.582,13.136-32.956,29.796-27.997,38.396C413.962,175.716,436.104,170.783,456.239,162.1z"/>
                                    <path d="M128.755,437.008c-16.42,22.058-10.848,35.452-1.394,40.9c9.47,5.448,23.834,3.616,34.714-21.644
		c8.69-20.168,13.65-42.302,5.058-47.228C158.559,404.077,141.907,419.428,128.755,437.008z"/>
                                    <path d="M383.229,74.992c16.436-22.067,10.864-35.443,1.392-40.908c-9.453-5.44-23.833-3.608-34.73,21.661
		c-8.674,20.152-13.634,42.285-5.042,47.22C353.424,107.931,370.093,92.572,383.229,74.992z"/>
                                    <path d="M235.135,176.123c7.48-1.99,8.177-19.563,5.706-36.463c-3.068-21.156-13.5-25.451-21.677-23.229
		c-8.21,2.148-15.11,11.08-7.215,30.949C218.284,163.253,227.722,178.155,235.135,176.123z"/>
                                    <path d="M276.848,335.852c-7.414,2.007-8.16,19.638-5.705,36.514c3.084,21.155,13.517,25.442,21.71,23.219
		c8.193-2.197,15.092-11.096,7.198-30.94C293.732,348.772,284.295,333.87,276.848,335.852z"/>
                                    <path d="M153.815,154.139c-5.954,6.02-7.497,17.133,9.305,30.426c13.368,10.548,29.008,18.742,34.415,13.294
		c5.457-5.466-2.704-21.073-13.252-34.441C171.032,146.626,159.82,148.152,153.815,154.139z"/>
                                    <path d="M358.135,357.869c6.004-5.996,7.53-17.15-9.254-30.434c-13.402-10.548-28.976-18.709-34.432-13.277
		c-5.424,5.44,2.736,21.063,13.302,34.44C341.002,365.374,352.147,363.857,358.135,357.869z"/>
                                    <path d="M139.469,240.6c16.901,2.463,34.515,1.749,36.472-5.714c2.024-7.439-12.888-16.876-28.742-23.187
		c-19.853-7.894-28.727-0.987-30.95,7.198C114.043,227.058,118.322,237.507,139.469,240.6z"/>
                                    <path d="M372.515,271.416c-16.885-2.438-34.466-1.733-36.489,5.689c-1.99,7.448,12.904,16.859,28.76,23.187
		c19.869,7.911,28.776,0.987,30.966-7.19C397.974,284.908,393.694,274.485,372.515,271.416z"/>
                                    <path d="M147.38,300.068c15.856-6.327,30.767-15.781,28.76-23.245c-1.991-7.397-19.604-8.119-36.489-5.656
		c-21.164,3.06-25.442,13.509-23.236,21.669C118.604,301.039,127.511,307.938,147.38,300.068z"/>
                                    <path d="M364.603,211.948c-15.856,6.369-30.75,15.765-28.744,23.196c1.991,7.446,19.588,8.168,36.489,5.713
		c21.164-3.084,25.442-13.534,23.237-21.686C393.38,210.954,384.489,204.054,364.603,211.948z"/>
                                    <path d="M163.368,327.75c-16.751,13.227-15.225,24.447-9.221,30.41c6.004,5.979,17.166,7.514,30.418-9.272
		c10.532-13.368,18.725-28.967,13.285-34.432C192.378,309.008,176.77,317.176,163.368,327.75z"/>
                                    <path d="M348.598,184.283c16.785-13.26,15.243-24.464,9.288-30.426c-5.988-6.012-17.182-7.521-30.418,9.271
		c-10.582,13.394-18.742,29.008-13.302,34.424C319.606,203,335.214,194.823,348.598,184.283z"/>
                                    <path d="M234.87,336.035c-7.414-1.991-16.851,12.886-23.17,28.759c-7.912,19.87-1.028,28.801,7.198,30.957
		c8.194,2.222,18.626-2.065,21.694-23.22C243.063,355.638,242.316,338.033,234.87,336.035z"/>
                                    <path d="M293.102,116.249c-8.177-2.222-18.626,2.065-21.677,23.22c-2.472,16.918-1.742,34.498,5.688,36.496
		c7.43,2.024,16.868-12.895,23.186-28.734C308.195,127.353,301.328,118.464,293.102,116.249z"/>
                                    <path d="M214.536,255.992c0,22.904,18.56,41.464,41.465,41.464c22.888,0,41.464-18.56,41.464-41.464
		c0-22.888-18.576-41.448-41.464-41.448C233.095,214.544,214.536,233.104,214.536,255.992z"/>
                                </g>
                            </svg>
                        } />




                    <div id="infos" className='w-full md:w-2/3 2xl:w-1/2 mx-auto mt-10'>
                        <div>
                            <Translatable id='w1' />
                        </div>
                        <br /><br />
                        <div>
                            <Translatable id='w2' />
                        </div>
                        <br /><br />

                        <div>
                            <Translatable id='w3' />
                        </div>
                        <br /><br />

                        <div>
                            <Translatable id='work.7' />
                        </div>
                        <br /><br />
                        <div>
                            <Translatable id='w4' />
                        </div>
                        <br /><br />
                        <div>
                            <Translatable id='w5' />
                        </div>
                    </div>

                </article>

                {/* <hr className='my-10 bg-[var(--font)]  border-0' style={{ height: "1px" }} /> */}




                <div className="ps relative mt-60">
                    <div className="text-[13cqmin]">
                        <h3 className='top-0 max-sm:hidden left-0  absolute opacity-5'><Translatable id='work.8' /></h3>
                        <h3 className='-top-20 max-sm:hidden left-5  absolute opacity-10'><Translatable id='work.8' /></h3>
                        <h3 className='-top-40 left-10 absolute opacity-20'><Translatable id='work.8' /></h3>
                    </div>


                    <div className="pt-40 grid grid-cols-4 gap-y-5 justify-items-center max-sm:py-0">
                        <ExEntry tit='RealTunisianHarissa.com' link='#' img1='/rth.JPG' img2='/Cattura.JPG' />
                        <ExEntry link='#' tit='MeruMeals.com' img1='/mm.JPG' img2='/mmR.JPG' />
                        <ExEntry link='#' tit='OJXacademy.com' img1='/ojxa.JPG' img2='/ojxaR.JPG' />
                        <ExEntry link='#' tit='bloGG.it' img1='/blog.JPG' img2='/blogR.JPG' />
                    </div>
                </div>


                <div className="ps relative mt-60">
                    <div className="text-[13cqmin]">
                        <h3 className='top-0 max-sm:hidden left-0  absolute opacity-5'><Translatable id='work.9' /></h3>
                        <h3 className='-top-20 max-sm:hidden left-5  absolute opacity-10'><Translatable id='work.9' /></h3>
                        <h3 className='-top-40 left-10 absolute opacity-20'><Translatable id='work.9' /></h3>
                    </div>


                    <div className="pt-40 grid grid-cols-4 gap-y-5 justify-items-center max-sm:py-0">
                        <ExEntry enlarge tit='GALLery' img1='/gal.jpg' />
                        <ExEntry enlarge tit='TimeTravelers' img1='/tt.jpg' />
                        <ExEntry enlarge tit='AJart' img1='/aj.jpg' />
                        <ExEntry enlarge tit='Eventis' img1='/eventis.jpg' />
                    </div>
                </div>


            </div>
        </div>
    );
}