import '@/code/Header/header.css';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header>
      <a target="_blank" href="https://github.com/VincentLucht" rel="noreferrer">
        <img src="omega.png" alt="Omega symbol" className="h-[40px]" />
      </a>

      <div>
        <button onClick={() => scrollToSection('skills')}>Skills</button>

        <button onClick={() => scrollToSection('projects')}>Projects</button>

        <button onClick={() => scrollToSection('about')}>About</button>

        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </header>
  );
}
