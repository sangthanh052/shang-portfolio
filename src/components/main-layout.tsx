import { ReactNode } from "react";

import Header from "./header";
import RootLayout from "./root-layout";
import Surface from "./surface";
import { ScrollProgress } from "./ui/scroll-progress";

const MainLayout: React.FC<{ children: ReactNode; hideProgress?: boolean }> = ({
  children,
  hideProgress = false,
}) => {
  return (
    <RootLayout>
      <Header />
      <main
        className="relative bg-pane"
        style={{ backgroundSize: "55px 45px" }}
      >
        <Surface />

        <div className="bg-pane-html">
          {!hideProgress && <ScrollProgress />}

          <div className="min-h-screen max-w-(--breakpoint-2xl) w-full flex flex-col mx-auto px-4 sm:px-8 md:px-12 lg:px-12 xl:px-24 py-0">
            {children}
          </div>
        </div>
      </main>
    </RootLayout>
  );
};

export default MainLayout;
