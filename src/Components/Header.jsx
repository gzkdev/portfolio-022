import { useState } from "react";

import FixedMobileMenu from "./FixedMobileMenu";
import HeaderTop from "./HeaderTop";

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header>
      <HeaderTop isActive={isActive} setIsActive={setIsActive} />
      <FixedMobileMenu isActive={isActive}></FixedMobileMenu>
    </header>
  );
}

export default Header;
