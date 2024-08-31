import React, { useState } from 'react';
import styles from '../styles/LeftMenu.module.css';

function LeftMenu() {
  const [isKillerActive, setIsKillerActive] = useState(true); // Состояние для переключателя

  const toggleMenu = () => {
    setIsKillerActive(!isKillerActive); // Переключение состояния
  };

  return (
    <div className={styles.left_menu}>
      {isKillerActive ? (
        <div className={styles.menu_killer} onClick={toggleMenu}></div>
      ) : (
        <div className={styles.menu_survivor} onClick={toggleMenu}></div>
      )}
    </div>
  );
}

export default LeftMenu;
