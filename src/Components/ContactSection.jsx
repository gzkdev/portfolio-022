import styled from "styled-components";
import CallToActionDiv from "./CallToActionDiv";
import SectionHeader from "./SectionHeader";

const ContactSectionStyled = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`;

function ContactSection() {
  const heading = "Get in touch";
  const paragraph = `Whether you have a project you want me to work on or you just wanna say "Hi", feel free to reach out to me by clicking the blue button below.`;

  return (
    <ContactSectionStyled>
      <SectionHeader title="Contact" heading={heading} paragraph={paragraph} />
      <CallToActionDiv text="Contact me" />
    </ContactSectionStyled>
  );
}

export default ContactSection;
