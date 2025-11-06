import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import orionLogo from "../assets/orion-logo.png";
import kjsseLogo from "../assets/kjsce-logo.png";
import somaiyaLogo from "../assets/somaiya-logo.svg";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 400);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navBg = scrolled 
        ? "bg-black/40 backdrop-blur-xl shadow-xl border-b border-white/10" 
        : "bg-black/60 backdrop-blur-md";

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navBg}`}>
                <div className="max-w-full mx-auto flex items-center justify-between px-8 py-2">
                    <div className="flex items-center space-x-6">
                        <NavLink to="/" className="transform hover:scale-110 transition-transform duration-300">
                            <img className="h-12 w-auto drop-shadow-lg" src={orionLogo} alt="Orion Logo" />
                        </NavLink>
                        <img className="h-10 w-auto drop-shadow-md" src={kjsseLogo} alt="KJSSE Logo" />
                        <img className="h-10 w-auto drop-shadow-md" src={somaiyaLogo} alt="Somaiya Trust Logo" />
                    </div>
                    <div className="hidden md:flex items-center space-x-10 flex-1 justify-center ml-20">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => `
                                relative font-semibold text-lg transition-all duration-300 
                                hover:scale-105
                                ${isActive ? 'text-red-500' : 'text-white hover:text-red-400'}
                            `}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/aboutus" 
                            className={({ isActive }) => `
                                relative font-semibold text-lg transition-all duration-300 
                                hover:scale-105
                                ${isActive ? 'text-red-500' : 'text-white hover:text-red-400'}
                            `}
                        >
                            About Us
                        </NavLink>
                        <NavLink 
                            to="/cars" 
                            className={({ isActive }) => `
                                relative font-semibold text-lg transition-all duration-300 
                                hover:scale-105
                                ${isActive ? 'text-red-500' : 'text-white hover:text-red-400'}
                            `}
                        >
                            Cars
                        </NavLink>
                        <NavLink 
                            to="/sponsor" 
                            className={({ isActive }) => `
                                relative font-semibold text-lg transition-all duration-300 
                                hover:scale-105
                                ${isActive ? 'text-red-500' : 'text-white hover:text-red-400'}
                            `}
                        >
                            Our Sponsors
                        </NavLink>
                        <NavLink 
                            to="/joinus" 
                            className={({ isActive }) => `
                                relative font-semibold text-lg transition-all duration-300 
                                hover:scale-105
                                ${isActive ? 'text-red-500' : 'text-white hover:text-red-400'}
                            `}
                        >
                            JoinUs
                        </NavLink>
                        <NavLink 
                            to="/contactus" 
                            className={({ isActive }) => `
                                relative font-semibold text-lg transition-all duration-300 
                                hover:scale-105
                                ${isActive ? 'text-red-500' : 'text-white hover:text-red-400'}
                            `}
                        >
                            Contact Us
                        </NavLink>
                    </div>
                </div>
            </nav>
            <div className="h-16" />
            <Outlet />
        </>
    );
}
export default Header;