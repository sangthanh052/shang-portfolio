import MenuDesktop from "./menu-desk";
import MenuMobile from "./menu-mob";
import { AnimateInView } from "./ui/animate-in-view";

function Header() {
  return (
    <header className="supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg">
      <AnimateInView>
        <div className="hidden lg:block">
          <MenuDesktop />
        </div>
        <div className="block lg:hidden">
          <MenuMobile />
        </div>
      </AnimateInView>
    </header>
  );
}

export default Header;
