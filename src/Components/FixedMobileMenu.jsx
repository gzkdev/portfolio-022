import { Link } from "react-router-dom";
import styled from "styled-components";

const FixedMobileMenuStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-700);
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate(-100%, 0);
  transition: transform 400ms;
  z-index: 99;

  &.active {
    transform: translate(0, 0);
  }

  & span {
    text-transform: uppercase;
  }

  & a {
    text-decoration: none;
    color: var(--color-110);
  }

  & ul li {
    list-style: none;
    margin: 1rem 0;
  }

  & > div:nth-child(1) {
    width: 100%;
    margin-bottom: 2rem;

    & a {
      font-size: var(--font-s1ze-800);
      text-transform: uppercase;
    }
  }
`;

function FixedMobileMenu({ isActive }) {
  return (
    <FixedMobileMenuStyled className={isActive && "active"}>
      <div>
        <span>Navigation</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div>
        <span>Socials</span>
        <ul>
          <li>
            <a
              href="https://twitter.com/gzkdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/ezihe-godswill"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/gzkdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/gzkdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codepen
            </a>
          </li>
        </ul>
      </div>
    </FixedMobileMenuStyled>
  );
}

export default FixedMobileMenu;
