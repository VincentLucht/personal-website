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

  return (
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
  );
}
