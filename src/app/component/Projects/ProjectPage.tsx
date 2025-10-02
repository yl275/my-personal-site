import ProjectBox from "./ProjectBox";
import projectList from "./ProjectList";

export default function ProjectPage() {
  return (
    <div className="bg-purple-300 md:p-15 flex flex-col gap-4 border-t-6 border-b-6">
      <h2 className="
        font-bold text-3xl border-4 w-fit p-4 m-2 rounded-2xl border-b-6 border-r-5 
      ">Projects</h2>
      {projectList.map((proj) => (
        <ProjectBox
          key={proj.title}
          title={proj.title}
          description={proj.description}
          image={proj.image}
          techStack={proj.techStack}
          link={proj.link || ""}
          github={proj.github || ""}
        />
      ))}
    </div>
  );
}
