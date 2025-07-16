import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enHeader from '@/locales/Header/enHeader.json';
import deHeader from '@/locales/Header/deHeader.json';

import enIntro from '@/locales/Intro/enIntro.json';
import deIntro from '@/locales/Intro/deIntro.json';

import enSkills from '@/locales/Skills/enSkills.json';
import deSkills from '@/locales/Skills/deSkills.json';

import enProjects from '@/locales/Projects/enProjects.json';
import deProjects from '@/locales/Projects/deProjects.json';

import enAbout from '@/locales/About/enAbout.json';
import deAbout from '@/locales/About/deAbout.json';

import enContact from '@/locales/Contact/enContact.json';
import deContact from '@/locales/Contact/deContact.json';

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        header: enHeader,
        intro: enIntro,
        skills: enSkills,
        projects: enProjects,
        about: enAbout,
        contact: enContact,
      },
      de: {
        header: deHeader,
        intro: deIntro,
        skills: deSkills,
        projects: deProjects,
        about: deAbout,
        contact: deContact,
      },
    },
    fallbackLng: 'en',

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },

    supportedLngs: ['en', 'de'],
  });
