import styled from "styled-components";

const HeaderTopMenuButtonStyled = styled.button`
  position: relative;
  --scale: 64px;
  width: var(--scale);
  height: var(--scale);
  background: none;
  color: var(--color-110);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 50%;
  transition: background-color 200ms, color 200ms;
  cursor: pointer;

  &.active {
    background-color: var(--color-300);
    color: var(--color-100);
  }

  &::before,
  &::after {
    content: "";
    width: 24px;
    height: 2px;
    position: absolute;
    background-color: currentColor;
    border-radius: 4px;
    transition: transform 400ms;
    transform-origin: center;
  }

  &::before {
    transform: translate(0, 4px);
  }

  &::after {
    transform: translate(0, -4px);
  }

  &.active::before {
    transform: translate(0, 0) rotate(-45deg);
  }

  &.active::after {
    transform: translate(0, 0) rotate(45deg);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

function HeaderTopMenuButton({ isActive, setIsActive }) {
  return (
    <HeaderTopMenuButtonStyled
      className={isActive && "active"}
      onClick={() => setIsActive(!isActive)}
    ></HeaderTopMenuButtonStyled>
  );
}

export default HeaderTopMenuButton;
