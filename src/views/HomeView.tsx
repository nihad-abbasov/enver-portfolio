import { About } from "@/components/home_sections/About";
import { Contact } from "@/components/home_sections/Contact";
import { Hero } from "@/components/home_sections/Hero";
import { Projects } from "@/components/home_sections/Projects";
import { Skills } from "@/components/home_sections/Skills";

export const HomeView = () => {
  return (
    <section>
      <div className="home_inner flex flex-col gap-3">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </section>
  );
};
