import ProjectBox from "./ProjectBox";
import projectList from "./ProjectList";
import SectionTitle from "../SectionTitle";

export default function ProjectPage() {
  return (
    <div className="bg-purple-300 md:p-15 flex flex-col gap-4 border-t-6 border-b-6">
      <SectionTitle title="Projects" />
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
