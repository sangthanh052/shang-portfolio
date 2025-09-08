import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Card: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "group lg:before:purple lg:hover:before:blur-md relative bg-accent transform-3d rounded-3xl animate-swipe",
        className,
      )}
    >
      <div className="duration-100 lg:group-hover:bg-primary/5 overflow-hidden h-auto rounded-[inherit]">
        {children}
      </div>
    </div>
  );
};

export default Card;
