import { AppContext } from "@/contexts/app.context";
import FsLightbox from "fslightbox-react";
import { Suspense, useContext, useMemo, useState } from "react";
import SideProject from "./side-project";
import { AnimateInView } from "./ui/animate-in-view";

const SideProjects = () => {
  const { profile } = useContext(AppContext);
  const [isOpenLightBox, $isOpenLightBox] = useState(false);
  const [selectedImageIndex, $selectedImage] = useState(0);

  const sides = profile?.sides;

  const images = useMemo(() => {
    return sides?.map((e) => `${e.image}`) ?? [];
  }, [profile]);

  return (
    <div>
      <Suspense fallback={<div />}>
        <FsLightbox
          toggler={isOpenLightBox}
          sources={images}
          sourceIndex={selectedImageIndex}
        />
      </Suspense>
      <ol className="gap-2 overflow-hidden list-none group/list">
        {sides?.map((item, index) => (
          <AnimateInView key={index}>
            <li className="lg:hover:opacity-100! lg:group-hover/list:opacity-60 duration-100">
              <SideProject
                {...item}
                onOpenPhotoLightBox={() => {
                  $isOpenLightBox((cur) => !cur);
                  $selectedImage(index);
                }}
              />
            </li>
          </AnimateInView>
        ))}
      </ol>
    </div>
  );
};

export default SideProjects;
