import styled from "styled-components";

const ProjectItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem;
  background: var(--color-710);
  border-radius: 8px;

  & h4 {
    font-size: var(--font-sze-400);
  }

  & > div {
    font-size: var(--font-sze-200);
    margin-top: 1rem;
    margin-bottom: 2rem;

    & ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      font-size: var(--font-sze-200);
      font-family: "Courier New", Courier, monospace;
      margin-top: 1rem;

      & li {
        margin-right: 1rem;
      }
    }
  }

  & a {
    font-size: var(--font-sze-200);
    text-decoration: none;
    transition: 400ms color;
    color: var(--color-200);
    align-self: flex-start;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: currentColor;
      transform: scaleX(0);
      transition: transform 400ms;
      transform-origin: right;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

function ProjectItem() {
  return (
    <ProjectItemStyled>
      <h4>Octomigo</h4>
      <div>
        <p>
          Front-end web application to easilty fetch any Github user's profile
          without visiting the Github website.
        </p>
        <ul>
          <li>React</li>
          <li>GitHub API</li>
        </ul>
      </div>
      <a href="http://#" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </ProjectItemStyled>
  );
}

export default ProjectItem;
