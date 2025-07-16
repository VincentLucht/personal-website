import '@/code/Header/header.css';
import useGetScreenSize from '@/code/hooks/useGetScreenSize';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import LanguageToggle from '@/code/Header/LanguageToggle';

export default function Header() {
  const { t } = useTranslation('header');
  const { width } = useGetScreenSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    if (width <= 700) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getHamburgerTooltipClasses = () => {
    const baseClasses =
      'pointer-events-none absolute z-10 whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100';
    return `${baseClasses} right-full top-1/2 mr-3 -translate-y-1/2 transform`;
  };

  const getHamburgerTriangleClasses = () => {
    const baseClasses = 'absolute h-2 w-2 rotate-45 bg-gray-700';
    return `${baseClasses} -right-1 top-1/2 -translate-y-1/2 transform`;
  };

  return (
    <header>
      <LanguageToggle />
      {width > 700 ? (
        // Desktop menu
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
      ) : (
        // Mobile hamburger menu
        <div className="mobile-menu-container">
          <div className="group relative">
            <button
              className="hamburger-btn"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
            {/* Hamburger Tooltip */}
            <div className={getHamburgerTooltipClasses()}>
              {isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              <div className={getHamburgerTriangleClasses()}></div>
            </div>
          </div>
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <button
              className="mobile-menu-btn"
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
            <button
              className="mobile-menu-btn"
              onClick={() => scrollToSection('projects')}
            >
              {t('projects')}
            </button>
            <button
              className="mobile-menu-btn"
              onClick={() => scrollToSection('about')}
            >
              {t('about')}
            </button>
            <button
              className="mobile-menu-btn"
              onClick={() => scrollToSection('contact')}
            >
              {t('contact')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
