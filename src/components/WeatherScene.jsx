import { useMemo } from 'react';
import './WeatherScene.css';

/**
 * Динамический фон и анимации в зависимости от времени суток и погоды.
 * isDay + clear -> день солнце, isDay + rain -> дождь днём, !isDay -> ночь (звёзды/луна/дождь).
 */
export function WeatherScene({ isDay, category }) {
  const scene = useMemo(() => {
    const rain = category === 'rain' || category === 'thunderstorm';
    const snow = category === 'snow';
    const clear = category === 'clear';
    const night = !isDay;

    return {
      rain,
      snow,
      clear,
      night,
      sun: isDay && (clear || category === 'cloudy'),
      clouds: category === 'cloudy' || category === 'fog',
      storm: category === 'thunderstorm',
    };
  }, [isDay, category]);

  return (
    <div
      className={`weather-scene ${scene.night ? 'night' : 'day'} ${scene.rain ? 'rain' : ''} ${scene.snow ? 'snow' : ''} ${scene.storm ? 'storm' : ''} ${scene.clear && scene.night ? 'stars' : ''}`}
      aria-hidden
    >
      {/* Градиентный фон */}
      <div className="scene-bg" />

      {/* Солнце (день, ясно/облачно) */}
      {scene.sun && (
        <div className="sun-wrap">
          <div className="sun" />
          <div className="sun-glow" />
        </div>
      )}

      {/* Луна (ночь) */}
      {scene.night && (
        <div className="moon-wrap">
          <div className="moon" />
          <div className="moon-glow" />
        </div>
      )}

      {/* Облака: группа из круглых «пушинок» без blur */}
      {scene.clouds && (
        <>
          <div className="cloud-group cloud-1">
            <div className="cloud-puff p1" />
            <div className="cloud-puff p2" />
            <div className="cloud-puff p3" />
            <div className="cloud-puff p4" />
            <div className="cloud-puff p5" />
          </div>
          <div className="cloud-group cloud-2">
            <div className="cloud-puff p1" />
            <div className="cloud-puff p2" />
            <div className="cloud-puff p3" />
            <div className="cloud-puff p4" />
          </div>
          <div className="cloud-group cloud-3">
            <div className="cloud-puff p1" />
            <div className="cloud-puff p2" />
            <div className="cloud-puff p3" />
          </div>
        </>
      )}

      {/* Звёзды (ночь, ясно) */}
      {scene.clear && scene.night && (
        <div className="stars-layer">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="star" style={{ '--i': i }} />
          ))}
        </div>
      )}

      {/* Дождь */}
      {scene.rain && (
        <div className="rain-layer">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="raindrop" style={{ '--i': i }} />
          ))}
        </div>
      )}

      {/* Снег */}
      {scene.snow && (
        <div className="snow-layer">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="snowflake" style={{ '--i': i }} />
          ))}
        </div>
      )}

      {/* Молния (гроза) */}
      {scene.storm && <div className="lightning" />}
    </div>
  );
}
