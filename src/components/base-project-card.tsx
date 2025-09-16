import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "./card";
import List from "./list-item";
import { ProjectModal } from "./project-modal";
import Techs from "./techs";
import ImageLoading from "./ui/image-loading";
import { Reveal } from "./ui/reveal";

type BaseProjectCardProps = {
  onOpenPhotoLightBox?: () => void;
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
};

const BaseProjectCard = ({
  title = "title",
  subtitle = "subtitle",
  ...rest //rest khi destructure props ~ const { title, subtitle, ...rest } = props, chứa tất cả các prop còn lại chưa lấy ra.
}: BaseProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card>
        <div
          className="grid grid-cols-12 p-3 md:p-6"
          onClick={() => setIsOpen(true)}
        >
          {/* Image */}
          <div className="col-span-3 py-2 justify-center items-start hidden md:flex mr-4 md:mr-8">
            {rest.image ? (
              <LazyLoadImage
                src={rest.image}
                className="w-full h-auto object-contain rounded-md"
                onClick={(e) => {
                  e.stopPropagation();
                  rest.onOpenPhotoLightBox?.();
                }}
                alt={`An image of the ${title} project.`}
              />
            ) : (
              <ImageLoading />
            )}
          </div>

          {/* Content */}
          <div className="col-span-full md:col-span-9 mt-0.5">
            <div className="flex flex-col">
              <div className="flex flex-wrap item-desc mb-2 items-center gap-2">
                <Reveal once>
                  <div
                    className="t4 leading-7 font-semibold flex flex-wrap items-center gap-2"
                    aria-label={title}
                  >
                    {title}
                    {subtitle && (
                      <span className="t5 text-muted-foreground">
                        ({subtitle})
                      </span>
                    )}
                  </div>
                </Reveal>
                <a
                  target="_blank"
                  href={rest.repo ?? "#"}
                  aria-label="Github"
                  className="duration-100 lg:hover:-translate-y-1 ease-in-out justify-items-end"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <BsArrowUpRight className="w-5 h-5 lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1 duration-100 ease-in-out" />
              </div>

              <Reveal once>
                {rest.description &&
                  rest.description.map((e, i) => (
                    <p key={i} className="item-desc mb-2">
                      {e}
                    </p>
                  ))}
              </Reveal>

              <Reveal once={true}>
                {rest.features && (
                  <List label="Main Features" data={rest.features} />
                )}
                {rest.role && (
                  <List label="My Responsibility" data={rest.role} />
                )}
              </Reveal>

              <Reveal once={true}>
                {rest.objective && (
                  <List label="Objective" data={rest.objective} />
                )}
                {rest.achievements && (
                  <List label="Achievements" data={rest.achievements} />
                )}
              </Reveal>

              <Reveal once={true}>
                {rest.techs && <Techs techs={rest.techs} />}
              </Reveal>
            </div>
          </div>
        </div>
      </Card>

      {isOpen && (
        <ProjectModal
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          title={title}
          subtitle={subtitle}
          {...rest} //spread trải các key-value trong object rest thành props.
        />
      )}
    </>
  );
};

export default BaseProjectCard;
