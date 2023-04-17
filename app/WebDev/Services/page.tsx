import LongSection from '@/app/components/LongSection/LongSection';
import './Services.scss'
import SectionHome from '@/app/components/SectionHome/SectionHome';
import Link from 'next/link';



export default function () {
    return (
        <div className="services">
            <LongSection text={
                <span className='tit'>
                    <b style={{ color: 'var(--red)' }}>"Le tue idee, il tuo sito"</b> questo è l'approccio OJX!
                    <br />
                    Siti web professionali che ricalcano
                    l'immaginazione del cliente usando le ultime tecnologie
                    disponibili sul mercato. A differenza dai tool "fai da te" per lo sviluppo di una
                    applicazione web, affidandoti ad OJX avrai il pieno controllo sul
                    risultato finale del tuo progetto.
                </span>
            } />
            <div className="center">

                <SectionHome
                    reverse
                    text={<span id='sizereact'>
                        Dalle fasi iniziali di progettazione all'ottimizzazione per i motori di ricerca, non ti dovrai preoccupare degli aspetti più tecnici: 
                        In molti casi, le software house lasciano al cliente il compito di occuparsi dell'hosting del sito web, non con OJX.
                    </span>}
                    imgsrc='/serviceshome.jpg' />

                <div id="bg">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 844.52097 544.59508">
                        <path d="M931.14105,699.03863l13.887.36551a44.822,44.822,0,0,0,6.7571-20.48c-8.89865,9.43551-24.595,7.065-36.08827,13.07507a26.96057,26.96057,0,0,0-13.82546,18.84016l-5.72591,8.01794a45.17742,45.17742,0,0,0,37.19059-6.91016,43.63879,43.63879,0,0,0,8.00025-7.47307C936.18548,702.09145,931.14105,699.03863,931.14105,699.03863Z" transform="translate(-177.73951 -177.70246)" fill="#f2f2f2" />
                        <path d="M923.49136,677.89435l12.5925-5.8662a44.82209,44.82209,0,0,0-3.08581-21.344c-3.75662,12.41382-18.86274,17.29241-26.4693,27.79742a26.96057,26.96057,0,0,0-3.972,23.02864l-1.54908,9.73A45.17742,45.17742,0,0,0,931.213,688.469a43.63836,43.63836,0,0,0,3.82772-10.25668C929.36785,678.377,923.49136,677.89435,923.49136,677.89435Z" transform="translate(-177.73951 -177.70246)" fill="#f2f2f2" />
                        <polygon points="725.084 533.946 716.566 533.946 712.514 501.092 725.085 501.092 725.084 533.946" fill="#a0616a" />
                        <path d="M902.59641,708.86507l-9.08836-3.69172-.26812-.11-5.01854,3.80174a10.685,10.685,0,0,0-10.67646,10.22271c-.01377.15122-.01377.30937-.01377.46747v.35062h27.46452v-11.0408Z" transform="translate(-177.73951 -177.70246)" fill="#2f2e41" />
                        <polygon points="708.863 516.955 701.522 521.275 681.367 495.014 692.202 488.639 708.863 516.955" fill="#a0616a" />
                        <path d="M891.67247,698.9861l-.9968-1.69808-3.60923-6.13224-1.87683,1.10682-.19247.11-9.7071,1.42991-.28877.04129-2.39239,5.82287A10.68981,10.68981,0,0,0,868.814,714.303l.17875.2956,23.66966-13.92815Z" transform="translate(-177.73951 -177.70246)" fill="#2f2e41" />
                        <path d="M913.61121,510.79661c3.9935,12.04439,3.5713,25.11823-.9599,39.15l-1.18267,48.23631L907.67,628.60959a52.09865,52.09865,0,0,1,3.46672,18.68115c-.01615,16.74127-1.14179,40.52495-6.84893,51.6977H890.782l-3.04874-49.75469-3.63816-25.01587-.44852-26.80669-.39118-23.37977-14.685,21.47379-14.26985,20.86666,14.18354,23.92474,12.3745,38.49844-13.062,10.99955-14.81769-28.09247-7.18142-8.34355-19.60394-42.43815,1.76178-5.90879a139.78376,139.78376,0,0,1,15.66252-34.53159l0,0,19.49945-45.25659Z" transform="translate(-177.73951 -177.70246)" fill="#2f2e41" />
                        <path d="M688.66247,519.79661H420.65233a8.07558,8.07558,0,0,1-8.06636-8.06636V306.86267a8.07532,8.07532,0,0,1,8.06636-8.06606H688.66247a8.07532,8.07532,0,0,1,8.06636,8.06606V511.73025A8.07557,8.07557,0,0,1,688.66247,519.79661Z" transform="translate(-177.73951 -177.70246)" fill="#fff" />
                        <path d="M688.66229,520.79661H420.65252a9.077,9.077,0,0,1-9.06641-9.06641V306.86253a9.07653,9.07653,0,0,1,9.06641-9.06592H688.66229a9.07652,9.07652,0,0,1,9.0664,9.06592V511.7302A9.07694,9.07694,0,0,1,688.66229,520.79661Zm-268.00977-221a7.07424,7.07424,0,0,0-7.06641,7.06592V511.7302a7.07434,7.07434,0,0,0,7.06641,7.06641H688.66229a7.07434,7.07434,0,0,0,7.0664-7.06641V306.86253a7.07423,7.07423,0,0,0-7.0664-7.06592Z" transform="translate(-177.73951 -177.70246)" fill="var(--font)" />
                        <path d="M413.205,480.79661V511.7304a7.45828,7.45828,0,0,0,7.44716,7.44716H688.66262a7.45828,7.45828,0,0,0,7.44716-7.44716V480.79661Z" transform="translate(-177.73951 -177.70246)" fill="#f0f0f0" />
                        <rect x="554.65076" y="224.09029" width="1.99962" height="333.55961" transform="translate(-250.87539 470.37299) rotate(-57.37135)" fill="#f0f0f0" />
                        <path d="M779.50328,452.98922a6.6176,6.6176,0,0,0,10.13608.47785l21.56551,9.37924-2.1006-12.03868-20.15693-7.061a6.65349,6.65349,0,0,0-9.44406,9.24262Z" transform="translate(-177.73951 -177.70246)" fill="#a0616a" />
                        <path d="M799.12472,446.188l41.19723,5.33928,42.485-25.59256a18.78361,18.78361,0,0,1,26.80668,8.35028h0a18.80383,18.80383,0,0,1-8.4331,24.39256l-57.08925,20.34375-.10746.03844L793.89442,456.748Z" transform="translate(-177.73951 -177.70246)" fill="#3f3d56" />
                        <path d="M859.28737,518.07907l3.42446-8.561-2.26477-7.36036,6.71034-73.36111h0l.99127-11.11841.06685-8.288,22.946-.55964L893.65,415.1499l4.924,2.9442a35.64637,35.64637,0,0,1,17.30724,31.18056l-.88947,48.12064,2.28984,4.58023a9.63783,9.63783,0,0,1-5.67976,13.49028l-50.44447,15.3308Z" transform="translate(-177.73951 -177.70246)" fill="#3f3d56" />
                        <circle cx="699.84774" cy="202.42136" r="20.8488" fill="#a0616a" />
                        <path d="M899.29724,384.66879c.62184-2.6197.33635-6.30613-.01507-8.94389a25.03482,25.03482,0,0,0-10.59629-17.38372,7.63326,7.63326,0,0,0-3.80218-1.511,3.28226,3.28226,0,0,0-3.3002,1.99619,6.84189,6.84189,0,0,0-3.8598-3.82756,12.05793,12.05793,0,0,0-5.49444-.74021,20.08039,20.08039,0,0,0-16.75192,11.9747c-.55688,1.32291-2.11229-3.56352-2.81785-2.31357a5.55713,5.55713,0,0,1-3.15143,2.76892c-1.38251.38578-1.944,6.08184-2.48811,4.75362a6.33176,6.33176,0,0,0,6.05343,8.82879,34.87045,34.87045,0,0,0,4.143-.793,10.32927,10.32927,0,0,1,11.3093,7.73074,13.68475,13.68475,0,0,1,1.80033-4.00553,4.63181,4.63181,0,0,1,3.71585-2.04166,5.2038,5.2038,0,0,1,3.57592,2.05552c.91784,1.07772,1.6072,2.3351,2.53182,3.407,2.71306,3.14524,6.38255,10.4801,10.24894,9.94514C893.44979,396.14715,898.4482,388.24565,899.29724,384.66879Z" transform="translate(-177.73951 -177.70246)" fill="#2f2e41" />
                        <path d="M938.82557,555.89408a6.61765,6.61765,0,0,0-2.83685-9.74274l1.87445-23.442-10.70577,5.89313-.1387,21.35744a6.6535,6.6535,0,0,0,11.80687,5.93417Z" transform="translate(-177.73951 -177.70246)" fill="#a0616a" />
                        <path d="M926.02574,539.541l-8.31682-40.70074-37.993-31.88244a18.78361,18.78361,0,0,1-.79944-28.06575h0a18.80382,18.80382,0,0,1,25.80911.06221l37.76678,47.3996.07123.08917-4.85208,54.61886Z" transform="translate(-177.73951 -177.70246)" fill="#3f3d56" />
                        <path d="M796.17743,528.6544H638.03771a4.16145,4.16145,0,0,1-4.15662-4.15662V460.33154a4.16146,4.16146,0,0,1,4.15662-4.15663H796.17743a4.16139,4.16139,0,0,1,4.15662,4.15663v64.16624A4.16138,4.16138,0,0,1,796.17743,528.6544Z" transform="translate(-177.73951 -177.70246)" fill="#6c63ff" />
                        <path d="M386.63821,642.09329l13.24162-4.20034a44.8221,44.8221,0,0,0-.319-21.56359c-5.31984,11.82854-20.92743,14.72661-29.82018,24.1677a26.96059,26.96059,0,0,0-6.89675,22.32778l-2.7859,9.45051a45.17739,45.17739,0,0,0,32.87975-18.70324,43.63869,43.63869,0,0,0,5.11331-9.68013C392.404,643.32671,386.63821,642.09329,386.63821,642.09329Z" transform="translate(-177.73951 -177.70246)" fill="#f2f2f2" />
                        <path d="M372.4887,624.6179l9.97854-9.665a44.82209,44.82209,0,0,0-9.90246-19.15807c.51382,12.9596-12.16315,22.51418-15.912,34.93035a26.96056,26.96056,0,0,0,3.78488,23.06013l1.72124,9.70107a45.17744,45.17744,0,0,0,21.08749-31.40394,43.639,43.639,0,0,0,.25947-10.94457C378.19944,623.15042,372.4887,624.6179,372.4887,624.6179Z" transform="translate(-177.73951 -177.70246)" fill="#f2f2f2" />
                        <path d="M399.1658,444.66928a7.52289,7.52289,0,0,1-8.51517-7.78187l-48.09647-48.80072,13.42658-9.34746L399.03607,429.648a7.56363,7.56363,0,0,1,.12973,15.02128Z" transform="translate(-177.73951 -177.70246)" fill="#ffb6b6" />
                        <path d="M327.75776,366.97811s-3.40875,2.04312,2.26484,8.26467c4.54215,4.98081,24.36293,28.92837,32.27447,33.9282-.86281,2.49126,21.02175,26.34234,23.32251,27.863l12.164-15.17955c-.6949-4.35213-24.62925-25.12984-26.27763-24.60133l-7.6317-9.48634-17.29159-29.00363-16.38708,6.69437Z" transform="translate(-177.73951 -177.70246)" fill="#6c63ff" />
                        <polygon points="112.035 480.052 121.102 480.052 125.417 445.078 112.034 445.078 112.035 480.052" fill="#ffb6b6" />
                        <path d="M286.81481,651.544l14.48631-.86463v6.20656l13.77254,9.51181a3.87685,3.87685,0,0,1-2.203,7.06714l-17.24649,0-2.9727-6.13925-1.16069,6.13925h-6.50261Z" transform="translate(-177.73951 -177.70246)" fill="#2f2e41" />
                        <polygon points="162.968 480.052 172.035 480.052 176.35 445.078 162.968 445.078 162.968 480.052" fill="#ffb6b6" />
                        <path d="M337.74786,651.544l14.48631-.86463v6.20656l13.77254,9.51181a3.87685,3.87685,0,0,1-2.203,7.06714l-17.24649,0-2.9727-6.13925-1.16069,6.13925h-6.50261Z" transform="translate(-177.73951 -177.70246)" fill="#2f2e41" />
                        <path d="M285.86178,627.59413h.09858l1.74384-56.867a14.87005,14.87005,0,0,1,.19511-14.05194l.24966-.45193-.64734-3.00072a19.11352,19.11352,0,0,1,1.09226-11.50324l1.62684-53.04638c-5.812-37.66677,21.88634-62.23162,21.88634-62.23162l-5.06161-21.29269,50.11155-4.929-3.5574,26.22169,8.908,30.60567c5.88895,57.374,4.8204,113.28328-4.52452,167.44994l.25476.12883c.91734.31665,1.31077,1.58741.879,2.83844s-1.52548,2.00849-2.44281,1.69184l-21.91283-.76217c-.91733-.31657-1.31091-1.58741-.879-2.83844.43175-1.251,1.52548-2.00842,2.44281-1.69184l1.48994.75359-3.17752-54.87452.35263-10.02317-.72647-11.3711-3.35883-51.14711-12.71368,62.89653-12.98639,68.1293a2.38889,2.38889,0,0,1-1.61089,4.15967h-17.732a2.39631,2.39631,0,0,1,0-4.79261Z" transform="translate(-177.73951 -177.70246)" fill="#2f2e41" />
                        <path d="M347.397,351.582l-9.85494-5.913-19.70988-1.971-17.42074,8.871.1746,27.09955,11.05157,28.10695,43.05489,8.87405,5.02317-24.70113s12.81142-17.20734-.98549-27.06228Z" transform="translate(-177.73951 -177.70246)" fill="#6c63ff" />
                        <path d="M305.21219,468.58869a7.52287,7.52287,0,0,1-1.6681-11.41416l-6.3551-68.22312,16.31137,1.25981,1.11782,66.66495a7.56363,7.56363,0,0,1-9.406,11.71252Z" transform="translate(-177.73951 -177.70246)" fill="#ffb6b6" />
                        <path d="M301.01556,352.84092s-3.93229-.57536-3.47683,7.83236c.36464,6.731-1.36843,48.21939,1.593,57.09749-2.24467,1.38285-2.36413,35.15015-1.54511,37.78361l19.0247-4.05483c2.21628-3.80947.75711-38.72087-.85365-39.35487l.09462-12.17475,4.20458-40.13088-16.19145-6.63269Z" transform="translate(-177.73951 -177.70246)" fill="#6c63ff" />
                        <path d="M398.24783,474.90117a5.41136,5.41136,0,0,1-1.11673-4.51063,72.0123,72.0123,0,0,0,0-28.37347,5.41137,5.41137,0,0,1,1.11673-4.51063,5.28944,5.28944,0,0,1,4.02487-1.941c8.288-3.30285,16.22505-3.30325,23.59529.0004a5.35173,5.35173,0,0,1,5.20457,4.59929,119.10339,119.10339,0,0,1,0,32.07744,5.35142,5.35142,0,0,1-5.29442,4.60008H402.35333A5.28843,5.28843,0,0,1,398.24783,474.90117Z" transform="translate(-177.73951 -177.70246)" fill="#6c63ff" />
                        <path d="M404.8066,447.79526h19.716a1.23226,1.23226,0,0,0,0-2.46451h-19.716a1.23225,1.23225,0,0,0,0,2.46451Z" transform="translate(-177.73951 -177.70246)" fill="#fff" />
                        <path d="M404.8066,457.65327h19.716a1.23226,1.23226,0,0,0,0-2.46451h-19.716a1.23226,1.23226,0,0,0,0,2.46451Z" transform="translate(-177.73951 -177.70246)" fill="#fff" />
                        <path d="M404.8066,467.51127h19.716a1.23225,1.23225,0,0,0,0-2.4645h-19.716a1.23225,1.23225,0,0,0,0,2.4645Z" transform="translate(-177.73951 -177.70246)" fill="#fff" />
                        <path id="a0ad7a78-ce9c-4e5a-964d-79d0781968c2-211" data-name="a1ca5f83-7fa1-45b1-9d3b-bf096f25c0e5" d="M346.15958,333.62371V315.26234a24.60388,24.60388,0,1,0-49.20774-.0316v.0316c-4.33641,9.03639-1.62353,13.33257,0,18.36137a3.309,3.309,0,0,0,3.30352,3.30352h42.59906A3.30907,3.30907,0,0,0,346.15958,333.62371Z" transform="translate(-177.73951 -177.70246)" fill="#2f2e41" />
                        <circle cx="151.88324" cy="139.61473" r="18.41689" fill="#ffb7b7" />
                        <path d="M310.34868,322.1453c.16692-.02638.33385-.06155.50077-.08794,2.87277-.5095,5.74549-1.01021,8.60947-1.52861l.26359-6.49216,3.47011,5.81568c7.91546,2.62677,15.32136,1.14212,22.288-2.13474a62.923,62.923,0,0,0,6.67677-3.68094,24.40688,24.40688,0,0,0-11.9918-17.2717c-.26354-.14939-.51829-.28108-.78189-.413a.00859.00859,0,0,1-.00874-.00879c-.44805-.21083-.9049-.41288-1.36175-.59733a20.28683,20.28683,0,0,0-21.29528,4.129C311.09546,305.24261,308.56532,314.10684,310.34868,322.1453Z" transform="translate(-177.73951 -177.70246)" fill="#2f2e41" />
                    </svg>
                </div>


                <SectionHome
                    text={<span id='sizereact'>
                        Non ti dovrai preoccupare di acquistare domini, allestire mail box o gestire l'hosting delle tue pagine.
                        Il tuo sito verra allestito completo di tutto il necessario per essere acceduto dai pricipali browser e raggiunto dai motori di ricerca
                    </span>}
                    imgsrc='/services2.jpg' />


                <div id="bg">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 839.79697 523.44409">
                        <path d="M259.30182,695.092a50.79366,50.79366,0,0,0,13.58985,12.63c1.12011.71,2.27,1.38,3.43994,2h27.52978c-.32959-.66-.6499-1.33-.96-2a95.35442,95.35442,0,0,1,19.84033-109.34c-16.64013,5.14-32.02,15.16-42.08008,29.37a64.46989,64.46989,0,0,0-10.23,23,96.27579,96.27579,0,0,1,7.66993-48.41c-13.50977,10.99-24.03028,26.04-28.04,42.98C246.05182,662.272,248.96149,681.082,259.30182,695.092Z" transform="translate(-180.10152 -188.27796)" fill="#f0f0f0" />
                        <path d="M1015.54573,469.26684H828.37712a4.35775,4.35775,0,0,1-4.35276-4.35276V349.13072a4.35775,4.35775,0,0,1,4.35276-4.35276h187.16861a4.35774,4.35774,0,0,1,4.35275,4.35276V464.91408A4.35774,4.35774,0,0,1,1015.54573,469.26684Z" transform="translate(-180.10152 -188.27796)" fill="#fff" />
                        <path d="M1015.54573,469.26684H828.37712a4.35775,4.35775,0,0,1-4.35276-4.35276V349.13072a4.35775,4.35775,0,0,1,4.35276-4.35276h187.16861a4.35774,4.35774,0,0,1,4.35275,4.35276V464.91408A4.35774,4.35774,0,0,1,1015.54573,469.26684ZM828.37712,346.51906a2.61451,2.61451,0,0,0-2.61165,2.61166V464.91408a2.61451,2.61451,0,0,0,2.61165,2.61166h187.16861a2.61451,2.61451,0,0,0,2.61165-2.61166V349.13072a2.61451,2.61451,0,0,0-2.61165-2.61166Z" transform="translate(-180.10152 -188.27796)" fill="#3f3d56" />
                        <path d="M978.54728,383.44633H865.37557a3.91748,3.91748,0,1,1,0-7.835H978.54728a3.91748,3.91748,0,0,1,0,7.835Z" transform="translate(-180.10152 -188.27796)" fill="#ccc" />
                        <path d="M978.54728,410.43343H865.37557a3.91748,3.91748,0,1,1,0-7.835H978.54728a3.91748,3.91748,0,0,1,0,7.835Z" transform="translate(-180.10152 -188.27796)" fill="#ccc" />
                        <circle cx="788.36325" cy="250.94409" r="14" fill="#6c63ff" />
                        <path d="M968.84939,432.6268V431.293h.39488v1.33382a4.25848,4.25848,0,0,1,1.61464.39489,2.372,2.372,0,0,1,.92139.768,1.79468,1.79468,0,0,1,.33346,1.0485,1.13131,1.13131,0,0,1-.25887.75466.801.801,0,0,1-.6362.30713.66792.66792,0,0,1-.49141-.20183.67875.67875,0,0,1-.20183-.50018.94972.94972,0,0,1,.079-.37733l.158-.33346a1.10866,1.10866,0,0,0,.079-.43876,1.03337,1.03337,0,0,0-.21061-.64483,1.27287,1.27287,0,0,0-.59671-.417,3.37919,3.37919,0,0,0-.78977-.158v4.8l.08776.05265a8.74061,8.74061,0,0,1,2.22011,1.67606,3.942,3.942,0,0,1,.67131,1.13653,3.48548,3.48548,0,0,1,.24131,1.25909,3.05619,3.05619,0,0,1-.42121,1.58831,2.85171,2.85171,0,0,1-1.16709,1.0969,4.92848,4.92848,0,0,1-1.63219.47386v1.43035h-.39488v-1.404a4.40491,4.40491,0,0,1-1.66728-.34223,3.15528,3.15528,0,0,1-1.347-.96527,2.18559,2.18559,0,0,1-.47825-1.3777,1.55743,1.55743,0,0,1,.30713-.97857.91445.91445,0,0,1,.74589-.39913.64469.64469,0,0,1,.66692.66549,1.30412,1.30412,0,0,1-.32469.72665,2.20278,2.20278,0,0,0-.24131.4028.89954.89954,0,0,0-.06582.35016,1.41757,1.41757,0,0,0,.31152.87978,1.98877,1.98877,0,0,0,.838.62587,3.08659,3.08659,0,0,0,1.18465.21032h.0702v-5.73019l-.50018-.28958q-.71079-.41229-1.08374-.68446a4.52619,4.52619,0,0,1-.6713-.59671,2.88251,2.88251,0,0,1-.781-1.98319,2.69087,2.69087,0,0,1,.33346-1.31175,2.61657,2.61657,0,0,1,.92139-.97857A3.75,3.75,0,0,1,968.84939,432.6268Zm0,.19306a2.71562,2.71562,0,0,0-.98721.21909,1.68175,1.68175,0,0,0-.734.70938,2.17061,2.17061,0,0,0-.27953,1.09463,2.22358,2.22358,0,0,0,.41059,1.305,2.6476,2.6476,0,0,0,.51109.552,9.52086,9.52086,0,0,0,.99173.64795l.08733.05265Zm.39488,11.89913a2.72113,2.72113,0,0,0,.66394-.1404,1.74956,1.74956,0,0,0,.48052-.2808,2.17254,2.17254,0,0,0,.61157-.85544,2.94766,2.94766,0,0,0,.22716-1.15408,3.62464,3.62464,0,0,0-1.98319-3.03621Z" transform="translate(-180.10152 -188.27796)" fill="#fff" />
                        <path d="M888.04573,391.76684H700.87712a4.35775,4.35775,0,0,1-4.35276-4.35276V271.63072a4.35775,4.35775,0,0,1,4.35276-4.35276H888.04573a4.35774,4.35774,0,0,1,4.35275,4.35276V387.41408A4.35774,4.35774,0,0,1,888.04573,391.76684Z" transform="translate(-180.10152 -188.27796)" fill="#fff" />
                        <path d="M888.04573,391.76684H700.87712a4.35775,4.35775,0,0,1-4.35276-4.35276V271.63072a4.35775,4.35775,0,0,1,4.35276-4.35276H888.04573a4.35774,4.35774,0,0,1,4.35275,4.35276V387.41408A4.35774,4.35774,0,0,1,888.04573,391.76684ZM700.87712,269.01906a2.61451,2.61451,0,0,0-2.61165,2.61166V387.41408a2.61451,2.61451,0,0,0,2.61165,2.61166H888.04573a2.61451,2.61451,0,0,0,2.61165-2.61166V271.63072a2.61451,2.61451,0,0,0-2.61165-2.61166Z" transform="translate(-180.10152 -188.27796)" fill="#3f3d56" />
                        <path d="M851.04728,305.94633H737.87557a3.91748,3.91748,0,1,1,0-7.835H851.04728a3.91748,3.91748,0,0,1,0,7.835Z" transform="translate(-180.10152 -188.27796)" fill="#ccc" />
                        <path d="M851.04728,332.93343H737.87557a3.91748,3.91748,0,1,1,0-7.835H851.04728a3.91748,3.91748,0,0,1,0,7.835Z" transform="translate(-180.10152 -188.27796)" fill="#ccc" />
                        <circle cx="660.86325" cy="173.44409" r="14" fill="#6c63ff" />
                        <path d="M841.34939,355.1268V353.793h.39488v1.33382a4.25848,4.25848,0,0,1,1.61464.39489,2.372,2.372,0,0,1,.92139.768,1.79468,1.79468,0,0,1,.33346,1.0485,1.13131,1.13131,0,0,1-.25887.75466.801.801,0,0,1-.6362.30713.66792.66792,0,0,1-.49141-.20183.67875.67875,0,0,1-.20183-.50018.94972.94972,0,0,1,.079-.37733l.158-.33346a1.10866,1.10866,0,0,0,.079-.43876,1.03337,1.03337,0,0,0-.21061-.64483,1.27287,1.27287,0,0,0-.59671-.417,3.37919,3.37919,0,0,0-.78977-.158v4.8l.08776.05265a8.74061,8.74061,0,0,1,2.22011,1.67606,3.942,3.942,0,0,1,.67131,1.13653,3.48548,3.48548,0,0,1,.24131,1.25909,3.05619,3.05619,0,0,1-.42121,1.58831,2.85171,2.85171,0,0,1-1.16709,1.0969,4.92848,4.92848,0,0,1-1.63219.47386v1.43035h-.39488v-1.404a4.40491,4.40491,0,0,1-1.66728-.34223,3.15528,3.15528,0,0,1-1.347-.96527,2.18559,2.18559,0,0,1-.47825-1.3777,1.55743,1.55743,0,0,1,.30713-.97857.91445.91445,0,0,1,.74589-.39913.64469.64469,0,0,1,.66692.66549,1.30412,1.30412,0,0,1-.32469.72665,2.20278,2.20278,0,0,0-.24131.4028.89954.89954,0,0,0-.06582.35016,1.41757,1.41757,0,0,0,.31152.87978,1.98877,1.98877,0,0,0,.838.62587,3.08659,3.08659,0,0,0,1.18465.21032h.0702v-5.73019l-.50018-.28958q-.71079-.41229-1.08374-.68446a4.52619,4.52619,0,0,1-.6713-.59671,2.88251,2.88251,0,0,1-.781-1.98319,2.69087,2.69087,0,0,1,.33346-1.31175,2.61657,2.61657,0,0,1,.92139-.97857A3.75,3.75,0,0,1,841.34939,355.1268Zm0,.19306a2.71562,2.71562,0,0,0-.98721.21909,1.68175,1.68175,0,0,0-.734.70938,2.17061,2.17061,0,0,0-.27953,1.09463,2.22358,2.22358,0,0,0,.41059,1.305,2.6476,2.6476,0,0,0,.51109.552,9.52086,9.52086,0,0,0,.99173.64795l.08733.05265Zm.39488,11.89913a2.72113,2.72113,0,0,0,.66394-.1404,1.74956,1.74956,0,0,0,.48052-.2808,2.17254,2.17254,0,0,0,.61157-.85544,2.94766,2.94766,0,0,0,.22716-1.15408,3.62464,3.62464,0,0,0-1.98319-3.03621Z" transform="translate(-180.10152 -188.27796)" fill="#fff" />
                        <path d="M500.04705,374.49034a11.18294,11.18294,0,0,0-11.92823,12.31914l-35.98248,16.86895,17.6119,10.78392L501.21773,396.79a11.24355,11.24355,0,0,0-1.17068-22.29968Z" transform="translate(-180.10152 -188.27796)" fill="#ffb6b6" />
                        <polygon points="171.049 510.77 183.476 510.769 189.388 462.837 171.047 462.838 171.049 510.77" fill="#ffb6b6" />
                        <path d="M347.981,694.99057l24.47283-.001h.001a15.59684,15.59684,0,0,1,15.596,15.59575v.50681l-40.06908.00149Z" transform="translate(-180.10152 -188.27796)" fill="#2f2e41" />
                        <polygon points="234.459 510.77 246.886 510.769 252.798 462.837 234.457 462.838 234.459 510.77" fill="#ffb6b6" />
                        <path d="M411.391,694.99057l24.47283-.001h.001a15.59684,15.59684,0,0,1,15.596,15.59575v.50681l-40.06908.00149Z" transform="translate(-180.10152 -188.27796)" fill="#2f2e41" />
                        <polygon points="242.76 262.159 249.067 275.738 260.438 397.176 251.599 501.554 230.926 501.554 206.532 337.03 195.074 497.764 167.18 496.638 161.825 278.718 242.76 262.159" fill="#2f2e41" />
                        <path d="M322.35011,338.37232l26.14948-10.63882,36.90884,2.07,32.81286,11.95777L429.16882,464.016c-28.5463,15.58821-57.46265,19.84291-86.88214,8.69662l-27.30385-79.62774Z" transform="translate(-180.10152 -188.27796)" fill="#e4e4e4" />
                        <path d="M408.01258,344.99321l11.60412-3.232s8.777-5.70687,11.66475,11.25755,17.74674,43.35179,17.74674,43.35179l25.43689-13.55623,11.77684,25.71876-40.17082,24.3336-42.30322-42.62435Z" transform="translate(-180.10152 -188.27796)" fill="#e4e4e4" />
                        <path id="a80a6b0c-a21b-4eb6-b764-70793a425e46-90" data-name="Path 40" d="M344.36137,305.08309h0a26.60911,26.60911,0,1,1,48.69886-21.4616l.15213.352a26.61391,26.61391,0,1,1-48.86107,21.11392Z" transform="translate(-180.10152 -188.27796)" fill="#ffb6b6" />
                        <path id="b51b91e7-03ed-46d5-9b2a-c48431fd2f0d-91" data-name="Path 72" d="M380.48666,280.72968c5.53288,1.00387,14.09526,4.48722,18.84719.40069a23.29107,23.29107,0,0,0-8.623-6.30727,5.31442,5.31442,0,0,1-1.78491-1.00876c-1.62011-1.63724-.36833-4.45837-1.10968-6.672a5.71717,5.71717,0,0,0-3.93656-3.24591c-1.64929-.49349-3.3776-.57358-4.99779-1.172-3.8341-1.441-6.55991-5.56482-10.49-6.68541-3.42422-.99049-6.86978.54889-9.825,2.3453s-5.87861,3.92779-9.33592,4.26872c-2.58351.23566-4.219,4.48522-6.81269,4.60972-5.43518.2644-5.13334-3.31789-5.53535,2.392-.232,3.4073-5.10057,10.18578-5.0215,13.62274.08048,2.25207-.31795,4.4826-.2537,6.74168a17.51461,17.51461,0,0,0,4.84751,11.51147c2.47446,2.54466,5.69295,4.261,7.77591,7.16149,1.08319,1.53982,1.83464,3.33723,3.09558,4.73049s3.39672,2.23181,4.80406,1.23711,1.43356-3.14743,2.13182-4.78553a5.23317,5.23317,0,0,1,5.20088-3.166,6.12882,6.12882,0,0,1,5.0008,4.08254c-.659-3.62008-2.39634-7.012-3.05657-10.63483s.20019-7.95066,3.31979-9.36513c1.33937-.62327,3.1487-.79073,3.68711-2.22693.32959-.86507.02807-1.88717.15511-2.8228C369.25528,281.1561,376.879,280.02172,380.48666,280.72968Z" transform="translate(-180.10152 -188.27796)" fill="#2f2e41" />
                        <path d="M345.42185,471.2991a11.18295,11.18295,0,0,0-14.61214-8.97379l-24.26862-31.46958-6.70925,19.531,24.07449,26.88974a11.24355,11.24355,0,0,0,21.51552-5.97733Z" transform="translate(-180.10152 -188.27796)" fill="#ffb6b6" />
                        <path d="M330.73254,344.30787l-8.38243-5.93555s-19.17686-1.09855-21.96661,14.64645l-35.16332,57.84515,43.59811,60.14755,21.13747-22.25082-26.671-31.1678L325.678,376.47733Z" transform="translate(-180.10152 -188.27796)" fill="#e4e4e4" />
                        <path d="M534.95585,353.47372h-.43976V341.42666a6.9725,6.9725,0,0,0-6.9725-6.97251H502.02026a6.9725,6.9725,0,0,0-6.97252,6.97249v66.0911a6.97251,6.97251,0,0,0,6.9725,6.97252h25.52331a6.97251,6.97251,0,0,0,6.97253-6.97249V362.049h.43977Z" transform="translate(-180.10152 -188.27796)" fill="#3f3d56" />
                        <path d="M527.8249,336.26815h-3.33163a2.47382,2.47382,0,0,1-2.29043,3.40813h-14.622a2.47384,2.47384,0,0,1-2.29043-3.40813h-3.11175a5.207,5.207,0,0,0-5.207,5.207v65.99413a5.207,5.207,0,0,0,5.207,5.207H527.8249a5.207,5.207,0,0,0,5.207-5.207h0V341.47514A5.207,5.207,0,0,0,527.8249,336.26815Z" transform="translate(-180.10152 -188.27796)" fill="#6c63ff" />
                        <path d="M758.04573,312.76684H570.87712a4.35775,4.35775,0,0,1-4.35276-4.35276V192.63072a4.35775,4.35775,0,0,1,4.35276-4.35276H758.04573a4.35774,4.35774,0,0,1,4.35275,4.35276V308.41408A4.35774,4.35774,0,0,1,758.04573,312.76684Z" transform="translate(-180.10152 -188.27796)" fill="#fff" />
                        <path d="M758.04573,312.76684H570.87712a4.35775,4.35775,0,0,1-4.35276-4.35276V192.63072a4.35775,4.35775,0,0,1,4.35276-4.35276H758.04573a4.35774,4.35774,0,0,1,4.35275,4.35276V308.41408A4.35774,4.35774,0,0,1,758.04573,312.76684ZM570.87712,190.01906a2.61451,2.61451,0,0,0-2.61165,2.61166V308.41408a2.61451,2.61451,0,0,0,2.61165,2.61166H758.04573a2.61451,2.61451,0,0,0,2.61165-2.61166V192.63072a2.61451,2.61451,0,0,0-2.61165-2.61166Z" transform="translate(-180.10152 -188.27796)" fill="#3f3d56" />
                        <path d="M721.04728,226.94633H607.87557a3.91748,3.91748,0,1,1,0-7.835H721.04728a3.91748,3.91748,0,0,1,0,7.835Z" transform="translate(-180.10152 -188.27796)" fill="#ccc" />
                        <path d="M721.04728,253.93343H607.87557a3.91748,3.91748,0,1,1,0-7.835H721.04728a3.91748,3.91748,0,0,1,0,7.835Z" transform="translate(-180.10152 -188.27796)" fill="#ccc" />
                        <circle cx="530.86325" cy="94.44409" r="14" fill="#6c63ff" />
                        <path d="M711.34939,276.1268V274.793h.39488v1.33382a4.25848,4.25848,0,0,1,1.61464.39489,2.372,2.372,0,0,1,.92139.768,1.79468,1.79468,0,0,1,.33346,1.0485,1.13131,1.13131,0,0,1-.25887.75466.801.801,0,0,1-.6362.30713.66792.66792,0,0,1-.49141-.20183.67875.67875,0,0,1-.20183-.50018.94972.94972,0,0,1,.079-.37733l.158-.33346a1.10866,1.10866,0,0,0,.079-.43876,1.03337,1.03337,0,0,0-.21061-.64483,1.27287,1.27287,0,0,0-.59671-.417,3.37919,3.37919,0,0,0-.78977-.158v4.8l.08776.05265a8.74061,8.74061,0,0,1,2.22011,1.67606,3.942,3.942,0,0,1,.67131,1.13653,3.48548,3.48548,0,0,1,.24131,1.25909,3.05619,3.05619,0,0,1-.42121,1.58831,2.85171,2.85171,0,0,1-1.16709,1.0969,4.92848,4.92848,0,0,1-1.63219.47386v1.43035h-.39488v-1.404a4.40491,4.40491,0,0,1-1.66728-.34223,3.15528,3.15528,0,0,1-1.347-.96527,2.18559,2.18559,0,0,1-.47825-1.3777,1.55743,1.55743,0,0,1,.30713-.97857.91445.91445,0,0,1,.74589-.39913.64469.64469,0,0,1,.66692.66549,1.30412,1.30412,0,0,1-.32469.72665,2.20278,2.20278,0,0,0-.24131.4028.89954.89954,0,0,0-.06582.35016,1.41757,1.41757,0,0,0,.31152.87978,1.98877,1.98877,0,0,0,.838.62587,3.08659,3.08659,0,0,0,1.18465.21032h.0702v-5.73019l-.50018-.28958q-.71079-.41229-1.08374-.68446a4.52619,4.52619,0,0,1-.6713-.59671,2.88251,2.88251,0,0,1-.781-1.98319,2.69087,2.69087,0,0,1,.33346-1.31175,2.61657,2.61657,0,0,1,.92139-.97857A3.75,3.75,0,0,1,711.34939,276.1268Zm0,.19306a2.71562,2.71562,0,0,0-.98721.21909,1.68175,1.68175,0,0,0-.734.70938,2.17061,2.17061,0,0,0-.27953,1.09463,2.22358,2.22358,0,0,0,.41059,1.305,2.6476,2.6476,0,0,0,.51109.552,9.52086,9.52086,0,0,0,.99173.64795l.08733.05265Zm.39488,11.89913a2.72113,2.72113,0,0,0,.66394-.1404,1.74956,1.74956,0,0,0,.48052-.2808,2.17254,2.17254,0,0,0,.61157-.85544,2.94766,2.94766,0,0,0,.22716-1.15408,3.62464,3.62464,0,0,0-1.98319-3.03621Z" transform="translate(-180.10152 -188.27796)" fill="#fff" />
                        <path d="M562.10152,711.722h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-180.10152 -188.27796)" fill="#cacaca" />
                    </svg>
                </div>



                <SectionHome
                    reverse
                    text={<span id='sizereact'>
                        Vuoi imparare l'arte dello sviluppo web o arricchire le tuo competenze personali in materia di programmazione internet? Dai un'occhiata alla web academy OJX!
                        <br />
                        <Link style={{ color: "var(--grey)" }} href={'https://ojxacademy.com'} target='_blank'>Vai a OJX academy...</Link>
                    </span>}
                    imgsrc='/services3.jpg' />

            </div>
        </div>
    );
}