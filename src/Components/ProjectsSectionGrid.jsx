import styled from "styled-components";

const ProjectsSectionGridStyled = styled.div`
  --columns: 1;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 2rem;
`;

function ProjectsSectionGrid() {
  return <ProjectsSectionGridStyled></ProjectsSectionGridStyled>;
}

export default ProjectsSectionGrid;
