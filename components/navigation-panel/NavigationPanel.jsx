import React, { useCallback, useEffect, useMemo, useState } from 'react';
import NavigationSection from './NavigationSection';
import FooterAction from './FooterAction';
import styles from './NavigationPanel.module.css';
import {
  DashboardIcon,
  ReportsIcon,
  ArchiveIcon,
  SocialIcon,
  UsersIcon,
  DocumentsIcon,
  FavoritesIcon,
  SettingsIcon,
  SupportIcon,
  PowerIcon,
  PlusIcon,
} from './icons';

/**
 * @typedef {Object} NavigationItem
 * @property {string} id
 * @property {string} label
 * @property {React.ElementType} icon
 * @property {string=} href
 * @property {number=} badge
 * @property {boolean=} isDisabled
 */

/**
 * @typedef {Object} NavigationSectionDefinition
 * @property {string} id
 * @property {string=} title
 * @property {NavigationItem[]} items
 */

const DEFAULT_SECTIONS = Object.freeze([
  {
    id: 'primary',
    title: 'Navigation',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon, href: '#dashboard', badge: 3 },
      { id: 'reports', label: 'Reports', icon: ReportsIcon, href: '#reports', badge: 12 },
      { id: 'archive', label: 'Archive', icon: ArchiveIcon, href: '#archive' },
      { id: 'social', label: 'Social', icon: SocialIcon, href: '#social' },
      { id: 'users', label: 'Users', icon: UsersIcon, href: '#users', badge: 4 },
      { id: 'documents', label: 'Documents', icon: DocumentsIcon, href: '#documents' },
      { id: 'favorites', label: 'Favorites', icon: FavoritesIcon, href: '#favorites', badge: 8 },
    ],
  },
]);

const DEFAULT_FOOTER_ACTIONS = Object.freeze([
  { id: 'settings', label: 'Settings', icon: SettingsIcon, href: '#settings' },
  { id: 'support', label: 'Support', icon: SupportIcon, href: '#support' },
  { id: 'logout', label: 'Logout', icon: PowerIcon, href: '#logout' },
]);

const findFirstItemId = (sections) => {
  for (const section of sections) {
    if (section?.items?.length) {
      return section.items[0].id;
    }
  }
  return null;
};

const composeClassName = (...values) => values.filter(Boolean).join(' ');

function NavigationPanel({
  sections,
  footerActions = DEFAULT_FOOTER_ACTIONS,
  initialActiveItemId,
  activeItemId,
  onActiveItemChange,
  className,
  brand = { initials: 'NP', name: 'Navigation Panel' },
  onCreate,
}) {
  const normalizedSections = useMemo(
    () => (sections && sections.length ? sections : DEFAULT_SECTIONS),
    [sections],
  );

  const resolvedInitialActiveId = useMemo(() => {
    if (activeItemId) {
      return activeItemId;
    }

    if (initialActiveItemId) {
      return initialActiveItemId;
    }

    return findFirstItemId(normalizedSections);
  }, [activeItemId, initialActiveItemId, normalizedSections]);

  const [uncontrolledActiveId, setUncontrolledActiveId] = useState(resolvedInitialActiveId);
  const isControlled = activeItemId !== undefined;
  const currentActiveId = isControlled ? activeItemId : uncontrolledActiveId;

  useEffect(() => {
    if (isControlled) {
      return;
    }

    const hasActiveItem = normalizedSections.some((section) =>
      section?.items?.some((navItem) => navItem.id === uncontrolledActiveId),
    );

    if (!hasActiveItem) {
      setUncontrolledActiveId(findFirstItemId(normalizedSections));
    }
  }, [isControlled, normalizedSections, uncontrolledActiveId]);

  useEffect(() => {
    if (!isControlled && initialActiveItemId && initialActiveItemId !== uncontrolledActiveId) {
      setUncontrolledActiveId(initialActiveItemId);
    }
  }, [initialActiveItemId, isControlled, uncontrolledActiveId]);

  const handleItemSelect = useCallback(
    (item, event) => {
      if (item.isDisabled) {
        event?.preventDefault();
        return;
      }

      if (!isControlled) {
        setUncontrolledActiveId(item.id);
      }

      onActiveItemChange?.(item, event);
    },
    [isControlled, onActiveItemChange],
  );

  const panelClassName = useMemo(
    () => composeClassName(styles.panel, className),
    [className],
  );

  return (
    <nav className={panelClassName} aria-label="Primary">
      <div className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandSymbol} aria-hidden="true">
            {brand.initials}
          </span>
          <span className={styles.brandName}>{brand.name}</span>
        </div>
        <button type="button" className={styles.addButton} aria-label="Create new" onClick={onCreate}>
          <PlusIcon className={styles.addIcon} />
        </button>
      </div>

      <div className={styles.sections}>
        {normalizedSections.map((section) => (
          <NavigationSection
            key={section.id}
            section={section}
            activeItemId={currentActiveId}
            onSelect={handleItemSelect}
          />
        ))}
      </div>

      {footerActions?.length ? (
        <div className={styles.footer}>
          <ul className={styles.footerList}>
            {footerActions.map((action) => (
              <FooterAction key={action.id} action={action} />
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

export default NavigationPanel;
export { NavigationPanel, DEFAULT_SECTIONS as DEFAULT_NAVIGATION_SECTIONS, DEFAULT_FOOTER_ACTIONS };
