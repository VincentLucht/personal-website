import '@/code/Header/header.css';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '@/code/Header/LanguageToggle';

export default function Header() {
  const { t } = useTranslation('header');

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
      {/* <a target="_blank" href="https://github.com/VincentLucht" rel="noreferrer">
        <img src="omega.png" alt="Omega symbol" className="h-[40px]" />
      </a> */}
      <LanguageToggle />

      <div>
        <button className="header-btn" onClick={() => scrollToSection('skills')}>
          Skills
        </button>

        <button className="header-btn" onClick={() => scrollToSection('projects')}>
          {t('projects')}
        </button>

        <button className="header-btn" onClick={() => scrollToSection('about')}>
          {t('about')}
        </button>

        <button className="header-btn" onClick={() => scrollToSection('contact')}>
          {t('contact')}
        </button>
      </div>
    </header>
  );
}
