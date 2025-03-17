import NavMenu from '../components/NavMenu'
import TechLabel from '../components/TechnoLabel';


function CiRPage() {
    return(
        <>
            <div className="bg-[url(../../backgroundpoly.webp)] bg-fixed relative pb-10 pt-20 min-h-screen">
                <NavMenu />
                
                <main className='bg-zinc-100 mt-32 lg:mt-12 p-2 pb-16'>
                    <h1 className='text-3xl'>
                        The Clock is Running
                    </h1>
                    <div className='flex flex-row my-3 space-x-4'> {/*Boutons au Github et au projet*/}
                        <a className='space-x-3 py-1 px-3 rounded-md disabled bg-zinc-700 text-md text-white'>
                            <s>Accéder au code</s>
                        </a>
                        <a className='space-x-3 py-1 px-3 rounded-md disabled bg-zinc-700 text-md text-white'>
                            <s>Accéder au projet</s>
                        </a>
                    </div>
                    <h2 className='text-xl'>Janvier 2024 - En cours de développement</h2>
                    <p className='py-4'>'The Clock is Running' est un Shooter en 2D Top Down dont le but principal est d'amasser le meilleur ratio Kill/Death en le moins de temps possible. Chaque match se passe en 3 minutes, avec des changements de gameplay toutes les minutes.
                    </p>
                    <h2 className='text-xl py-3'>Technologies utilisées</h2>
                    <div className='flex inline-flex flex-wrap gap-3'>
                        <TechLabel technology="Unity" />
                        <TechLabel technology="C#" />
                        <TechLabel technology="Game Design" />
                        <TechLabel technology="Game Programming" />
                        <TechLabel technology="Netcode Multiplayer" />
                    </div>
                    {/*Affichage des images*/}
                    <h2 className='text-xl py-3'>Images du projet</h2>
                    <div className='flex inline-flex'>
                        <i>Aucune image du jeu n'est disponible pour le moment</i>
                    </div>
                </main>
            </div>

            <footer className='bg-zinc-800 text-white text-sm h-12 text-center py-3'>
            Ewen RONDIN - ewrondin@gmail.com
            </footer>
        </>
    )
}

export default CiRPage;