import { useState } from "react";

import FixedMobileMenu from "./FixedMobileMenu";
import HeaderTop from "./HeaderTop";
import HeroSection from "./HeroSection";

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header>
      <HeaderTop isActive={isActive} setIsActive={setIsActive} />
      <FixedMobileMenu isActive={isActive}></FixedMobileMenu>
      <HeroSection />
    </header>
  );
}

export default Header;
