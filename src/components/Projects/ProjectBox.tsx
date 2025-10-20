import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import TechBar from "./TechBar";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
  github: string;
}

type ProjectBoxProps = Project;

export default function ProjectBox({
  title,
  description,
  image,
  techStack,
  link,
  github,
}: ProjectBoxProps) {
  return (
    <div
      className="bg-amber-300 p-10 rounded-2xl md:justify-between
      border-4 border-r-10 border-b-10 gap-4 items-center md:items-center md:gap-15 
      grid grid-cols-1 xl:grid-cols-2 m-4 md:m-10
      
    "
    >
      <div className="flex justify-center items-center">
        <Image
          width={2000}
          height={2000}
          src={image}
          alt="Project"
          className="border-2 border-gray-800 object-cover w-full rounded-md"
        />
      </div>

      <div className="flex ml-4 flex-col gap-4 md:gap-10 items-center md:items-start">
        <p className="font-black font-archivo text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {title}
        </p>
        <div className="bg-purple-400 rounded-2xl text-md md:font-bold sm:text-base md:text-md p-4 w-fit">
          {description}
        </div>
        <div className="flex flex-wrap ml-1 mr-1 gap-4">
          {/* tech stack & link here*/}
          {techStack &&
            techStack.map((tech, index) => <TechBar key={index} tech={tech} />)}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 text-3xl"
            >
              <FiExternalLink />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black text-3xl"
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
