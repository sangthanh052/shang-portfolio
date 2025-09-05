import { motion } from "framer-motion";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import List from "./list-item";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  url?: string;
  image?: string;
  title: string;
  subtitle?: string;
  description: string[];
  role?: string[] | undefined;
  features?: string[];
  achievements?: string[] | undefined;
  techs: string[];
  repo?: string;
}

export const ProjectModal = ({ repo = "/", url = "/", ...rest }: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (rest.isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [rest.isOpen]);

  const content = (
    <div
      className="fixed text-foreground z-50 inset-0 h-dvh px-5 py-16 bg-background/30 backdrop-blur-md overflow-y-scroll flex justify-center"
      onClick={() => rest.setIsOpen(false)}
    >
      <button className="top-3 right-3 absolute text-2xl">
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl h-fit rounded-2xl overflow-hidden bg-primary-foreground shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
      >
        <div className="rounded-2xl outline-1">
          <img
            src={rest.image}
            alt={`An image of the ${rest.title} project.`}
            width={500}
            height={400}
            className="w-full"
          />
        </div>
        {/* <img
          className={styles.modalImage}
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        /> */}
        <div className="p-6">
          <h4 className="text-4xl font-bold">
            {rest.title} ({rest.subtitle})
          </h4>

          <div className=" text-primary my-3">{rest.techs.join(" - ")}</div>

          {rest.description.map((e, index) => (
            <div key={index} className="text-base mb-3">
              {e}
            </div>
          ))}

          <div className="text-base flex-col flex gap-3">
            <List
              label="My Responsibility"
              className="text-foreground"
              data={rest.role || rest.features}
            />
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
                <AiFillGithub /> source code
              </Link>
              <Link
                className="flex items-center gap-1 text-primary"
                target="_blank"
                rel="nofollow"
                to={url}
              >
                <AiOutlineExport /> live project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!rest.isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
