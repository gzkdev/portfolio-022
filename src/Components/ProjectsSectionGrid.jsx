import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import { Projects } from "../AppData";

const ProjectsGridStyled = styled.div`
  --columns: 1;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 2rem;

  @media (min-width: 540px) {
    --columns: 2;
  }

  @media (min-width: 1200px) {
    --columns: 3;
  }
`;

function ProjectsGrid() {
  return (
    <ProjectsGridStyled>
      {Projects.map((content, index) => (
        <ProjectItem content={content} key={index} />
      ))}
    </ProjectsGridStyled>
  );
}

export default ProjectsGrid;
