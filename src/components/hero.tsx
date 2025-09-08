import { motion } from "framer-motion";
import { useContext, useMemo } from "react";

import { menubar } from "@/constants/menubar";
import { AppContext } from "@/contexts/app.context";
import useSanitize from "@/hooks/useSanitize";
import { Link } from "react-router-dom";
import ChangeThemeBtn from "../components/change-theme-btn";
import ShortAnEmailBtn from "../components/short-an-email-btn";
import SocialList from "../components/social-list";
import { FlipWords } from "../components/ui/flip-words";
import { Reveal } from "../components/ui/reveal";
import { AnimateInView } from "./ui/animate-in-view";
import { AuroraText } from "./ui/aurora-text";
import { SparklesText } from "./ui/sparkle";

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
  const { profile } = useContext(AppContext);

  const sanitizedRole = useSanitize(profile?.role);
  const sanitizedBio = useSanitize(profile?.bio);
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
          <h1 className="marker-variation text-4xl leading-normal">
            <AuroraText>{profile?.name}</AuroraText>
          </h1>
        </Reveal>
        <Reveal>
          <p className="t4" dangerouslySetInnerHTML={sanitizedRole} />
        </Reveal>
        <Reveal>
          <p className="t5" dangerouslySetInnerHTML={sanitizedBio} />
        </Reveal>
        <Reveal>
          <p className="t4 text-primary font-code">{`// ${profile?.skills}`}</p>
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

      <AnimateInView>
        <SparklesText
          colors={{ first: "var(--primary)", second: "var(--primary-darker)" }}
          animationSpeed={2}
        >
          <Link
            to=""
            target="_blank"
            className="t5 font-normal text-white px-6 py-3 z-10 relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-linear-to-r from-primary to-primary-foreground focus:ring-0 focus:outline-hidden shadow-lg shadow-primary/40"
          >
            My Resume
          </Link>
        </SparklesText>
      </AnimateInView>

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
