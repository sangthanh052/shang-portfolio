import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { PiImageSquare } from "react-icons/pi";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Card from "./card";
import List from "./list-item";
import { ProjectModal } from "./project-modal";
import Techs from "./techs";

const SideProject: React.FC<{
  url?: string;
  image?: string;
  title: string;
  subtitle?: string;
  description: string[];
  features: string[];
  techs: string[];
  objective?: string;
  repo?: string;
  onOpenPhotoLightBox?: () => void;
}> = ({ onOpenPhotoLightBox, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card>
        <div
          className="grid grid-cols-12 p-3 md:p-6"
          onClick={() => setIsOpen(true)}
        >
          <div className="col-span-3 py-2 justify-center items-start hidden md:flex mr-4 md:mr-8">
            {rest.image ? (
              <LazyLoadImage
                src={rest.image}
                className="w-full h-auto object-contain rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenPhotoLightBox?.();
                }}
                alt={rest.title}
              />
            ) : (
              <div className="w-full aspect-square flex items-center justify-center bg-primary/20 rounded-md">
                <PiImageSquare className="w-5/12 h-auto text-primary" />
              </div>
            )}
          </div>

          <div className="col-span-full md:col-span-9 mt-0.5">
            <div className="flex flex-col">
              <div className="flex flex-wrap item-desc mb-2 items-center gap-2">
                <a
                  target="_blank"
                  href={rest.url ?? "#"}
                  className="t4 leading-7 font-medium"
                  aria-label={rest.title}
                >
                  {rest.title}
                  {rest.subtitle && (
                    <span className="t5 font-light text-muted-foreground">
                      ({rest.subtitle})
                    </span>
                  )}
                </a>

                <a
                  target="_blank"
                  href={rest.repo ?? "#"}
                  aria-label="Github"
                  className="duration-100 lg:hover:-translate-y-1 ease-in-out"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <BsArrowUpRight className="w-5 h-5 lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1 duration-100 ease-in-out" />
              </div>

              {rest.description.map((e, index) => (
                <p key={index} className="item-desc mb-2">
                  {e}
                </p>
              ))}

              <List label="Main Features" data={rest.features} />

              {rest.objective && (
                <div className="item-desc mb-2">
                  Objective: {rest.objective}
                </div>
              )}

              <Techs techs={rest.techs} />
            </div>
          </div>
        </div>
      </Card>
      <ProjectModal setIsOpen={setIsOpen} isOpen={isOpen} {...rest} />
    </>
  );
};

export default SideProject;
