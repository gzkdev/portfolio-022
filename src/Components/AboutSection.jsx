import styled from "styled-components";

import { AboutMeStories } from "../AppData";

const AboutSectionStyled = styled.section`
  max-width: 800px;

  & > div {
    position: relative;
    padding: 4rem 2rem;
    margin-top: 2rem;
    margin-bottom: 6rem;
    background-color: var(--color-710);
    border-radius: 8px;
    margin: 4rem 0 0 0;
    padding: 4rem min(5vw, 2rem);

    & span {
      text-transform: uppercase;
      font-size: var(--font-s1ze-200);
    }
  }

  & h4 {
    margin: 0.5rem 0 1rem;
    color: var(--color-110);
    font-size: var(--font-s1ze-500);
  }
`;

function AboutSection() {
  return (
    <AboutSectionStyled>
      <h1>About Me</h1>
      {AboutMeStories.map((story, index) => (
        <div key={index}>
          <span>{story.title}</span>
          <h4>{story.heading}</h4>
          <p>{story.paragraph}</p>
          {story.ref_url && <a href={story.ref_url}></a>}
        </div>
      ))}
    </AboutSectionStyled>
  );
}

export default AboutSection;
