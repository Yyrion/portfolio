type Project = {
    title: string;
    type: string;
    desc: string;
    img: string;
};

type ProjectContainerProps = {
    project: Project;
};

export default function ProjectContainer({ project }: ProjectContainerProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-full">
            <div className="w-full aspect-video bg-gray-200 rounded mb-3 flex items-center justify-center">
                {project.img ? (
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover rounded" />
                ) : (
                    <span className="text-gray-400">Pas d'image</span>
                )}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#4b5043]">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.desc}</p>
        </div>
    );
}