import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

function DefaultScrollProgress() {
  const [pagePercent, $pagePercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const percent = scrollPercent * 100;
      const scrollPercentRounded = Math.max(Number(percent.toFixed(2)), 0.1);
      $pagePercent(Math.ceil(scrollPercentRounded * 10) / 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LoadingBar
      color="var(--primary)"
      progress={pagePercent}
      shadow={true}
      waitingTime={10000000}
      loaderSpeed={0}
    />
  );
}

export default DefaultScrollProgress;
