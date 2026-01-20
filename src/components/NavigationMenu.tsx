import { useState } from "react";
import { HiBars4 } from "react-icons/hi2";

export default function NavigationMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function navigateTo(whereTo: string) {
        const element = document.getElementById(whereTo);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    }

    return (
    <header>
        <nav className='md:hidden'>
            <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="fixed z-400 bottom-4 left-1/2 -translate-x-1/2 bg-white hover:bg-gray-100 active:bg-gray-200 rounded-md w-12 h-12 flex items-center justify-center shadow-lg">
                <HiBars4 className="w-6 h-6" />
            </button>
            <section id="phone-menu" className={` ${isMenuOpen ? "" : "hidden"} fixed top-0 left-0 right-0 bottom-0 bg-white/70 backdrop-blur-sm flex flex-col gap-4 items-center justify-center`}>
                <button onClick={() => navigateTo("accueil")} className="px-[1em] py-[0.1em] rounded hover:bg-gray-100 active:bg-gray-200">
                    Accueil
                </button>
                <button onClick={() => navigateTo("presentation")} className="px-[1em] py-[0.1em] rounded hover:bg-gray-100 active:bg-gray-200">
                    À propos de moi
                </button>
                <button onClick={() => navigateTo("projects")} className="px-[1em] py-[0.1em] rounded hover:bg-gray-100 active:bg-gray-200">
                    Projets
                </button>
                <button onClick={() => navigateTo("skills")} className="px-[1em] py-[0.1em] rounded hover:bg-gray-100 active:bg-gray-200">
                    Compétences
                </button>
                <button onClick={() => navigateTo("contact")} className="px-[1em] py-[0.1em] rounded hover:bg-gray-100 active:bg-gray-200">
                    Contact
                </button>
            </section>
        </nav>
        <nav className="hidden md:flex">
            TEST
        </nav>
        
    </header>)

}