import styled from "styled-components";
import ProjectsSectionGrid from "./ProjectsSectionGrid";
import SectionHeader from "./SectionHeader";

const ProjectsSectionStyled = styled.section`
  max-width: 1200px;
  padding-top: 0;
`;

function ProjectsSection() {
  return (
    <ProjectsSectionStyled>
      <SectionHeader title="Projects" />
      <ProjectsSectionGrid />
    </ProjectsSectionStyled>
  );
}

export default ProjectsSection;
