import TopNavbar from "@/app/components/Navbar/TopNavbar"
import SideNavbar from "./components/Navbar/SideNavbar"
import './globals.css'
import './Layout.scss'
import ChatBox from "./components/ChatBox/ChatBox";
import Footer from "./components/Footer/Footer";
import i from './theicontest.png'
import Image from "next/image";


export const metadata = {
    title: 'OJXwebdev | Sviluppiamo il TUO sito web',
    description: 'Affidandoti ad OJX trasformeremo le tue idee nel <em>tuo</em> sito web! Sviluppo di siti internet per eventi, aziende, eCommerce, blogs, portfolio personali e molti altri.',
    icons: {
        icon: "/_next/static/media/theicontest.1d647803.png"
    },
    keywords: ["ojxacademy", 'sviluppo web', "siti web", "ecommerce", "blog", "programmazione", "html", "css", "business"],
    authors: [{ name: "OmarJ", url: "https://github.com/Omar-jerbi" }],
    category: "sviluppo siti web"
}


export default function RootLayout({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <html lang="en">
            <body className="body-clientsite">
                {/* FIX LOADING ICON */}
                <Image src={i} alt="" height={0} width={0} style={{ display: "none" }} />
                
                <TopNavbar />
                <SideNavbar />

                <main>
                    {children}
                </main>

                <ChatBox />
                <Footer />
            </body>
        </html>

    );
}