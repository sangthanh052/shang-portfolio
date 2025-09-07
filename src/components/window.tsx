import Prism from "prismjs";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/plugins/autolinker/prism-autolinker.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
import "prismjs/themes/prism-okaidia.min.css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { externals, internal } from "../constants/urls";

const content = `/*
  author: Nguyen Thanh Sang (Shang)
  description: My profile as a Front End Developer
  homepage: https://shangdev.io.vn
  repository: https://github.com/sangthanh052/shangdev-portfolio
*/
const my_profile: IGoodDeveloper = {
  fullname: 'Nguyen Thanh Sang (Shang)',
  title: 'Senior Front-End Developer',
  yoe: '5+',
  skills: {
    languages: ['JavaScript (ES6+)', 'TypeScript', 'Liquid (Shopify)', 'Salesforce (SFRA)'],
    frontend: [
      'ReactJS', 'NextJS', 'Redux/Toolkit', 'Context API', 'React Query',
      'React Hook Form', 'Zod/Yup', 'Lodash', 'Immer'
    ],
    APIsAndNetworking: ['RESTful APIs', 'Axios', 'Fetch'],
    UIAndStyling: [
      'Tailwind CSS', 'Ant Design', 'ShadcnUI', 'MagicUI',
      'Chakra UI', 'Bootstrap', 'SCSS Modules', 'Styled Components'],
    Testing: ['Jest', 'Vitest', 'React Testing Library (RTL)', 'MSW', 'Snapshot Testing'],
    BuildAndTools: ['Vite', 'Webpack', 'Babel'],
    VersionControlAndWorkflow: [
      'Git', 'GitHub', 'Bitbucket',
      'Agile/Scrum methodologies', 'Jira'
    ]
  },
  Other: [
    'Design Patterns', 'Atomic Design', 'Mobile-First UI', 'Lazy loading', 'Memoization',
    'Figma', 'Zeplin', 'Photoshop', 'Illustrator', 'Canva'
  ]
  
};`;

const Window = () => {
  const [code] = useState(content);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="flex-1 z-20">
      <div className="bg-gray-950 relative">
        <div className="flex items-center bg-background border-b border-b-primary py-0.5">
          <div className="px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full hover:scale-125 duration-100 animate-ease-out bg-red-500"></div>
            <div className="w-3 h-3 rounded-full hover:scale-125 duration-100 animate-ease-out bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full hover:scale-125 duration-100 animate-ease-out bg-green-500"></div>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs lg:text-sm leading-normal text-foreground flex items-center font-code p-2 bg-primary/40 rounded-md">
              <span className="text-code-editor-value">{`{{gateway}}`}</span>
              /auth/me
            </span>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="p-2 bg-primary/10 hover:bg-primary/40 duration-100 rounded-md">
                    <a
                      href={externals.linkedin}
                      target="_blank"
                      className="text-sm leading-normal text-foreground flex items-center font-code"
                    >
                      <FaLinkedinIn className="w-4 h-4 text-foreground" />
                      <span className="hidden lg:block">/@sangthanh052</span>
                    </a>
                  </div>
                </TooltipTrigger>
                <TooltipContent>My Linkedin</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="p-2 bg-primary/10 hover:bg-primary/40 duration-100 rounded-md">
                    <a
                      href={externals.github}
                      target="_blank"
                      className="text-sm leading-normal text-foreground flex items-center font-code"
                    >
                      <FaGithub className="w-4 h-4 text-foreground" />
                      <span className="hidden lg:block">/@sangthanh052</span>
                    </a>
                  </div>
                </TooltipTrigger>
                <TooltipContent>My Github</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="p-2 bg-primary/10 hover:bg-primary/40 duration-100 rounded-md">
                    <Link
                      to={internal.cv}
                      target="_blank"
                      className="text-sm leading-normal text-foreground flex items-center font-code"
                    >
                      <FaUserCircle className="w-4 h-4 text-foreground" />
                      <span className="hidden lg:block">/resume</span>
                    </Link>
                  </div>
                </TooltipTrigger>
                <TooltipContent>My Resume</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <pre className="line-numbers code-editor" data-language="JavaScript">
          <code className="language-javascript !text-foreground">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default Window;
