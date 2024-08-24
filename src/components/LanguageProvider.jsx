import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a Context for the language
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    setLanguage(userLanguage.includes('ru') ? 'ru' : 'en');

    console.log(userLanguage);

  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ru' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
