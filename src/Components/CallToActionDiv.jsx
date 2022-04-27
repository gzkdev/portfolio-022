import styled from "styled-components";

const CallToActionDivStyled = styled.div`
  position: relative;
  margin-top: 2rem;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 1px;
    background-color: var(--color-800);
    z-index: -1;
  }

  & a {
    --scale: min(50vw, 240px);
    position: relative;
    width: var(--scale);
    height: var(--scale);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-900);
    background-color: var(--color-300);
    text-decoration: none;
    margin-left: auto;
    margin-right: 3rem;
    font-weight: bold;
    letter-spacing: 0.4px;
    overflow: hidden;
    transition: 200ms;

    &::after {
      content: "";
      position: absolute;
      width: 130%;
      height: 100%;
      background-color: var(--color-110);
      transform: scaleY(0);
      border-radius: inherit;
      transform-origin: top;
      transition: transform 400ms;
    }

    &:hover {
      color: var(--color-700);
      z-index: 1;

      &::after {
        transform: scaleY(1);
        transform-origin: bottom;
        z-index: -1;
      }
    }
  }
`;

function CallToActionDiv({ text }) {
  return (
    <CallToActionDivStyled>
      <a href="mailto:ezihegodswill01@gmail.com">{text}</a>
    </CallToActionDivStyled>
  );
}

export default CallToActionDiv;
