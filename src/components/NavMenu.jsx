import { useState } from 'react'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { FaBars } from "react-icons/fa6";

function NavMenu(props) {
    {/*Menu ouvert ? */}
    const [isOpen, setIsOpen] = useState(false);
    const center = props.center;

    {/*Agrandir ou rétrécir le menu sur téléphone */}
    const toggleMenu = () => {
          setIsOpen(!isOpen);
          return true
        };
    
    {/*Liste des parties du portfolio */}
    const navlinks = [{
        title:"Accueil", link:"#accueil", id:'accueil'
    }, {
        title:"Qui suis-je ?", link:"#presentation", id:"presentation"
    }, {
        title:"Mes compétences", link:"#skills", id:"skills"
    }, {
        title:"Mes projets", link:"#projets", id:"projects"
    }, {
        title:"Vous voulez me contacter ?", link:"#contact", id:"contact"
    }
]

    return (
        <nav className='overflow-hidden z-50 bg-zinc-700 shadow-lg fixed top-0 w-screen'>
            <div className='bg-zinc-800 mx-auto px-4 sm:px-3 lg:px-8'>
                <div className='flex items-center justify-between h-20 lg:h-16'>
                    {/*Lien Portfolio*/}
                    <div className='flex items-center'>
                        <Link to='/' className='ms-2 font-semibold text-white text-xl'>Portfolio</Link>
                    </div>

                    {/*Boutons du menu pour ordinateur*/}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-6'>
                        {navlinks.map((link, index) => (
                            <HashLink
                                key={index}
                                to={`/#${link.id}`}
                                scroll={(element) => element.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                className={`h-full ${link.title === 'Mes compétences' ? 'hidden' : ''} transition-all duration-200 text-zinc-100 hover:bg-zinc-600 hover:text-white px-3 pt-5 ${(center === link.id) ? "border-b-4 border-white pb-4" : "pb-5"}`}
                            >
                                {link.title}
                            </HashLink>
                            ))}
                        </div>
                    </div>
                    
                    <div className='mr-1 flex md:hidden text-3xl justify-self-center text-center'>
                    <button type='button' onClick={toggleMenu} className='w-full items-center justify-center p-2 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-zinc-800 focus:ring-zinc-100'>
                        {/*Bouton d'affichage du menu sur téléphone*/}
                        <span className="sr-only">Open Main Menu</span>
                        {isOpen ? <span><FaBars /></span> : <span><FaBars /></span>}
                    </button>
                    </div>
                </div>
            </div>
            {/*Menu pour téléphone*/}
            {isOpen ? (
                <div className='md:hidden pt-32 pb-96'>
                    <div className='ox-2 pt-2 pb-3 space-y-5 sm:px-3'>
                        {navlinks.map((link, index) => (
                            <HashLink key={index} onClick={() => {
                                toggleMenu();
                            }} className='text-nowrap place-self-center w-full text-center font-semibold text-zinc-100 hover:bg-zinc-500 hover:text-white block px-3 py-3 rounded-md text-base font-medium text-lg'
                            to={`/#${link.id}`} scroll={(element) => element.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                            >{link.title}</HashLink>
                        ))}
                    </div>
                </div>
            ) : null}
        </nav>
)
}

export default NavMenu