import { useEffect } from "react";

const CVRedirect = () => {
  useEffect(() => {
    window.location.href = "/assets/sangnguyen-resume.pdf";
  }, []);

  return null;
};

export default CVRedirect;
