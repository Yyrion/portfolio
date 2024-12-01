import NavMenu from '../components/NavMenu'
import TechLabel from '../components/TechnoLabel';


function FuDPage() {
    return(
        <>
            <div className="bg-[url(../../backgroundpoly.webp)] bg-fixed relative pb-10 pt-20 min-h-screen">
                <NavMenu />
                
                <div className='bg-zinc-100 mt-32 lg:mt-12 p-2 pb-16'>
                    <h1 className='text-3xl'>
                        Flute of Doom
                    </h1>
                    <div className='flex flex-row my-3 space-x-4'> {/*Boutons au Github et au projet*/}
                        <a className='space-x-3 py-1 px-3 rounded-md disabled bg-zinc-700 text-md text-white'>
                            <s>Accéder au code</s>
                        </a>
                        <a className='space-x-3 py-1 px-3 rounded-md disabled bg-zinc-700 text-md text-white'>
                            <s>Accéder au projet</s>
                        </a>
                    </div>
                    <h2 className='text-xl'>Novembre 2024 - En cours de développement</h2>
                    <p className='py-4'>Un jeu vidéo développé en équipe à l'occasion de la GameJam "GameOff 2024". J'ai servi dans ce projet de Level Designer en parallèle de mon rôle de développeur. 
                    </p>
                    <h2 className='text-xl py-3'>Technologies utilisées</h2>
                    <div className='flex inline-flex flex-wrap gap-3'>
                        <TechLabel technology="Unity" />
                        <TechLabel technology="C#" />
                        <TechLabel technology="Game Design" />
                        <TechLabel technology="Game Programming" />
                        <TechLabel technology="Level Design" />
                    </div>
                    {/*Affichage des images*/}
                    <h2 className='text-xl py-3'>Image du projets</h2>
                    <div className='flex inline-flex'>
                        *Aucune image du jeu n'est disponible pour le moment*
                    </div>
                </div>
            </div>

            <footer className='bg-zinc-800 text-white text-sm h-12 text-center py-3'>
            Ewen RONDIN - ewrondin@gmail.com
            </footer>
        </>
    )
}

export default FuDPage;