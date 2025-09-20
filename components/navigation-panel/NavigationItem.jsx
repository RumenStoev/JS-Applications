import React from 'react';
import styles from './NavigationPanel.module.css';

const NavigationItem = React.memo(function NavigationItem({ item, isActive, onSelect }) {
  const { id, label, icon: Icon, href = `#${id}`, badge, isDisabled } = item;

  const className = [styles.link, isActive ? styles.linkActive : '', isDisabled ? styles.linkDisabled : '']
    .filter(Boolean)
    .join(' ');

  const handleClick = (event) => {
    if (isDisabled) {
      event.preventDefault();
      return;
    }

    onSelect?.(item, event);
  };

  return (
    <li className={styles.listItem}>
      <a
        className={className}
        href={href}
        onClick={handleClick}
        aria-current={isActive ? 'page' : undefined}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : undefined}
      >
        <span className={styles.iconWrapper} aria-hidden="true">
          {Icon ? <Icon className={styles.icon} /> : null}
        </span>
        <span className={styles.label}>{label}</span>
        {typeof badge === 'number' ? (
          <span className={styles.badge} aria-label={`${badge} new ${label.toLowerCase()}`}>
            {badge}
          </span>
        ) : null}
      </a>
    </li>
  );
});

NavigationItem.displayName = 'NavigationItem';

export default NavigationItem;
