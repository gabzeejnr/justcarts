import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            <Outlet />
            <Footer />
        </section>
    )
}