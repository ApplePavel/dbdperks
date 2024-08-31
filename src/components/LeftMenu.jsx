import React from 'react'
import styles from '../styles/LeftMenu.module.css'

function LeftMenu() {
  return (
    <div className={styles.left_menu}>
        <div className={styles.menu_profile}></div>
        <div className={styles.menu_perks}></div>
        <div className={styles.menu_switch}></div>
    </div>

  )
}

export default LeftMenu