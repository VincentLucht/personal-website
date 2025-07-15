import '@/css/App.css';
import Header from '@/code/Header/Header';
import Intro from '@/code/Intro';
import Skills from '@/code/Skills/Skills';
import Projects from '@/code/Projects/Projects';
import About from '@/code/About/About';
import Contact from '@/code/Contact/Contact';

export default function App() {
  return (
    <div>
      <Header />

      <div className="mx-auto max-w-[1200px]">
        <Intro />

        <Skills />

        <Projects />

        <About />

        <Contact />
      </div>
    </div>
  );
}
