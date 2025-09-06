import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface PropsType {
  id: string;
  setActive: (id: string) => void;
  children: React.ReactNode;
}

export default function SectionSpy({ id, setActive, children }: PropsType) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    if (isInView && ref.current) {
      // setActive với id section hiện tại
      setActive(id);
    }
  }, [isInView, id, setActive]);

  return (
    <div ref={ref} className="pt-10">
      {children}
    </div>
  );
}
