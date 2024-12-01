import { HiArrowCircleLeft, HiArrowCircleRight, HiChevronDoubleDown } from "react-icons/hi";
import { RiLoader3Fill } from "react-icons/ri";
import { FaLinkedin, FaGithub} from "react-icons/fa";

import { useState, useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';

import NavMenu from '../components/NavMenu';
import ProjectMenu from '../components/ProjectMenu';
import SkillMenu from '../components/SkillsPresentationButton';


function Home() {

  /*To get center element*/
  const [centerElement, setCenterElement] = useState("accueil")

  /*For projects*/
  const [projectNumber, setProjectNumber] = useState(1);
  const [projectMinus, setProjectMinus] = useState(0);
  const [projectPlus, setProjectPlus] = useState(2);
  
  const projectlist = [{
    title:"Flute of Doom", link:"/fluteofdoom", shortresume:"Flute of Doom est un projet de jeu vidéo d'horreur créé pour la gamejam GameOff 2024. \n *Coming soon*", image:"../../backgroundpoly.webp"
}, {
    title:"Greed and Darkness", link:"/greedanddarkness", shortresume:"Greed and Darkness est un jeu vidéo où l'on explore une mine abandonnée suite à un malheureux accident. Il reprend les codes du metroidvania et de nombreux jeux d'horreur. \n*Coming soon*", image:"../../gadmapscheme.webp"
}, {
    title:"None", link:"/", shortresume:"None", image:"../../backgroundpoly.webp"
}
]

const idlist = ['accueil', 'projects', 'presentation', 'skills', 'contact']
  
  const changeProject = (delta) => {
    const newProjectNumber = (projectNumber + delta + projectlist.length) % projectlist.length;
    setCenterElement("accueil")
    
    if (newProjectNumber == 0) {
      setProjectMinus(projectlist.length -1);
    } else {
      setProjectMinus(newProjectNumber - 1);
    }
    if (newProjectNumber == projectlist.length-1) {
      setProjectPlus(0);
    } else {
      setProjectPlus(newProjectNumber + 1);
    }
      setProjectNumber(newProjectNumber);
    };

  const getDist = (id) => {
    const element = document.getElementById(id).getBoundingClientRect();
    const y = element.top;
    const ywindow = (window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight)/2;

    const dist = (y-ywindow)**2
    return dist
    };

  const getCenterElement = () => {
    var centerId = null;
    var centerDist = Infinity;
    for (const id of idlist) {
      const distId = getDist(id);
      if (distId < centerDist) {
        centerId = id;
        centerDist = distId;
      }
    }
    return centerId
  }

/*Actualisation de l'élément central */

useEffect(() => {
  let animationFrameId;
    
  const handleScroll = () => {
    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(() => {
        const newCenter = getCenterElement();
        if (newCenter !== centerElement) {
          setCenterElement(newCenter);
        }
          animationFrameId = null;
        });
        }
      };
    
  window.addEventListener("scroll", handleScroll);
    
  return () => {
    window.removeEventListener("scroll", handleScroll);
    cancelAnimationFrame(animationFrameId);
  };
  }, [centerElement]);

  return (
    <div className="bg-[url(../../backgroundpoly.webp)] bg-cover bg-center lg:bg-fixed xl:bg-fixed">
      <NavMenu center={centerElement} />
      

        <div className='pt-20 flex flex-col pb-10'>

{/*Accueil*/}
          <section id='accueil' className='place-self-center shadow-lg lg:w-min lg:place-items-center lg:px-32 opacity-95 flex flex-wrap justify-center lg:flex-nowrap sm:flex-col md:flex-col lg:flex-row bg-zinc-100 text-zinc-800 rounded-md m-20 lg:mt-20 lg:mb-30 lg:mx-40 p-3'>
              <img alt='Portrait' src='../../portrait.webp' className='h-full outline outline-1 place-self-center my-5 mx-10 w-40 rounded-md' />
              <div className='text-wrap mb-5'>
                <h1 className='ms-5 mr-10 lg:ms-0 text-xl lg:text-4xl lg:place-self-center'>Ewen RONDIN</h1>
                <h1 className='ms-4 mr-10 lg:ms-0 text-2xl lg:text-5xl font-semibold lg:place-self-center'>Game Developper</h1>
              </div>
          </section>
          
          <HashLink smooth to='/#presentation' scroll={(element) => element.scrollIntoView({ behavior: 'smooth', block: 'center' })} className='animate-bounce text-7xl justify-center place-self-center'><HiChevronDoubleDown /></HashLink>

{/*Présentation*/}
          <div className="text-white flex flex-col lg:flex-row outline-2 outline outline-zinc-700 lg:h-128 h-min w-full bg-zinc-800 shadow-md mt-52 mb-20 lg:mt-52 lg:px-32 py-5 h-min">
            <section id="presentation" className="text-black p-2 lg:p-4 bg-white flex flex-row lg:w-2/3 lg:rounded-md outline outline-2 outline-zinc-800 h-full">
              <div className="p-4 text-white h-full lg:w-1/3 outline outline-2 outline-zinc-700 rounded-md bg-zinc-200 flex flex-col">
                <img alt='Image CV' src='../../CV_img.webp' className='h-3/4 w-full outline outline-zinc-700 outline-2'></img>
                <a href="../../CV_Ewen_RONDIN.pdf" download className='place-self-center w-full rounded-md bg-zinc-800 text-white p-2 hover:bg-zinc-700 hover:outline hover:outline-2 hover:outline-black shadow-lg text-center mt-4'>
                  Télécharger mon CV
                </a>
              </div>

              <div className="p-4 pl-8 h-full lg:w-2/3">
                <h1 className="font-semibold text-xl mb-2">Qui-suis-je ?</h1>
                <p className='h-1/3'>
                  Actuellement élève en B2 Informatique à <i>Rennes Ynov Campus</i>, je souhaite devenir Game Developer. Je recherche un stage de 6 semaines minimum et une alternance pour les années à venir.
                </p>

                <div className='inline-flex space-x-16 text-6xl place-self-end pt-4'>
                  <a href='https://github.com/Yyrion' target='_blank'>
                    <FaGithub />
                  </a>
                  <a href='https://www.linkedin.com/in/ewen-rondin-32ba3432b' target='_blank'>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </section>

            {/* Section Skills */}
            <section id="skills" className='flex flex-col h-full w-full p-4 lg:p-0 lg:w-1/3 lg:ml-16'>
              <h1 className="font-semibold text-xl">
                Mes compétences
              </h1>
              <div className='flex-1 flex flex-col h-full w-2/3 place-self-center lg:place-self-start'>
                <SkillMenu/>
              </div>
            </section>
          </div>
          
{/*Projets*/}

          <section id="projects" className="-z-10 outline outline-2 outline-zinc-700 flex justify-center px-8 my-48 py-10 bg-zinc-100 w-full z-10 h-48 opacity-95">
          <ProjectMenu project={projectlist[projectMinus]} placement='hidden lg:block' />

          <button aria-label='Previous project' onClick={() => changeProject(-1)} className='opacity-75 place-self-center lg:hidden start-3 z-40 absolute bg-black text-zinc-300 rounded-full text-7xl h-min w-min hover:text-zinc-500 hover:outline hover:outline-3 hover:outline-zinc-500' ><HiArrowCircleLeft /></button>

          <ProjectMenu project={projectlist[projectNumber]} placement='mx-5 lg:mx-16' />

          <button aria-label='Next project' onClick={() => changeProject(1)} className='opacity-75 place-self-center lg:hidden end-3 z-40 absolute bg-black text-zinc-300 rounded-full text-7xl h-min w-min hover:text-zinc-500 hover:outline hover:outline-3 hover:outline-zinc-500'><HiArrowCircleRight /></button>

          <ProjectMenu project={projectlist[projectPlus]} placement='hidden lg:block' />
          </section>
          
{/*Contact*/}
          <section id='contact' className='place-self-center outline outline-4 outline-white opacity-95 bg-zinc-800 mx-5 lg:mx-20 my-20 lg:w-1/2 text-zinc-800 rounded-md py-7 px-3 outline outline-1 outline-zinc-700'>
            <h1 className='ms-4 text-2xl text-white font-semibold'>Contactez moi</h1>
            <h1 className='ms-4 text-lg text-white'>Si mon profil vous intéresse, vous êtes à l'endroit parfait pour le faire savoir !</h1>

            <form name="contact" method="post" className='bg-zinc-800 text-white rounded-lg py-3 px-5 outlineoutline-white mt-3'>
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label>Votre email : 
                  <input type="email" name="email"
                  className='outline outline-1 my-4 p-1 text-black w-full'
                  placeholder='yourmail@example.com' />
                </label>
              </p>
              <p>
                <label>Votre message : 
                  <textarea name="message"
                  className='w-full h-56 my-4 p-1 border-2 text-black'
                  placeholder='Votre message...'></textarea>
                  </label>
              </p>
              <p>
                <button type="submit" 
                className="inline-flex text-center bg-green-600 px-3 py-1 rounded-lg right-1 hover:bg-green-700 hover:outline hover:outline-2">
                Envoyer
                </button>
              </p>
            </form>


          </section>
        </div>

        <footer className='bg-zinc-800 text-white text-sm h-12 text-center py-3'>
          Ewen RONDIN - ewrondin@gmail.com
        </footer>
    </div>
  )
}

export default Home