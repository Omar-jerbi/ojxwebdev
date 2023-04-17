import TopNavbar from "@/app/components/Navbar/TopNavbar"
import SideNavbar from "./components/Navbar/SideNavbar"
import './globals.css'
import './Layout.scss'
import ChatBox from "./components/ChatBox/ChatBox";
import Footer from "./components/Footer/Footer";

export const metadata = {
    title: 'OJXwebdev | Sviluppiamo il TUO sito web',
    description: 'Affidandoti ad OJX trasformeremo le tue idee nel <em>tuo</em> sito web! Sviluppo di siti internet per eventi, aziende, eCommerce, blogs, portfolio personali e molti altri.',
}


export default function RootLayout({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <html lang="en">

            <body className="body-clientsite">
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