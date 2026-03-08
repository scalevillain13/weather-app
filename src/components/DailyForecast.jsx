import { WeatherIcon } from './WeatherIcons';
import './DailyForecast.css';

const DAY_NAMES = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

function formatDayLabel(dateStr) {
  const d = new Date(dateStr);
  const today = new Date();
  const isToday = d.toDateString() === today.toDateString();
  if (isToday) return 'Сегодня';
  return `${DAY_NAMES[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

export function DailyForecast({ daily, isDay }) {
  if (!daily?.length) return null;

  return (
    <section className="daily-forecast" aria-label="Прогноз на 7 дней">
      <h2 className="daily-forecast-title">Прогноз на 7 дней</h2>
      <div className="daily-list">
        {daily.map((day, i) => (
          <div key={day.date} className={`day-card ${isDay ? 'day' : 'night'}`}>
            <div className="day-card-main">
              <span className="day-card-label">{formatDayLabel(day.date)}</span>
              <span className="day-card-icon" aria-hidden><WeatherIcon name={day.category ?? 'cloudy'} size="md" /></span>
            </div>
            <div className="day-card-temps">
              <span className="day-temp-max">{Math.round(day.max)}°</span>
              <span className="day-temp-min">{Math.round(day.min)}°</span>
            </div>
            {day.precipitation != null && day.precipitation > 0 && (
              <span className="day-precip" title="Осадки"><WeatherIcon name="precipitation" size="sm" /> {day.precipitation} мм</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
