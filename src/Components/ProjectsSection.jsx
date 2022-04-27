import styled from "styled-components";
import ProjectsGrid from "./ProjectsSectionGrid";
import SectionHeader from "./SectionHeader";

const ProjectsSectionStyled = styled.section`
  max-width: 1200px;
  padding-top: 0;
`;

function ProjectsSection() {
  return (
    <ProjectsSectionStyled>
      <SectionHeader title="Projects" />
      <ProjectsGrid />
    </ProjectsSectionStyled>
  );
}

export default ProjectsSection;
