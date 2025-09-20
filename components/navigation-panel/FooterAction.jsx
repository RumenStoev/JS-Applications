import React from 'react';
import styles from './NavigationPanel.module.css';

const FooterAction = React.memo(function FooterAction({ action }) {
  const { id, label, icon: Icon, href = `#${id}`, onClick } = action;

  return (
    <li>
      <a className={styles.footerLink} href={href} onClick={onClick}>
        <span className={styles.footerIcon} aria-hidden="true">
          {Icon ? <Icon className={styles.icon} /> : null}
        </span>
        <span className={styles.footerLabel}>{label}</span>
      </a>
    </li>
  );
});

FooterAction.displayName = 'FooterAction';

export default FooterAction;
