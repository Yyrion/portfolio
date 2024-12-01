function TechLabel(props) {
    const technology = props.technology
    return (
        <>
        {/*Bouton d'affichage des technologies avec des mots*/}
        <div className='rounded-full bg-zinc-400 shadow-lg h-min py-1 px-3'>
            {technology}
        </div>
        </>
        
    )
}

export default TechLabel;