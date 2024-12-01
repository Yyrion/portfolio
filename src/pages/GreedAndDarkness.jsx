import NavMenu from '../components/NavMenu';
import TechLabel from '../components/TechnoLabel';

function GaDPage() {

    return(
        <>
            <div className="bg-[url(../../backgroundpoly.webp)] bg-fixed relative pb-10 pt-20 min-h-screen">
                <NavMenu />
                
                <div id='test' className='bg-zinc-100 mt-32 lg:mt-12 p-2 pb-16'>
                    <h1 className='text-3xl'>
                        Greed and Darkness
                    </h1>
                    <div className='flex flex-row my-3 space-x-4'> {/*Boutons au Github et au projet*/}
                        <a className='space-x-3 py-1 px-3 rounded-md disabled bg-zinc-700 text-md text-white'>
                            <s>Accéder au code</s>
                        </a>
                        <a className='space-x-3 py-1 px-3 rounded-md disabled bg-zinc-700 text-md text-white'>
                            <s>Accéder au projet</s>
                        </a>
                    </div>
                    <h2 className='text-xl'>Octobre 2024 - En cours de développement</h2>
                    <p className='py-4'>Un jeu vidéo de type Metroidvania se déroulant dans une mine. Le protagoniste cherche à s'échapper de la mine vivant, et doit pour cela traverser un grand nombre d'environnements sombres et inquiétants.
                        L'équipe qui se charge de la création du jeu est composée de 7 personnes, et je suis, en parallèle du porteur de ce projet, chargé de la programmation de la logique du jeu.
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
                    <div className='flex inline-flex lg:flex-col'>
                        <img className='w-3/5 outline ouline-2 outline-black' src='gadmapscheme.webp'></img>
                        <p className='w-2/5 text-wrap text-sm p-3'>
                            <i>Schéma de la carte de la première zone de la carte</i>
                        </p>
                    </div>
                </div>
            </div>

            <footer className='bg-zinc-800 text-white text-sm h-12 text-center py-3'>
            Ewen RONDIN - ewrondin@gmail.com
            </footer>
        </>
)
}

export default GaDPage;