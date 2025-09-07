import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AnimateInView } from "./ui/animate-in-view";
import Window from "./window";

const About = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, theme]);

  return (
    <div className="flex flex-col gap-2 relative bg-background">
      <div
        className="max-w-[10rem] w-full h-auto absolute right-4 -translate-y-full"
        ref={ref}
      >
        <div className="w-full flex items-end relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              variants={{
                hidden: { opacity: [1, 0], y: [0, 80, 120] },
                visible: { opacity: [0, 1], y: [120, 80, 0] },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <LazyLoadImage
                alt="Avatar"
                src={
                  theme === "dark"
                    ? "/assets/images/avatar.png"
                    : "/assets/images/avatar-light.png"
                }
                className="object-contain w-full h-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="border border-primary flex flex-col rounded-md overflow-hidden">
        <AnimateInView>
          <Window />
        </AnimateInView>
      </div>
    </div>
  );
};

export default About;
