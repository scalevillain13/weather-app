import { useState, useEffect, useCallback } from 'react';
import { fetchWeather, getCoords, getWeatherCategory } from '../api/weather';

export function useWeather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { lat, lon } = await getCoords();
      const raw = await fetchWeather(lat, lon);
      const current = raw.current;
      const daily = raw.daily;
      const category = getWeatherCategory(current.weather_code);
      setData({
        current: {
          temp: Math.round(current.temperature_2m),
          feelsLike: current.apparent_temperature != null ? Math.round(current.apparent_temperature) : null,
          humidity: current.relative_humidity_2m,
          wind: current.wind_speed_10m,
          precipitation: current.precipitation,
          pressure: current.surface_pressure != null ? Math.round(current.surface_pressure) : null,
          visibility: current.visibility != null ? current.visibility / 1000 : null,
          uvIndex: current.uv_index != null ? current.uv_index : null,
          weatherCode: current.weather_code,
          category,
          isDay: !!current.is_day,
        },
        daily: daily.time.map((date, i) => ({
          date,
          max: daily.temperature_2m_max[i],
          min: daily.temperature_2m_min[i],
          code: daily.weather_code[i],
          category: getWeatherCategory(daily.weather_code[i]),
          precipitation: daily.precipitation_sum[i],
          sunrise: daily.sunrise?.[i] ?? null,
          sunset: daily.sunset?.[i] ?? null,
        })),
      });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { data, loading, error, refetch: load };
}
