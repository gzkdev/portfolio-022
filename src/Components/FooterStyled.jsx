import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  padding: 2rem 1rem;

  & a {
    position: relative;
    display: block;
    width: fit-content;
    text-decoration: none;
    color: inherit;
    margin-bottom: 2rem;
  }

  & > div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 2rem;
      border-bottom: 1px solid var(--color-800);

      & a::before {
        content: "Email";
        font-size: var(--font-s1ze-200);
        color: var(--color-900);
        display: block;
        margin-bottom: 0.5rem;
      }

      & a:nth-child(2)::before {
        content: "Phone number";
      }

      & a::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: currentColor;
        border-radius: 4px;
        transform: scaleX(1);
        transition: transform 400ms;
        transform-origin: left;
      }

      & a:hover::after {
        transform: scaleX(0);
        transform-origin: right;
      }

      & > div:nth-child(2)::before {
        content: "Location";
        font-size: var(--font-s1ze-200);
        color: var(--color-900);
        display: block;
        margin-bottom: 0.5rem;
      }

      @media (min-width: 540px) {
        flex-direction: row;
        align-items: baseline;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      padding: 2rem 0;
      font-size: var(--font-s1ze-200);

      & ul {
        list-style: none;
        display: flex;
        width: 100%;
        max-width: 400px;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
      }

      @media (min-width: 540px) {
        flex-direction: row;

        ul {
          margin-top: 0;
        }
      }
    }
  }
`;

export default FooterStyled;
