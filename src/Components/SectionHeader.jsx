import styled from "styled-components";

const SectionHeaderStyled = styled.div`
  padding-bottom: 2rem;
  max-width: 1000px;

  & span {
    font-size: var(--font-sze-100);
    text-transform: uppercase;
    display: block;
    margin-bottom: 1rem;
  }

  & h2 {
    margin-bottom: 1rem;
  }

  & p {
    max-width: 560px;
  }
`;

function SectionHeader(props) {
  const { title, heading, paragraph } = props;
  return (
    <SectionHeaderStyled>
      {title && <span>{title}</span>}
      {heading && <h2>{heading}</h2>}
      {paragraph && <p>{paragraph}</p>}
    </SectionHeaderStyled>
  );
}

export default SectionHeader;
