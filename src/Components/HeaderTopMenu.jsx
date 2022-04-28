import styled from "styled-components";
import Logo from "./Logo";

const HeaderTopMenuStyled = styled.div`
  width: 100%;
  max-width: 1200px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  mix-blend-mode: exclusion;
  z-index: 100;
`;

function HeaderTopMenu() {
  return (
    <HeaderTopMenuStyled>
      <Logo />
    </HeaderTopMenuStyled>
  );
}

export default HeaderTopMenu;
