import styled from "styled-components";
import HeaderTopLogo from "./HeaderTopLogo";

const HeaderTopStyled = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  min-height: 100px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  transform: translate(-50%, 0);
`;

function HeaderTop() {
  return (
    <HeaderTopStyled>
      <HeaderTopLogo />
    </HeaderTopStyled>
  );
}

export default HeaderTop;
