import { cn } from "@/lib/utils";

const List = ({
  data,
  label,
  className,
}: {
  label: string;
  data?: string[];
  className?: string;
}) => {
  return (
    data && (
      <>
        <div className={cn("item-desc", className)}>
          {label ? label + ":" : ""}
        </div>
        <ul className="list-disc mb-2 list-outside pl-[18px]">
          {data?.map((e, index) => (
            <li key={index}>
              <span className={cn("item-desc", className)}>{e}</span>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default List;
