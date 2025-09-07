import Logo from "./logo";
import NavHeader from "./nav-header";

function MenuDesktop() {
  return (
    <div className="flex h-16 items-center container mx-auto">
      <Logo />
      <NavHeader />
    </div>
  );
}

export default MenuDesktop;
