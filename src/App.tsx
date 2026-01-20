import { useState } from 'react';
import DefaultButton from './components/Button';
import NavigationMenu from './components/NavigationMenu';
import ProjectContainer from './components/ProjectContainer';

function App() {
  const [projectType, setProjectType] = useState("Tous")

  const projects = [{
    title: "Test Project",
    type: "Autres projets",
    desc: "lorem",
    img: ""
  }]

  function updateProject(selectedProject: string): void {
    setProjectType(selectedProject);
  }

  return (
    <>
      <main className="min-h-[calc(100vh-4em)] w-full flex flex-col items-center gap-[3em] pt-[0em]">
      <NavigationMenu />

      {/** Section Accueil */}
      <section id="accueil" className="w-7/8 h-auto flex flex-col items-center justify-center">

        <div className="bg-lime-100 outline outline-2 outline-gray-700 rounded-full w-full aspect-square flex items-center justify-center">
          <img src="" alt="Portrait d'Ewen RONDIN"/>
        </div>

        <div className='w-full mt-[1em] flex-col items-start justify-center'>
          <h2 className="font-semibold text-left text-2xl">Ewen Rondin</h2>
          <p className='text-left'>Actuellement <strong className="font-semibold text-lime-400">
            étudiant </strong>
            en <strong className="font-semibold text-lime-400">
              développement informatique
            </strong>, je souhaite dans le futur me spécialiser dans le développement 
            <strong className="font-semibold text-lime-400"> full-stack</strong>.</p>
        </div>
      </section>

      {/** Section À propos de moi */}
      <section id="presentation" className="w-7/8">
        <h1>À propos de moi</h1>
      </section>

      {/** Section projets */}
      <section id="projects" className="w-7/8">
        <h1 className='text-2xl font-semibold mb-[1em]'>Mes projets</h1>
        <div className="flex flex-wrap gap-[0.5em]">
          <DefaultButton onClick={() => updateProject("Tous")} isPrimary={projectType === "Tous"}>
            Tous
          </DefaultButton>
          <DefaultButton onClick={() => updateProject("Full-Stack")} isPrimary={projectType === "Full-Stack"}>
            Full-Stack
          </DefaultButton>
          <DefaultButton onClick={() => updateProject("Jeux-Vidéos")} isPrimary={projectType === "Jeux-Vidéos"}>
            Jeux-Vidéos
          </DefaultButton>
          <DefaultButton onClick={() => updateProject("Autres projets")} isPrimary={projectType === "Autres projets"}>
            Autres projets
          </DefaultButton>
        </div>
        <div id="projects-container" className="grid gap-4 mt-4">
          {projects
            .filter(p => projectType === "Tous" || p.type === projectType)
            .map((project, index) => (
              <ProjectContainer key={index} project={project} />
            ))}
        </div>

      </section>

      {/** Section skills */}
      <section id="skills" className="w-7/8"></section>

      {/** Section contact */}
      <section id="contact" className="w-7/8 flex flex-col">
      <h2 className="text-2xl w-full font-semibold">Pour me contacter, c'est ici.</h2>
      <form className="flex flex-col w-full gap-[0.5em]">
        <label className="text-gray-700 text-sm">Votre e-mail</label>
        <input placeholder="example@mail.com" />
        <label className="text-gray-700 text-sm">Votre Message</label>
        <textarea placeholder="Entrez votre message ici..." />
      </form>
      </section>

      </main>
      <footer className="w-full h-[4em] bg-gray-100 flex items-center justify-center">
        <p className="text-sm">Ewen RONDIN - <em>ewrondin@gmail.com</em></p>
      </footer>
    </>
  )
}

export default App
