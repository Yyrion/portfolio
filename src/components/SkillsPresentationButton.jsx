import { useState } from 'react'
import { FaUnity, FaJava, FaPython } from "react-icons/fa";
import { SiGodotengine } from "react-icons/si";

function SkillMenu() {

    {/*Liste des différentes technologies que je maitrise*/}
    const techList = {
        python:{name:"Python", since:"2019"}, unity:{name:"Unity", since:"2023"}, java:{name:"Java", since:"2022"}, godotengine:{name:"Godot Engine", since:"2022"}
    }

    {/*Stockage de quel technologie est sélectionnée*/}
    const [tech, setTech] = useState('unity')

    return(
    <div className="flex flex-col space-y-12 p-4 text-black min-h-full items-center justify-center">
        <div className='lg:justify-between space-x-8 text-8xl inline-flex'>
            {/*Bouton Unity */}
            <button tabIndex='0' type='button' aria-label='Unity' onClick={()=>{setTech('unity')}} className={`hover:bg-zinc-300  text-6xl z-40 outline-1 outline outline-black p-4 rounded-full h-min bg-white aspect-square ${(tech === "unity") ? "bg-zinc-500" : ""}`}>
                <FaUnity />
            </button>
            {/*Bouton Java */}
            <button 
                tabIndex='0'
                type='button' aria-label='Java'
                onClick={() => setTech('java')} 
                className={`hover:bg-zinc-300  text-6xl z-40 outline-1 outline outline-black p-4 rounded-full h-min bg-white aspect-square ${tech === "java" ? "bg-zinc-500" : ""}`}
            >
                <FaJava />
            </button>
        </div>

        <div className='lg:justify-between space-x-8 text-8xl inline-flex mb-8'>
            {/*Bouton Godot Engine */}
            <button tabIndex='0' type='button' aria-label='Godot Engine' onClick={()=>setTech('godotengine')} className={`hover:bg-zinc-300 text-6xl z-40 outline-1 outline outline-black p-4 rounded-full h-min bg-white aspect-square ${(tech === "godotengine") ? "bg-zinc-500" : ""}`}>
                <SiGodotengine />
            </button>
            {/*Bouton Python */}
            <button tabIndex='0' type='button' aria-label='Python' onClick={()=>setTech('python')} className={`hover:bg-zinc-300  text-6xl z-40 outline-1 outline outline-black p-4 rounded-full h-min bg-white aspect-square ${(tech === "python") ? "bg-zinc-500" : ""}`}>
                <FaPython />
            </button>
        </div>
        
        {/*Affichage des informations sur la technologie sélectionnée*/}
        <div className='outline outline-2 outline-zinc-700 bg-white w-full place-self-center rounded-md p-4'>
        <h1 className='pb-2 text-lg font-semibold'>{techList[tech].name}</h1>
        <p> Première utilisation en {techList[tech].since}</p>
        </div>

    </div>
)
}

export default SkillMenu;