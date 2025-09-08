import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import List from "./list-item";
import { BackgroundGradient } from "./ui/background-gradient";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  url?: string;
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string[];
  role?: string[]; //project
  features?: string[]; //personal
  achievements?: string[]; //project
  objective?: string[]; //personal
  techs?: string[];
  repo?: string;
}

export const ProjectModal = ({ repo = "/", url = "/", ...rest }: Props) => {
  useLockBodyScroll(rest.isOpen);

  const content = (
    <div
      className="fixed text-foreground z-50 inset-0 px-5 py-16 bg-background/30 backdrop-blur-md overflow-y-scroll flex justify-center"
      onClick={() => rest.setIsOpen(false)}
    >
      <BackgroundGradient className="">
        <button className="top-3 right-3 absolute text-2xl">
          <MdClose />
        </button>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-2xl h-fit rounded-3xl overflow-hidden bg-primary-foreground shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
        >
          <div className="border-b border-primary">
            <img
              src={rest.image}
              alt={`An image of the ${rest.title} project.`}
              width={500}
              height={400}
              className="w-full"
            />
          </div>

          <div className="px-6 py-8">
            <h4 className="text-4xl font-bold">
              {rest.title || "Project Name"}{" "}
              {rest.subtitle && `(${rest.subtitle})`}
            </h4>

            <div className=" text-primary my-3">
              {rest.techs && rest.techs.join(" - ")}
            </div>

            {rest.description &&
              rest.description.map((e, index) => (
                <div key={index} className="text-base mb-3">
                  {e}
                </div>
              ))}

            <div className="text-base flex-col flex gap-3 text-foreground">
              {rest.features && (
                <List label="Main Features" data={rest.features} />
              )}
              {rest.role && <List label="My Responsibility" data={rest.role} />}
            </div>

            <div className="text-base flex-col flex gap-3 text-foreground">
              {rest.objective && (
                <List label="Objective" data={rest.objective} />
              )}
              {rest.achievements && (
                <List label="Achievements" data={rest.achievements} />
              )}
            </div>

            <div className="mt-6">
              <p className="text-2xl font-bold">
                Project Links<span className="text-primary">.</span>
              </p>
              <div className="flex gap-3 mt-3">
                <Link
                  className="flex items-center gap-1 text-primary"
                  target="_blank"
                  rel="nofollow"
                  to={repo}
                >
                  <AiFillGithub /> Source code
                </Link>
                <Link
                  className="flex items-center gap-1 text-primary"
                  target="_blank"
                  rel="nofollow"
                  to={url}
                >
                  <AiOutlineExport /> Live project
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </BackgroundGradient>
    </div>
  );

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
