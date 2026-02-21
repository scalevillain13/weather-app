import './WeatherCard.css';

const WEATHER_LABELS = {
  clear: 'Ясно',
  cloudy: 'Облачно',
  fog: 'Туман',
  rain: 'Дождь',
  snow: 'Снег',
  thunderstorm: 'Гроза',
};

const WEATHER_ICONS = {
  clear: '☀',
  cloudy: '☁',
  fog: '〰',
  rain: '🌧',
  snow: '❄',
  thunderstorm: '⛈',
};

export function WeatherCard({ current, isDay }) {
  const label = WEATHER_LABELS[current?.category] ?? 'Облачно';
  const icon = WEATHER_ICONS[current?.category] ?? '☁';
  const feelsLike = current?.feelsLike != null ? current.feelsLike : null;

  return (
    <section className={`weather-card ${isDay ? 'day' : 'night'}`} aria-label="Текущая погода">
      <h2 className="weather-card-heading">Сейчас</h2>
      <div className="weather-card-inner">
        <div className="weather-card-top">
          <div className="weather-icon" aria-hidden>
            {icon}
          </div>
          <div className="temp-block">
            <span className="temp-value">{current?.temp ?? '—'}</span>
            <span className="temp-unit">°C</span>
          </div>
        </div>
        <p className="weather-desc">{label}</p>
        {feelsLike != null && (
          <p className="feels-like">Ощущается как <strong>{feelsLike}°C</strong></p>
        )}
      </div>
    </section>
  );
}
