import AboutPage from "@/components/AboutPage";
import HeroPage from "@/components/HeroPage";
import Project from "@/components/Project";
import SkillPage from "@/components/SkillPage";
import Footer from "@/components/Footer";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroPage />
      <AboutPage />
      <SkillPage />
      <Project />
      <Education />
      <Footer />
    </main>
  );
}
