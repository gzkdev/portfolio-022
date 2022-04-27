import styled from "styled-components";

const ProjectItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem;
  background: var(--color-710);
  border-radius: 8px;

  & h4 {
    font-size: var(--font-sze-300);
  }

  & ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    font-size: var(--font-s1ze-200);
    font-family: "Courier New", Courier, monospace;
    margin-top: 0.5rem;

    & li:not(li:last-child)::after {
      content: "&";
      margin: 0 0.4rem;
      display: inline-block;
    }
  }

  & > div {
    margin-top: 1rem;
    margin-bottom: 2rem;

    @media (min-width: 540px) {
      font-size: var(--font-s1ze-200);
    }
  }

  & a {
    /* --font-s1ze-200 */
    font-size: var(--font-s1ze-200);
    letter-spacing: 0.4px;
    text-decoration: none;
    transition: 400ms color;
    color: var(--color-110);
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

function ProjectItem({ content }) {
  const { name, description, tags, url, repo_url } = content;
  return (
    <ProjectItemStyled>
      <h4>{name}</h4>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <div>
        <p>{description}</p>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </ProjectItemStyled>
  );
}

export default ProjectItem;
