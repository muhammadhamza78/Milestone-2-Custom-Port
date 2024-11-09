import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import About from "@/components/About";



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
