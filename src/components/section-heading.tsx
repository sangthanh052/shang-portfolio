import { Reveal } from "./ui/reveal";

interface propsType {
  index: string;
  title: string;
  reverse?: boolean;
}

function SectionHeading({ index, title, reverse = false }: propsType) {
  return (
    <div
      className={`p-3 md:p-6 flex items-center gap-6 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-full h-[1px] bg-foreground opacity-30"></div>
      <Reveal>
        <div className="flex items-center whitespace-nowrap">
          <span className="c1">{index}.</span>
          <span className="text-2xl lg:text-6xl font-extrabold">
            {title}
            <span className="text-primary">.</span>
          </span>
        </div>
      </Reveal>
    </div>
  );
}

export default SectionHeading;
