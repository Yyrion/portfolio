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
      <main className={`mb-[6em] min-h-[calc(100vh-4em)] w-full flex flex-col items-center gap-[2em] pt-[0em]`}>
      <NavigationMenu />

      {/** Section Accueil */}
      <section id="accueil" className="w-7/8 h-auto flex flex-col items-center justify-center">

        <div className="bg-[#4b5043]/10 outline outline-2 outline-[#4b5043] rounded-full w-full aspect-square flex items-center justify-center">
          <img src="" alt="Portrait d'Ewen RONDIN"/>
        </div>

        <div className='w-full mt-[1em] flex flex-col items-start justify-center'>
          <p className='text-left'>Actuellement <strong className="font-semibold text-[#4b5043]">
            étudiant </strong>
            en <strong className="font-semibold text-[#4b5043]">
              développement informatique
            </strong>, je souhaite dans le futur me spécialiser dans le développement 
            <strong className="font-semibold text-[#4b5043]"> full-stack</strong>.</p>
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
      <section id="contact" className="w-7/8 flex flex-col mb-[2em]">
      <h2 className="text-2xl w-full font-semibold mb-[1em]">Pour me contacter, c'est ici.</h2>
      <form className="flex flex-col w-full gap-[1em]">
        <div className="flex flex-col gap-[0.25em]">
          <label id='email-label' className="text-gray-700 text-sm font-medium">Votre e-mail</label>
          <input 
            type="email"
            placeholder="example@mail.com" 
            aria-labelledby='email-label'
            className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#4b5043] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-[0.25em]">
          <label id='message-label' className="text-gray-700 text-sm font-medium">Votre Message</label>
          <textarea 
            placeholder="Entrez votre message ici..." 
            aria-labelledby='message-label'
            rows={6}
            className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#4b5043] transition-colors resize-none"
          />
        </div>
        <div className='flex justify-end'>
          <DefaultButton isPrimary={true}>
            Envoyer
          </DefaultButton>
        </div>
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
