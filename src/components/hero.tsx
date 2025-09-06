import { motion } from "framer-motion";
import { useMemo } from "react";

import useSanitize from "@/hooks/useSanitize";
import { menubar } from "@/constants/menubar";
import ChangeThemeBtn from "../components/change-theme-btn";
import SparklesButton from "../components/resume-btn";
import ShortAnEmailBtn from "../components/short-an-email-btn";
import SocialList from "../components/social-list";
import { FlipWords } from "../components/ui/flip-words";
import { Reveal } from "../components/ui/reveal";
import { bio, name, role, skills } from "../content.json";

interface propsType {
  refs: {
    about: React.RefObject<HTMLDivElement | null>;
    exp: React.RefObject<HTMLDivElement | null>;
    project: React.RefObject<HTMLDivElement | null>;
    personal: React.RefObject<HTMLDivElement | null>;
  };
  isActive: string;
}

function Herro({ refs, isActive }: propsType) {
  const sanitizedContent = useSanitize(name);
  const sanitizedRole = useSanitize(role);
  const sanitizedBio = useSanitize(bio);
  const words = ["SangNguyen", "ShangDev"];
  const menu = useMemo(() => {
    return [
      { ref: refs.about, active: menubar.about, label: "🤔 about" },
      { ref: refs.exp, active: menubar.exp, label: "🧑‍💻 experience" },
      {
        ref: refs.project,
        active: menubar.project,
        label: "💻 participated projects",
      },
      {
        ref: refs.personal,
        active: menubar.personal,
        label: "💪 personal projects",
      },
    ];
  }, [refs]);
  return (
    <>
      <div className="flex flex-col gap-2.5">
        <Reveal>
          <p className="c1">Hi, I am</p>
        </Reveal>
        <Reveal>
          <div className="marker-variation">
            <h2 dangerouslySetInnerHTML={sanitizedContent}></h2>
          </div>
        </Reveal>
        <Reveal>
          <p className="t4" dangerouslySetInnerHTML={sanitizedRole} />
        </Reveal>
        <Reveal>
          <p className="t5" dangerouslySetInnerHTML={sanitizedBio} />
        </Reveal>
        <Reveal>
          <p className="t4 text-primary font-code">{`// ${skills}`}</p>
        </Reveal>
      </div>

      <Reveal>
        <div className="flex flex-col gap-2 w-max">
          {menu.map((e, index) => (
            <div
              key={index}
              className="t4 cursor-pointer"
              onClick={() => {
                console.log(isActive);
                e.ref.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <motion.div
                whileHover={{ scale: 1.025 }}
                animate={{ opacity: isActive === e.active ? 1 : 0.5 }}
              >
                <span className="c1">0{index + 1}</span> {e.label}
              </motion.div>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <SparklesButton />
      </Reveal>
      <Reveal>
        <SocialList />
      </Reveal>
      <Reveal>
        <ShortAnEmailBtn />
      </Reveal>

      <ChangeThemeBtn />

      <Reveal>
        <div className="t5 text-muted-foreground/40">
          Designed & Developed by
          <FlipWords
            duration={1000}
            className="text-primary font-semibold"
            words={words}
          />
        </div>
      </Reveal>
    </>
  );
}

export default Herro;
