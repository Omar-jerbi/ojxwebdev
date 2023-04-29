import TopNavbar from "@/app/components/Navbar/TopNavbar"
import SideNavbar from "./components/Navbar/SideNavbar"
import './globals.css'
import './Layout.scss'
import Footer from "./components/Footer/Footer";
import i from './favicon.png'
import Image from "next/image";
import { LangContextProvider } from "./contexts/LangContext";
import Langs from "./components/Langs/Langs";



export const metadata = {
    title: 'OJXwebdev | Sviluppiamo il TUO sito web',
    description: 'Affidandoti ad OJX trasformeremo le tue idee nel tuo sito web! Sviluppo di siti internet per eventi, aziende, eCommerce, blogs, portfolio personali e molti altri.',
    icons: {
        icon: "/_next/static/media/favicon.1d647803.png",
        shortcut: "/_next/static/media/favicon.1d647803.png",
    },
    keywords: ['ojxwebdev', 'sviluppo web', "siti web", "ecommerce", "blog", "programmazione", "business", "sito web"],
    authors: [{ name: "OmarJ", url: "https://github.com/Omar-jerbi" }],
    category: "sviluppo siti web",
    openGraph: {
        title: "OJXwebdev",
        description: 'Affidandoti ad OJX trasformeremo le tue idee nel tuo sito web! Sviluppo di siti internet per eventi, aziende, eCommerce, blogs, portfolio personali e molti altri.',
        url: "https://ojxwebdev.com",
        siteName: "OJXwebdev.com",
        type: "website",
        locale: "it-IT"
    }
}


export default function RootLayout({
    children
}: {
    children: React.ReactNode,
}) {

    return (
        <html lang="en">
            <LangContextProvider>

                <body className="body-clientsite">

                    {/* FIX LOADING ICON */}
                    <Image src={i} alt="" height={0} width={0} style={{ display: "none" }} />

                    <TopNavbar />
                    <SideNavbar />

                    <main>
                        {children}
                    </main>

                    <Langs />

                    <Footer />
                </body>

            </LangContextProvider>
        </html >

    );
}