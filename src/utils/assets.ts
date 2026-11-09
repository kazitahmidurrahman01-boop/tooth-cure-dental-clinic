import React from 'react';

export const getAssetUrl = (path: string): string => {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const rawBase = import.meta.env.BASE_URL || '/tooth-cure-dental-clinic/';
  const base = rawBase.endsWith('/') ? rawBase : rawBase + '/';
  return base + clean + '?v=20261109c';
};

export const getRawFallbackUrl = (path: string): string => {
  const clean = path
    .replace(/^https?:\/\/[^\/]+\/tooth-cure-dental-clinic\//, '')
    .replace(/^\/tooth-cure-dental-clinic\//, '')
    .replace(/^\//, '')
    .replace(/\?.*$/, '');
  return 'https://cdn.jsdelivr.net/gh/kazitahmidurrahman01-boop/tooth-cure-dental-clinic@gh-pages/' + clean;
};

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  const currentSrc = target.src;
  const clean = currentSrc
    .replace(/^https?:\/\/[^\/]+\/tooth-cure-dental-clinic\//, '')
    .replace(/^https?:\/\/cdn\.jsdelivr\.net\/gh\/[^\/]+\/[^\/]+@gh-pages\//, '')
    .replace(/^https?:\/\/raw\.githubusercontent\.com\/[^\/]+\/[^\/]+\/gh-pages\//, '')
    .replace(/^\/tooth-cure-dental-clinic\//, '')
    .replace(/^\//, '')
    .replace(/\?.*$/, '');

  if (!target.getAttribute('data-tried-jsdelivr')) {
    target.setAttribute('data-tried-jsdelivr', 'true');
    target.src = 'https://cdn.jsdelivr.net/gh/kazitahmidurrahman01-boop/tooth-cure-dental-clinic@gh-pages/' + clean;
  } else if (!target.getAttribute('data-tried-raw')) {
    target.setAttribute('data-tried-raw', 'true');
    target.src = 'https://raw.githubusercontent.com/kazitahmidurrahman01-boop/tooth-cure-dental-clinic/gh-pages/' + clean;
  }
};
