import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import useGetScreenSize from '@/code/hooks/useGetScreenSize';
import Typed from 'typed.js';
import '@/css/App.css';

export default function Intro() {
  const typedRef = useRef(null);
  const { t } = useTranslation('intro');
  const { width } = useGetScreenSize();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['front-end', 'back-end', 'full-stack'],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      backDelay: 1500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={`mb-[120px] mt-[100px] df ${width <= 500 ? 'text-center' : ''}`}>
      <h1 className="flex flex-col text-6xl">
        <div>
          {t('greeting')} <span className="wave">👋</span> {t('name')}
        </div>

        <div className={`flex ${width <= 500 ? 'justify-center' : ''}`}>
          {t('article')}
          <div ref={typedRef} className="ml-3 text-blue-500" id="typed"></div>
        </div>

        <div>web developer.</div>
      </h1>
    </div>
  );
}
