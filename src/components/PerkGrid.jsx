import React, { useState } from 'react';
import styles from '../styles/PerkGrid.module.css';
import { defaultData } from '../data/defaultData';
import { useLanguage } from './LanguageProvider'; 

const PerkGrid = ({ perks }) => {
  const { language } = useLanguage();
  const [hoveredPerkId, setHoveredPerkId] = useState(null);

  const handleMouseEnter = (perk) => {
    setHoveredPerkId(perk.id);
  };

  const handleMouseLeave = () => {
    setHoveredPerkId(null);
  };

  return (
    <div className={styles.perkgrid}>
      {perks.map((perk) => (
        <div
          key={perk.id}
          className={styles.perkitem}
          onMouseEnter={() => handleMouseEnter(perk)}
          onMouseLeave={handleMouseLeave}
          style={{ position: 'relative' }}
        >
          <img src={perk.icon} alt={perk.name[language]} />

          {hoveredPerkId === perk.id && (
            <div className={styles.perkTooltip}>
              <div className={styles.perkHeader}>
                <h3 className={styles.perkName}>{perk.name[language]}</h3>
                <p className={styles.perkAuthor}>
                  {perk.author && perk.author[language] 
                    ? language === 'en' 
                      ? `Very rare ${perk.author[language]} perk`
                      : `Очень редкое - ${perk.author[language]} - навык`
                    : language === 'en' 
                      ? `Very rare perk`
                      : `Очень редк. - навык`}
                </p>
              </div>
              <div className={styles.perkBottom}>
                {perk.falseDescription?.[language] && (
                  <p className={styles.perkFalseDescription}>{perk.falseDescription[language]}</p>
                )}
                <p className={styles.perkDescription}>{perk.description[language]}</p>
                {perk.statusEffect.length > 0 && (
                  <div className={styles.statusEffects}>
                    {perk.statusEffect.map(effect => (
                      <p key={effect} className={styles.statusEffect}>
                        {defaultData[effect]?.[language]}
                      </p>
                    ))}
                  </div>
                )}
                <p className={styles.perkComment}>{perk.falseauthorComment[language]}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PerkGrid;
