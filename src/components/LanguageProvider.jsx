import React, { createContext, useState, useEffect, useContext } from 'react';

// Создаем контекст для языка
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const additionalLanguages = ['en', 'fr', 'es', 'pt', 'ru', 'de', 'it']; 
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    const matchedLanguage = additionalLanguages.find(lang => userLanguage.includes(lang)) || 'en';
    setLanguage(matchedLanguage);
  }, []);

  // Функция для переключения языка, принимает новый язык
  const toggleLanguage = (newLanguage) => {
    if (additionalLanguages.includes(newLanguage)) {
      setLanguage(newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, additionalLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Хук для использования контекста языка
export const useLanguage = () => useContext(LanguageContext);
