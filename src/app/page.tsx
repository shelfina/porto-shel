import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/common/ScrollProgress";
import BackToTop from "@/components/common/BackToTop";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import KeyAchievements from "@/components/sections/KeyAchievements";
import Experience from "@/components/sections/Experience";
import Committee from "@/components/sections/Committee";
import Projects from "@/components/sections/Projects";
import Awards from "@/components/sections/Awards";
import EducationSkills from "@/components/sections/EducationSkills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main id="main-content">
        {/* 1. Hero (intro with photo) */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Key Achievements */}
        <KeyAchievements />

        {/* 4. Experience (vertical timeline) */}
        <Experience />

        {/* 5. Committee Experiences */}
        <Committee />

        {/* 6. Projects & Product Development */}
        <Projects />

        {/* 7. Honors & Awards */}
        <Awards />

        {/* 8. Education & Skills */}
        <EducationSkills />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      <BackToTop />
    </>
  );
}
