import './WeatherDetails.css';

function InfoTile({ label, value, unit, isDay }) {
  if (value == null || value === '') return null;
  return (
    <div className={`info-tile ${isDay ? 'day' : 'night'}`}>
      <span className="info-tile-label">{label}</span>
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
        <InfoTile label="Ощущается как" value={current.feelsLike} unit="°C" isDay={isDay} />
        <InfoTile label="Влажность" value={current.humidity} unit="%" isDay={isDay} />
        <InfoTile label="Ветер" value={current.wind} unit=" м/с" isDay={isDay} />
        <InfoTile label="Давление" value={current.pressure} unit=" гПа" isDay={isDay} />
        <InfoTile label="Видимость" value={current.visibility != null ? Number(current.visibility).toFixed(1) : null} unit=" км" isDay={isDay} />
        <InfoTile label="УФ-индекс" value={current.uvIndex} unit="" isDay={isDay} />
        {current.precipitation != null && current.precipitation > 0 && (
          <InfoTile label="Осадки сейчас" value={current.precipitation} unit=" мм" isDay={isDay} />
        )}
      </div>
    </section>
  );
}
