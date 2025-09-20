import React from 'react';
import NavigationItem from './NavigationItem';
import styles from './NavigationPanel.module.css';

const NavigationSection = React.memo(function NavigationSection({ section, activeItemId, onSelect }) {
  if (!section || !section.items?.length) {
    return null;
  }

  const { title, items, id } = section;
  const sectionLabel = title || id;

  return (
    <section className={styles.section} aria-label={sectionLabel}>
      {title ? <h2 className={styles.sectionTitle}>{title}</h2> : null}
      <ul className={styles.list}>
        {items.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            isActive={item.id === activeItemId}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </section>
  );
});

NavigationSection.displayName = 'NavigationSection';

export default NavigationSection;
