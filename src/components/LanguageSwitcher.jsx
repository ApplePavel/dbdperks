import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import LanguageModal from "./LanguageModal";
import styles from "../styles/LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { language, toggleLanguage, additionalLanguages } = useLanguage();
  const [systemLanguage, setSystemLanguage] = useState(language);
  const [secondaryLanguage, setSecondaryLanguage] = useState("en");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setSystemLanguage(language);
  }, [language]);

  const swapLanguages = () => {
    setSystemLanguage((prevSystemLanguage) => {
      const newSystemLanguage = selectedLanguage || secondaryLanguage;
      setSelectedLanguage(prevSystemLanguage);
      toggleLanguage(newSystemLanguage);
      return newSystemLanguage;
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLanguageSelect = (lang) => {
    if (lang !== systemLanguage) {
      setSelectedLanguage(lang);
      setIsModalOpen(false);
    }
  };

  return (
    <div className={styles.languageSwitcher}>
      <button className={styles.languageButton}>
        {systemLanguage.toUpperCase()}
      </button>

      <button className={styles.swapButton} onClick={swapLanguages}>
        ⇄
      </button>

      <button className={styles.selectedButton}>
        {selectedLanguage ? selectedLanguage.toUpperCase() : "Select"}
      </button>

      <button className={styles.modalButton} onClick={openModal}>
        +
      </button>

      <LanguageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        languages={additionalLanguages}
        onSelect={handleLanguageSelect}
      />
    </div>
  );
};

export default LanguageSwitcher;
