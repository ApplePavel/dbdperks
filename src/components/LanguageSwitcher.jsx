import React from 'react';
import { useLanguage } from './LanguageProvider'; // Use the LanguageProvider context

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage(); // Get the current language and the function to toggle it

  return (
    <button onClick={toggleLanguage}>
      {language === 'en' ? 'Switch to Russian' : 'Switch to English'}
    </button>
  );
};

export default LanguageSwitcher;
