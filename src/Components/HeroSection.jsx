import styled from "styled-components";

const HeroSectionStyled = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 8rem 1rem; */
  max-width: 1200px;
  margin: 0 auto;

  & > div {
    max-width: 1000px;

    & p {
      hyphens: auto;
      margin: 2rem 0;
    }
  }
`;

function HeroSection() {
  return (
    <HeroSectionStyled>
      <div>
        <span>Hello there 👋🏾,</span>
        <h1>
          I'm Godswill Ezihe.
          <span>I build Stuff that runs on your Web Browser.</span>
        </h1>
        <p>
          I'm a Front-end software engineer currently based in Nigeria. My focus
          is on building scalable, accessible and performant web applications
          that people love to interact with. Although I'm not a professional
          designer, sometimes you will find me tinkering on Figma. My love for
          Front-end engineering lies in learning and building applications
          people will actually love to use.
        </p>
        {/* <div class="cta__container">
            <a href="#" class="cta">Get in touch</a>
          </div> */}
      </div>
    </HeroSectionStyled>
  );
}

export default HeroSection;
