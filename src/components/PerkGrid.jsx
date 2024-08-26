import React, { useState } from 'react';
import styles from '../styles/PerkGrid.module.css';
import { defaultData } from '../data/defaultData';
import { useLanguage } from './LanguageProvider'; // Import the LanguageProvider

const PerkGrid = ({ perks }) => {
  const { language } = useLanguage(); // Use the detected language
  const [hoveredPerk, setHoveredPerk] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (event, perk) => {
    const rect = event.target.getBoundingClientRect();

    setPosition({
      top: rect.top - 130,
      left: rect.left - 300,
    });

    setHoveredPerk(perk);
  };

  const handleMouseLeave = () => {
    setHoveredPerk(null);
  };

  return (
    <div className={styles.perkgrid}>
      {perks.map((perk) => (
        <div
          key={perk.id}
          className={styles.perkitem}
          onMouseEnter={(e) => handleMouseEnter(e, perk)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={perk.icon} alt={perk.name[language]} />
        </div>
      ))}

      {hoveredPerk && (
        <div
          className={styles.perkTooltip}
          style={{ top: position.top, left: position.left }}
        >
          <div className={styles.perkHeader}>
            <h3 className={styles.perkName}>{hoveredPerk.name[language]}</h3>
            <p className={styles.perkAuthor}>
              {language === 'en' 
                ? `Very rare ${hoveredPerk.author[language]} perk`
                : `Очень редк. - ${hoveredPerk.author[language]} - навык`}
            </p>

          </div>
          <div className={styles.perkBottom}>
            {hoveredPerk.falseDescription?.[language] && (
              <p className={styles.perkFalseDescription}>{hoveredPerk.falseDescription[language]}</p>
            )}
            <p className={styles.perkDescription}>{hoveredPerk.description[language]}</p>
            {hoveredPerk.statusEffect.length > 0 && (
              <div className={styles.statusEffects}>
                {hoveredPerk.statusEffect.map(effect => (
                  <p key={effect} className={styles.statusEffect}>
                    {defaultData[effect]?.[language]}
                  </p>
                ))}
              </div>
            )}
            <p className={styles.perkComment}>{hoveredPerk.falseauthorComment[language]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerkGrid;
