import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";


export function BasicLayout(){
    return (
        <div className="basic-layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}