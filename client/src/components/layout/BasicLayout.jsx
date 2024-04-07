import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";


export function BasicLayout(){
    return (
        <div className="basic-layout">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}