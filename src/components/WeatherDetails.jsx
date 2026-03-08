import { WeatherIcon } from './WeatherIcons';
import './WeatherDetails.css';

function InfoTile({ label, value, unit, isDay, icon }) {
  if (value == null || value === '') return null;
  return (
    <div className={`info-tile ${isDay ? 'day' : 'night'}`}>
      <div className="info-tile-header">
        {icon && <span className="info-tile-icon" aria-hidden><WeatherIcon name={icon} size="sm" /></span>}
        <span className="info-tile-label">{label}</span>
      </div>
      <span className="info-tile-value">
        {value}
        {unit && <span className="info-tile-unit">{unit}</span>}
      </span>
    </div>
  );
}

export function WeatherDetails({ current, isDay }) {
  if (!current) return null;

  return (
    <section className="weather-details" aria-label="Детали погоды">
      <h2 className="details-title">Детали</h2>
      <div className="details-grid">
        <InfoTile label="Ощущается как" value={current.feelsLike} unit="°C" isDay={isDay} icon="thermometer" />
        <InfoTile label="Влажность" value={current.humidity} unit="%" isDay={isDay} icon="humidity" />
        <InfoTile label="Ветер" value={current.wind} unit=" м/с" isDay={isDay} icon="wind" />
        <InfoTile label="Давление" value={current.pressure} unit=" гПа" isDay={isDay} icon="pressure" />
        <InfoTile label="Видимость" value={current.visibility != null ? Number(current.visibility).toFixed(1) : null} unit=" км" isDay={isDay} icon="visibility" />
        <InfoTile label="УФ-индекс" value={current.uvIndex} unit="" isDay={isDay} icon="uv" />
        {current.precipitation != null && current.precipitation > 0 && (
          <InfoTile label="Осадки сейчас" value={current.precipitation} unit=" мм" isDay={isDay} icon="precipitation" />
        )}
      </div>
    </section>
  );
}
