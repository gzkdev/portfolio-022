import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AboutSection from "../Components/AboutSection";
import ContactSection from "../Components/ContactSection";
import GoToTop from "../GotoTop";

function About() {
  GoToTop();
  return (
    <>
      <Header />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default About;
