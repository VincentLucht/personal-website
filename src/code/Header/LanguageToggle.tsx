import { useTranslation } from 'react-i18next';
import '@/code/Header/languageToggle.css';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isGerman = currentLanguage === 'de';

  const toggleLanguage = () => {
    const newLanguage = isGerman ? 'en' : 'de';
    void i18n.changeLanguage(newLanguage);
  };

  const getTooltipClasses = () => {
    const baseClasses =
      'pointer-events-none absolute z-10 whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100';
    return `${baseClasses} left-full top-1/2 ml-3 -translate-y-1/2 transform`;
  };

  const getTriangleClasses = () => {
    const baseClasses = 'absolute h-2 w-2 rotate-45 bg-gray-700';
    return `${baseClasses} -left-1 top-1/2 -translate-y-1/2 transform`;
  };

  const tooltipText = isGerman
    ? 'Change language to English'
    : 'Change language to German';

  return (
    <div className="group relative">
      <button
        onClick={toggleLanguage}
        aria-label={`Switch to ${isGerman ? 'English' : 'German'}`}
        className="language-toggle-button"
      >
        <div className="flag-container">
          <div className={`flag-slider ${isGerman ? 'show-german' : 'show-english'}`}>
            <div className="flag-item">
              <img src="/uk.svg" alt="English" className="h-7" />
            </div>
            <div className="flag-item">
              <img src="/deutschland.svg" alt="German" className="scale-[200%]" />
            </div>
          </div>
        </div>
      </button>

      {/* Tooltip */}
      <div className={getTooltipClasses()}>
        {tooltipText}
        <div className={getTriangleClasses()}></div>
      </div>
    </div>
  );
}
