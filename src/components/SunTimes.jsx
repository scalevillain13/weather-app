import { WeatherIcon } from './WeatherIcons';
import './SunTimes.css';

function formatTime(isoStr) {
  if (!isoStr) return '—';
  const d = new Date(isoStr);
  return d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

export function SunTimes({ sunrise, sunset, isDay }) {
  return (
    <section className="sun-times" aria-label="Восход и закат солнца">
      <h2 className="sun-times-title">Световой день</h2>
      <div className={`sun-times-grid ${isDay ? 'day' : 'night'}`}>
        <div className="sun-time-item">
          <span className="sun-time-icon" aria-hidden><WeatherIcon name="sunrise" size="lg" /></span>
          <div>
            <span className="sun-time-label">Восход</span>
            <span className="sun-time-value">{formatTime(sunrise)}</span>
          </div>
        </div>
        <div className="sun-time-item">
          <span className="sun-time-icon" aria-hidden><WeatherIcon name="sunset" size="lg" /></span>
          <div>
            <span className="sun-time-label">Закат</span>
            <span className="sun-time-value">{formatTime(sunset)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
