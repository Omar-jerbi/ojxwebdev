import TopNavbar from "@/app/components/Navbar/TopNavbar"
import SideNavbar from "../components/Navbar/SideNavbar"
import './Layout.scss'
import ChatBox from "../components/ChatBox/ChatBox";
import Footer from "../components/Footer/Footer";

export const metadata = {
    title: 'OJXwebdev.com',
    description: 'Home page clienti progetti',
}


export default function ({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <body className="body-clientsite">
            <TopNavbar />
            <SideNavbar />

            <main>
                {children}
            </main>

            <ChatBox />
            <Footer />
        </body>
    );
}