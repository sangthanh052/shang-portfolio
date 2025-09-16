import { Project, Side } from "@/apis/profile.api";
import FsLightbox from "fslightbox-react";
import { Suspense, useMemo, useState } from "react";
import BaseProjectCard from "./base-project-card";
import { AnimateInView } from "./ui/animate-in-view";

const BaseProjects = ({ data }: { data: Side[] | Project[] }) => {
  const [isOpenLightBox, $isOpenLightBox] = useState(false);
  const [selectedImageIndex, $selectedImage] = useState(0);

  const images = useMemo(() => {
    return data?.map((e) => `${e.image}`) ?? [];
  }, [data]);

  return (
    <div>
      <Suspense fallback={<div />}>
        <FsLightbox
          toggler={isOpenLightBox}
          sources={images}
          sourceIndex={selectedImageIndex}
        />
      </Suspense>

      <div className="gap-2 overflow-hidden list-none py-3">
        {data?.map((item, index) => (
          <AnimateInView key={index}>
            <div className="px-6 py-3 cursor-pointer">
              <BaseProjectCard
                {...item} //spead bung object thanh nhieu props
                onOpenPhotoLightBox={() => {
                  $isOpenLightBox((cur) => !cur);
                  $selectedImage(index);
                }}
              />
            </div>
          </AnimateInView>
        ))}
      </div>
    </div>
  );
};

export default BaseProjects;
