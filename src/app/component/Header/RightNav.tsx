import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function RightNav() {

    return(
        <div className=" gap-12 p-4 text-3xl flex">
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/yl275"
            className="hover:text-black hover:cursor-pointer "
            >
                <FaGithub />
            </a>
            

            <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/yuan-li-31a148327/"
            className="hover:text-black hover:cursor-pointer "
            >
                <FaLinkedin />
            </a>
            

        </div>
    )

}