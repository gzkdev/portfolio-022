import styled from "styled-components";

const LogoStyled = styled.div`
  font-weight: bold;
  text-decoration: none;
  font-size: var(--font-sze-200);
  color: var(--color-110);
  display: block;
  height: 40px;
  min-width: 128px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  & span {
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    transition: transform 400ms, opacity 200ms;

    &:nth-child(2) {
      transform: translate(0, 100%);
      opacity: 0;
    }

    &:hover span:nth-child(1) {
      transform: translate(0, -100%);
      opacity: 0;
    }

    &:hover span:nth-child(2) {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;

function Logo() {
  return (
    <LogoStyled>
      <span>Godswill</span>
      <span>Go away! 👻</span>
    </LogoStyled>
  );
}

export default Logo;
