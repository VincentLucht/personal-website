import '@/code/About/about.css';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation('about');

  return (
    <div className="mt-32" id="about">
      <h2 className="header">{t('about')}</h2>

      <div className="about">
        <span>{t('p1')}</span>

        <span className="my-4">{t('p2')}</span>

        <span>{t('p3')}</span>
      </div>
    </div>
  );
}
