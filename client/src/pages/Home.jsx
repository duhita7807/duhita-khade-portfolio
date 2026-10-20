import { lazy, Suspense } from "react";
import Hero from "../components/Hero.jsx";

const About = lazy(() => import("../components/About.jsx"));
const Skills = lazy(() => import("../components/Skills.jsx"));
const Projects = lazy(() => import("../components/Projects.jsx"));
const Experience = lazy(() => import("../components/Experience.jsx"));
const Achievements = lazy(() => import("../components/Achievements.jsx"));
const Education = lazy(() => import("../components/Education.jsx"));
const Resume = lazy(() => import("../components/Resume.jsx"));
const Contact = lazy(() => import("../components/Contact.jsx"));

const SectionFallback = () => (
  <div className="section-wrap py-20 text-center text-sm text-slate-500">Loading section...</div>
);

function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Resume />
        <Contact />
      </Suspense>
    </main>
  );
}

export default Home;
