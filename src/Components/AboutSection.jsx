import styled from "styled-components";

const AboutSectionStyled = styled.section`
  max-width: 1000px;

  & > div {
    position: relative;
    padding: 4rem 2rem;
    margin-top: 2rem;
    margin-bottom: 6rem;
    background-color: var(--color-710);
    border-radius: 8px;
    margin: 4rem 0;
    padding: 4rem min(10vw, 2rem);

    & span {
      text-transform: uppercase;
      font-size: var(--font-size-200);
    }

    & h3 {
      margin: 0.5rem 0 2rem;
      font-size: var(--font-size-800);
    }
  }
`;

function AboutSection() {
  return (
    <AboutSectionStyled>
      <h1>
        About<span>Godswill Ezihe</span>
      </h1>
      <div>
        <span>Engineering ⚛</span>
        <h3>The Technical Story</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad rerum
          voluptatem necessitatibus vel dicta architecto fuga impedit neque
          aliquid velit quos nam sequi iste earum eos voluptatum repellat nisi,
          eius at. Similique nam esse suscipit voluptatum nostrum odit hic
          incidunt cum consequuntur ipsam ratione fugiat perspiciatis placeat
          quam blanditiis et mollitia repellat quo eveniet ipsum, provident
          cumque, quasi facere adipisci. Dolore, odit quidem.
        </p>
      </div>
    </AboutSectionStyled>
  );
}

export default AboutSection;
