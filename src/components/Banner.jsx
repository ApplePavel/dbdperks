import React from "react";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        <div className={styles.bannerName}>
          <div className={styles.currencyContainer}>
            <CurrencyItem icon="/banner/auricCell.png" amount="945" />
            <CurrencyItem icon="/banner/shards.png" amount="3 870" />
            <CurrencyItem icon="/banner/bloodpoints.png" amount="2 000 000" />
          </div>
          <div className={styles.whisperersCreator}>Svoboda Slova</div>
          
        </div>
        <div className={styles.whisperersContainer}>
            <img
              src="/banner/whisperers.png"
              alt="Fog Whisperers"
              className={styles.whisperersIcon}
            />
          </div>
      </div>
    </div>
  );
};

const CurrencyItem = ({ icon, amount }) => {
  return (
    <div className={styles.currencyItem}>
      <img src={icon} alt="Currency" className={styles.currencyIcon} />
      <span className={styles.currencyAmount}>{amount}</span>
    </div>
  );
};

export default Banner;
