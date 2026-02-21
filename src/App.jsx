import { useWeather } from './hooks/useWeather';
import { WeatherScene } from './components/WeatherScene';
import { WeatherCard } from './components/WeatherCard';
import { WeatherDetails } from './components/WeatherDetails';
import { SunTimes } from './components/SunTimes';
import { DailyForecast } from './components/DailyForecast';
import { WeeklyChart } from './components/WeeklyChart';
import './App.css';

function App() {
  const { data, loading, error, refetch } = useWeather();
  const isDay = data?.current?.isDay ?? true;
  const category = data?.current?.category ?? 'clear';
  const today = data?.daily?.[0];

  return (
    <div className="app">
      <WeatherScene isDay={isDay} category={category} />

      <main className="content">
        <header className="header">
          <h1 className="title">Погода</h1>
          <p className="subtitle">Текущая погода, детали и прогноз на неделю</p>
        </header>

        {loading && (
          <div className="state state-loading">
            <div className="loader" />
            <p>Загрузка погоды…</p>
          </div>
        )}

        {error && (
          <div className="state state-error">
            <p>{error}</p>
            <button type="button" className="retry-btn" onClick={refetch}>
              Повторить
            </button>
          </div>
        )}

        {!loading && !error && data && (
          <>
            <WeatherCard current={data.current} isDay={isDay} />

            <div className={`glass-panel ${isDay ? 'day' : 'night'}`}>
              <WeatherDetails current={data.current} isDay={isDay} />
            </div>

            <div className={`glass-panel ${isDay ? 'day' : 'night'}`}>
              <SunTimes
                sunrise={today?.sunrise ?? null}
                sunset={today?.sunset ?? null}
                isDay={isDay}
              />
            </div>

            <div className={`glass-panel ${isDay ? 'day' : 'night'}`}>
              <DailyForecast daily={data.daily} isDay={isDay} />
            </div>

            <WeeklyChart daily={data.daily} isDay={isDay} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
