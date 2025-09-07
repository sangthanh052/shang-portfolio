import { AppContext } from "@/contexts/app.context";
import FsLightbox from "fslightbox-react";
import { Suspense, useContext, useMemo, useState } from "react";
import Project from "./project-item";
import { AnimateInView } from "./ui/animate-in-view";

const Projects = () => {
  const { profile } = useContext(AppContext);
  const [isOpenLightBox, $isOpenLightBox] = useState(false);
  const [selectedImageIndex, $selectedImage] = useState(0);

  const projects = profile?.projects;

  const images = useMemo(() => {
    return projects?.map((e) => `${e.image}`) ?? [];
  }, [profile]);

  return (
    <>
      <Suspense fallback={<div />}>
        <FsLightbox
          toggler={isOpenLightBox}
          sources={images}
          sourceIndex={selectedImageIndex}
        />
      </Suspense>

      <ol className="gap-2 overflow-hidden list-none group/list">
        {projects?.map((e, index) => (
          <AnimateInView key={index}>
            <li className="lg:hover:opacity-100! lg:group-hover/list:opacity-60 duration-100">
              <Project
                {...e}
                onOpenPhotoLightBox={() => {
                  $isOpenLightBox((cur) => !cur);
                  $selectedImage(index);
                }}
              />
            </li>
          </AnimateInView>
        ))}
      </ol>
    </>
  );
};

export default Projects;
