import React from 'react';
import styles from '../styles/LanguageModal.module.css'; 

const LanguageModal = ({ isOpen, onClose, languages, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
        <ul className={styles.languageList}>
          {languages.map((lang) => (
            <li key={lang}>
              <button onClick={() => onSelect(lang)}>{lang.toUpperCase()}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageModal;
