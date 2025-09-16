import { AppContext } from "@/contexts/app.context";
import { useContext } from "react";
import Company from "./company-item";
import { AnimateInView } from "./ui/animate-in-view";

const Companies = () => {
  const { profile } = useContext(AppContext);

  return (
    <div className="gap-2 overflow-hidden list-none py-3">
      {profile &&
        profile.companies.map((e, index) => (
          <AnimateInView key={index}>
            <div className="px-6 py-3">
              <Company {...e} />
            </div>
          </AnimateInView>
        ))}
    </div>
  );
};

export default Companies;
