import { About } from "@/components/About";
import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { ThemeToggle } from "@/components/ThemeToggle";

function Divider() {
  return <div aria-hidden="true" className="mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-line to-transparent" />;
}

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <ThemeToggle />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
      <footer className="border-t border-line px-5 py-12 text-center text-sm text-fg-3">
        Designed &amp; Built with <span className="text-gradient font-semibold">passion</span> &copy;{" "}
        {new Date().getFullYear()} · Next.js, React &amp; Tailwind
      </footer>
    </>
  );
}
