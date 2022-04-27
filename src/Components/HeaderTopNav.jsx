import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderTopNavStyled = styled.nav`
  display: none;
  flex: 1;
  margin: 0 2rem;

  & ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
  }

  & a {
    display: inline-block;
    padding: 0 2rem;
    text-decoration: none;
    color: var(--color-900);
    font-size: var(--font-sze-100);
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

function HeaderTopNav() {
  return (
    <HeaderTopNavStyled>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </HeaderTopNavStyled>
  );
}

export default HeaderTopNav;
