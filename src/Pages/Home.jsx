import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProjectsSection from "../Components/ProjectsSection";
import HeroSection from "../Components/HeroSection";
import GoToTop from "../GotoTop";

function Home() {
  GoToTop();
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
