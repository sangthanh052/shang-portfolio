import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "./card";
import List from "./list-item";
import { ProjectModal } from "./project-modal";
import Techs from "./techs";
import ImageLoading from "./ui/image-loading";
import { Reveal } from "./ui/reveal";

const Project: React.FC<{
  url?: string;
  image?: string;
  title: string;
  subtitle?: string;
  description: string[];
  role: string[] | undefined;
  achievements?: string[] | undefined;
  techs: string[];
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
                  e.stopPropagation();
                  onOpenPhotoLightBox?.();
                }}
                alt={rest.title}
              />
            ) : (
              <ImageLoading />
            )}
          </div>

          <div className="col-span-full md:col-span-9 mt-0.5">
            <div className="flex flex-col">
              <Reveal once={true}>
                <a
                  target="_blank"
                  href={rest.url ?? "#"}
                  className="t4 leading-7 font-medium mb-2 lg:group-hover:text-primary duration-100 flex flex-wrap items-center gap-2"
                  aria-label={rest.title}
                >
                  {rest.title}
                  {rest.subtitle && (
                    <span className="t5 font-light text-muted-foreground">
                      ({rest.subtitle})
                    </span>
                  )}
                </a>
              </Reveal>
              
              <Reveal once={true}>
                {rest.description.map((e, index) => (
                  <p key={index} className="item-desc">
                    {e}
                  </p>
                ))}
              </Reveal>

              <Reveal once={true}>
                <List label="My Responsibility" data={rest.role} />
              </Reveal>

              {/* <List label="Achievements" data={achievements} /> */}
              <Reveal once={true}>
                <Techs techs={rest.techs} />
              </Reveal>
            </div>
          </div>
        </div>
      </Card>

      <ProjectModal setIsOpen={setIsOpen} isOpen={isOpen} {...rest} />
    </>
  );
};

export default Project;
