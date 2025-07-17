import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Home
      'home.title': 'Bienvenue',
      'home.subtitle': 'Votre partenaire digital',
      'home.cta': 'Découvrir nos services',

      // Expertise
      'expertise.title': 'Nos Expertises',
      'expertise.subtitle': 'Des solutions adaptées à vos besoins',

      // Products
      'products.title': 'Nos Produits',
      'products.dmds.title': 'DMDS',
      'products.dmds.description': 'Solution innovante pour votre entreprise',

      // Contact
      'contact.title': 'Contactez-nous',
      'contact.form.name': 'Nom',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Envoyer',
    },
  },
  en: {
    translation: {
      // Home
      'home.title': 'Welcome',
      'home.subtitle': 'Your Digital Partner',
      'home.cta': 'Discover our services',

      // Expertise
      'expertise.title': 'Our Expertise',
      'expertise.subtitle': 'Solutions tailored to your needs',

      // Products
      'products.title': 'Our Products',
      'products.dmds.title': 'DMDS',
      'products.dmds.description': 'Innovative solution for your business',

      // Contact
      'contact.title': 'Contact Us',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Send',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n; 