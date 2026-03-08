import './WeatherIcons.css';

const sizeMap = { sm: 20, md: 24, lg: 32, xl: 56 };

export function WeatherIcon({ name, size = 'md', className = '' }) {
  const s = typeof size === 'number' ? size : sizeMap[size] ?? 24;
  const cn = ['weather-svg-icon', `weather-svg-icon--${name}`, className].filter(Boolean).join(' ');

  const icons = {
    clear: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.95" />
        <path d="M16 4v2M16 26v2M4 16h2M26 16h2M7.05 7.05l1.41 1.41M23.54 23.54l1.41 1.41M7.05 24.95l1.41-1.41M23.54 8.46l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
        <path d="M22 16a6 6 0 11-12 0 6 6 0 0112 0z" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5" />
      </svg>
    ),
    cloudy: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <path d="M25 20a5 5 0 00-10 0 4.5 4.5 0 008 0h2z" fill="currentColor" opacity="0.9" />
        <path d="M10 18a5 5 0 015-5 5 5 0 014 2.5 4 4 0 017 1 4 4 0 01-1 7.5H10a5 5 0 010-6z" fill="currentColor" opacity="0.75" />
      </svg>
    ),
    fog: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <path d="M6 10h20M6 16h16M6 22h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      </svg>
    ),
    rain: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <path d="M24 20a5 5 0 00-10 0 4.5 4.5 0 008 0h2z" fill="currentColor" opacity="0.85" />
        <path d="M9 18a5 5 0 015-5 5 5 0 014 2.5 4 4 0 017 1 4 4 0 01-1 7.5H9a5 5 0 010-6z" fill="currentColor" opacity="0.7" />
        <path d="M11 26l2-4M16 26l2-4M21 26l2-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
      </svg>
    ),
    snow: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <path d="M24 19a5 5 0 00-10 0 4.5 4.5 0 008 0h2z" fill="currentColor" opacity="0.85" />
        <path d="M9 17a5 5 0 015-5 5 5 0 014 2.5 4 4 0 017 1 4 4 0 01-1 7.5H9a5 5 0 010-6z" fill="currentColor" opacity="0.7" />
        <path d="M16 22v4M16 22l-2 2M16 22l2 2M14 24h4M13 23l2 2M19 23l-2 2M13 25l2-2M19 25l-2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </svg>
    ),
    thunderstorm: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <path d="M24 20a5 5 0 00-10 0 4.5 4.5 0 008 0h2z" fill="currentColor" opacity="0.85" />
        <path d="M9 18a5 5 0 015-5 5 5 0 014 2.5 4 4 0 017 1 4 4 0 01-1 7.5H9a5 5 0 010-6z" fill="currentColor" opacity="0.7" />
        <path d="M17 12l-4 6h3l-2 6 6-8h-3l3-4z" fill="currentColor" opacity="0.95" />
      </svg>
    ),
    wind: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <path d="M4 16h18M4 10h14M4 22h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    thermometer: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <path d="M16 4v12.5a4 4 0 11-8 0V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="20" r="3" fill="currentColor" opacity="0.9" />
      </svg>
    ),
    humidity: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <path d="M16 4c-4 6-8 10-8 14a8 8 0 1016 0c0-4-4-8-8-14z" fill="currentColor" opacity="0.9" />
      </svg>
    ),
    pressure: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <circle cx="16" cy="14" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M16 6v4M16 22v4M10 14h-4M26 14h-4M12.3 9.7l-2.8 2.8M22.5 19.9l-2.8 2.8M19.7 9.7l2.8 2.8M9.5 19.9l2.8 2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="14" r="3" fill="currentColor" opacity="0.8" />
      </svg>
    ),
    visibility: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <path d="M16 8c-6 0-10 6-10 8s4 8 10 8 10-6 10-8-4-8-10-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    uv: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <path d="M16 4v6M16 22v6M4 16h6M22 16h6M7.05 7.05l4.24 4.24M20.71 20.71l4.24 4.24M7.05 24.95l4.24-4.24M20.71 11.29l4.24-4.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
        <circle cx="16" cy="16" r="5" fill="currentColor" opacity="0.9" />
      </svg>
    ),
    precipitation: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <path d="M16 4c-3 5-6 9-6 12a6 6 0 1012 0c0-3-3-7-6-12z" fill="currentColor" opacity="0.9" />
      </svg>
    ),
    sunrise: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <path d="M16 4v4M8.46 10.46l2.83 2.83M4 18h2M26 18h2M20.71 10.46l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 22h20M16 22v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="14" r="4" fill="currentColor" opacity="0.9" />
      </svg>
    ),
    sunset: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn} width={s} height={s}>
        <path d="M16 24v4M8.46 17.54l2.83 2.83M4 10h2M26 10h2M20.71 17.54l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 18h20M16 18v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="14" r="4" fill="currentColor" opacity="0.9" />
      </svg>
    ),
  };

  return icons[name] ?? icons.cloudy;
}
