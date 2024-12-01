import {Link} from 'react-router-dom'

function ProjectMenu(props) {

    const project = props.project; {/*Projet sélectionné avec ses informations */}
    const placement = props.placement; {/*Informations de style bonus */}

    return(
    <div className={`z-10 ${placement} text-zinc-100 bg-zinc-800 overflow w-96 p-8 rounded-md place-self-center`}>
        <img
          src={project.image}
          className="rounded-sm place-self-center w-80 h-32 opacity-100 mb-5"
          alt="Image du projet"
        />
        <h1 className="text-2xl font-semibold">{project.title}</h1>
        <p className="text-wrap mt-3">
        {project.shortresume}
        </p>
        <div className="mt-8 w-full flex justify-center">
        {/*Lien vers la page de projet */}
        <Link
          to={project.link}
          className="w-full rounded-md bg-zinc-100 text-black p-2 hover:bg-zinc-300 hover:outline shadow-lg text-center"
        >
          Accéder à la fiche de projet
        </Link>
      </div>
    </div>
)
}

export default ProjectMenu;