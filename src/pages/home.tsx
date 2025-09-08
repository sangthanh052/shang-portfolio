import Herro from "@/components/hero";
import SectionSpy from "@/components/scroll-spy";
import SectionHeading from "@/components/section-heading";

import About from "@/components/about";
import { AppContext } from "@/contexts/app.context";
import { useContext, useRef, useState } from "react";
import BaseProjects from "../components/base-projects";
import Companies from "../components/companies";
import Layout from "../components/main-layout";
import { menubar } from "../constants/menubar";

function Main() {
  const [active, setActive] = useState("home");
  const { profile } = useContext(AppContext);

  const menuRefs = {
    about: useRef<HTMLDivElement>(null),
    exp: useRef<HTMLDivElement>(null),
    project: useRef<HTMLDivElement>(null),
    personal: useRef<HTMLDivElement>(null),
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 p-4 lg:sticky top-0 flex flex-col gap-4 lg:w-11/12 lg:pt-10 lg:pb-5 overflow-y-auto scroll-smooth-thin lg:h-fit">
          <Herro refs={menuRefs} isActive={active} />
        </div>

        <div className="lg:col-span-7 py-10 max-lg:pb-20 overflow-y-auto scroll-smooth-thin">
          <div ref={menuRefs.about}>
            <SectionSpy id={menubar.about} setActive={setActive}>
              <SectionHeading index="01" title="About me" reverse />
              <About />
            </SectionSpy>
          </div>

          <div ref={menuRefs.exp}>
            <SectionSpy id={menubar.exp} setActive={setActive}>
              <SectionHeading index="02" title="Experience" />
              <Companies />
            </SectionSpy>
          </div>

          {profile?.projects && (
            <div ref={menuRefs.project}>
              <SectionSpy id={menubar.project} setActive={setActive}>
                <SectionHeading index="03" title="Projects" reverse />
                <BaseProjects data={profile.projects} />
              </SectionSpy>
            </div>
          )}

          {profile?.sides && (
            <div ref={menuRefs.personal}>
              <SectionSpy id={menubar.personal} setActive={setActive}>
                <SectionHeading index="04" title="Personal projects" />
                <BaseProjects data={profile.sides} />
              </SectionSpy>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Main;
