import {Link, NavLink } from "react-router-dom";
import logoImg from '../assets/logo.jpg'

export default function Header() {
    return(
        <header className="flex h-32 bg-white border-b-2 items-center px-20">
            {/*Logo*/}
            <Link to={'/'}>
            <img src={logoImg} alt="" className=" h-24 object-contain rounded-[50%] border-2 border-orange-500"/>
            </Link>
            
            <h1>ReactFood</h1>
            {/*NavBar => Modal*/}
            <NavLink></NavLink>
        </header>
    )
}