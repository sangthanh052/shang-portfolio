import DOMPurify from "dompurify";
import React from "react";
import Card from "./card";

import Techs from "./techs";
import { Reveal } from "./ui/reveal";

const Company: React.FC<{
  time: string;
  company: string;
  url?: string;
  role?: string;
  job: string[];
  description: string;
  domains?: string;
  techs: string[];
}> = ({ time, company, url, role, description, job, domains, techs }) => {
  return (
    <Card className="lg:before:fuchsia">
      <div className="grid grid-cols-12 p-3 md:p-6">
        <div className="col-span-12 md:col-span-3">
          <p className="t6 text-muted-foreground md:mt-1">{time}</p>
        </div>
        <div className="col-span-12 md:col-span-9 md:ml-4">
          <div className="flex flex-col">
            <Reveal once={true}>
              <a
                target="_blank"
                href={url ?? "#"}
                className="t4 leading-7 font-medium mb-2 w-auto"
                aria-label="Home"
              >
                {role ? `${role}, ` : ""}
                <span className="text-normal-primary font-semibold">{company}</span>
              </a>
            </Reveal>

            <Reveal once={true}>
              <div className="item-desc mb-2">{description}</div>
            </Reveal>

            <div className="item-desc mb-2">
              {domains ? "Domains: " + domains : ""}
            </div>

            <Reveal once={true}>
              <ul className="list-disc list-outside t5 pl-[18px]">
                {job.map((e, index) => (
                  <li key={index} className="mb-2">
                    <div
                      className="item-desc"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(e),
                      }}
                    ></div>
                  </li>
                ))}
              </ul>
            </Reveal>
            
            <Reveal once={true}>
              <Techs techs={techs} />
            </Reveal>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Company;
