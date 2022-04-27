import styled from "styled-components";
import CallToActionDiv from "./CallToActionDiv";
import SectionHeader from "./SectionHeader";

function ContactSection() {
  const heading = "Get in touch";
  const paragraph =
    "Whether you have a project you want me to work on or you just wanna say 'Hi', feel free to reach out to me by clicking the blue button below.";

  return (
    <section>
      <SectionHeader title="Contact" heading={heading} paragraph={paragraph} />
      <CallToActionDiv text="Contact me" />
    </section>
  );
}

export default ContactSection;
