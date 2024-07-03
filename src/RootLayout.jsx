import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function RootLayout() {
    
    return(
        <div className="flex grow flex-col min-h-full bg-white">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}