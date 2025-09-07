import { AppContext } from "@/contexts/app.context";
import { useContext } from "react";
import Company from "./company-item";
import { AnimateInView } from "./ui/animate-in-view";

const Companies = () => {
  const { profile } = useContext(AppContext);

  return (
    <ol className="gap-2 overflow-hidden list-none group/list">
      {profile &&
        profile.companies.map((e, index) => (
          <AnimateInView key={index}>
            <li className="lg:hover:opacity-100! lg:group-hover/list:opacity-60 duration-100">
              <Company {...e} />
            </li>
          </AnimateInView>
        ))}
    </ol>
  );
};

export default Companies;
