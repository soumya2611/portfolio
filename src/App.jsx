import React from "react";
import { motion, useScroll } from "framer-motion"; // Note: should be "framer-motion"
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHero from "./components/heroSection/SubHero";
import AboutMain from "./components/about/AboutMain";
// import HelperSection from "./components/HelperSection";
import SkillMain from "./components/skills/SkillMain";
import ProjectsMain from "./components/projects/ProjectsMain";
import ContactMain from "./components/contact/ContactMain";
import FooterMain from "./components/footer/FooterMain";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <main className="text-white relative overflow-hidden">
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="bg-cyan origin-left w-full fixed h-1.5 top-0 left-0  z-10"
      />
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHero />
      <AboutMain />
      {/* <HelperSection /> */}
      <SkillMain />
      <ProjectsMain />
      <ContactMain />
      <FooterMain />
    </main>
  );
};

export default App;
