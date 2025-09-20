import React from 'react';

const IconBase = ({ className, children }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

IconBase.displayName = 'IconBase';

export const DashboardIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M4 4h7v7H4z" fill="currentColor" opacity="0.3" stroke="none" />
    <path d="M13 4h7v11h-7z" fill="currentColor" opacity="0.5" stroke="none" />
    <path d="M4 13h7v7H4z" fill="currentColor" opacity="0.7" stroke="none" />
    <path d="M13 16h7v4h-7z" fill="currentColor" opacity="0.9" stroke="none" />
  </IconBase>
);

DashboardIcon.displayName = 'DashboardIcon';

export const ReportsIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M5 19h14" />
    <path d="M8 19V8l4-3 4 3v11" />
    <path d="M10 13h4" />
  </IconBase>
);

ReportsIcon.displayName = 'ReportsIcon';

export const ArchiveIcon = ({ className }) => (
  <IconBase className={className}>
    <rect x="3" y="4" width="18" height="4" rx="1.5" />
    <path d="M5 8h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" opacity="0.6" />
    <path d="M10 12h4" />
  </IconBase>
);

ArchiveIcon.displayName = 'ArchiveIcon';

export const SocialIcon = ({ className }) => (
  <IconBase className={className}>
    <rect x="4" y="6" width="14" height="9" rx="4" />
    <path d="M10 15v3l4-3" />
  </IconBase>
);

SocialIcon.displayName = 'SocialIcon';

export const UsersIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M8 14a4 4 0 1 1 8 0" />
    <path d="M4 20a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4" opacity="0.6" />
    <path d="M12 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3z" fill="currentColor" opacity="0.6" stroke="none" />
  </IconBase>
);

UsersIcon.displayName = 'UsersIcon';

export const DocumentsIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M8 3h7l4 4v13H8z" opacity="0.6" />
    <path d="M8 3v18H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" opacity="0.4" />
    <path d="M13 3v5h5" />
    <path d="M11 13h4" />
    <path d="M11 17h4" />
  </IconBase>
);

DocumentsIcon.displayName = 'DocumentsIcon';

export const FavoritesIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 17.3 15.9 19.5 15.1 15.2 18.6 12.4 14.3 12 12 7.1 9.7 12 5.4 12.4 8.9 15.2 8.1 19.5z" fill="currentColor" stroke="none" opacity="0.85" />
  </IconBase>
);

FavoritesIcon.displayName = 'FavoritesIcon';

export const SettingsIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.51 1H22a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" opacity="0.55" />
  </IconBase>
);

SettingsIcon.displayName = 'SettingsIcon';

export const SupportIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 21a9 9 0 1 1 9-9" opacity="0.5" />
    <path d="M12 17v-1a3 3 0 0 1 3-3 2 2 0 1 0-2-2" />
    <circle cx="12" cy="21" r="0.9" fill="currentColor" stroke="none" />
  </IconBase>
);

SupportIcon.displayName = 'SupportIcon';

export const PowerIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 2v8" />
    <path d="M7 5.5a8 8 0 1 0 10 0" />
  </IconBase>
);

PowerIcon.displayName = 'PowerIcon';

export const PlusIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </IconBase>
);

PlusIcon.displayName = 'PlusIcon';

export default IconBase;
