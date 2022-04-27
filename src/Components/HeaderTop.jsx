import { useState } from "react";
import styled from "styled-components";
import HeaderTopLogo from "./HeaderTopLogo";
import HeaderTopMenuButton from "./HeaderTopMenuButton";
import HeaderTopNav from "./HeaderTopNav";

const HeaderTopStyled = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 1200px;
  min-height: 100px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  transform: translate(-50%, 0);
`;

function HeaderTop() {
  const [isActive, setIsActive] = useState(false);
  return (
    <HeaderTopStyled>
      <HeaderTopLogo />
      <HeaderTopNav />
      <HeaderTopMenuButton isActive={isActive} setIsActive={setIsActive} />
    </HeaderTopStyled>
  );
}

export default HeaderTop;
