import React, { useState } from "react";
import { navLinks } from "../constants/index";

const Navbar = () => {
    const [isopen,setIsOpen]=useState(false)

    const toggleMenu=()=>setIsOpen((prevIsOpen)=>!prevIsOpen)
    const navItems=()=>{
        return(
            <ul className="nav-ul">
                {navLinks.map(({id,href,name})=>(
                    <li key={id} className="nav-li">
                        <a href={href} className="nav-li_a" onClick={()=>{}}>{name}</a>
                    </li>
                ))}
            </ul>
        )
    }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between item-center py-5 mx-auto c-space">
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Yonas</a>
                <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex " aria-label="Toggle menu">
                    <img src={isopen? "assets/close.svg" :"assets/menu.svg"} alt="toogle" className="w-6 h-6"/>
                </button>
                <nav className="sm:flex hidden">
                {navItems()}
                {/* <navItems/> */}
                </nav>
            </div>
        </div>
        <div className={`nav-sidebar ${isopen?'max-h-screen':'max-h-0'}`}>
            <nav className="p-5">
                {navItems()}
            </nav>
        </div>
    </header>
  );
};

export default Navbar;
