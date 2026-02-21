const BASE = 'https://api.open-meteo.com/v1/forecast';

/**
 * Open-Meteo weather codes: 0 clear, 1-3 clouds, 45 fog, 48 fog, 51-67 rain/drizzle, 71-77 snow, 80-82 showers, 85-86 snow showers, 95-99 thunderstorm
 */
export function getWeatherCategory(code) {
  if (code === 0) return 'clear';
  if (code >= 1 && code <= 3) return 'cloudy';
  if (code >= 45 && code <= 48) return 'fog';
  if (code >= 51 && code <= 67) return 'rain';
  if (code >= 71 && code <= 77) return 'snow';
  if (code >= 80 && code <= 82) return 'rain';
  if (code >= 85 && code <= 86) return 'snow';
  if (code >= 95 && code <= 99) return 'thunderstorm';
  return 'cloudy';
}

export async function fetchWeather(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,is_day,wind_speed_10m,precipitation,surface_pressure,visibility,uv_index',
    daily: 'temperature_2m_max,temperature_2m_min,weather_code,precipitation_sum,sunrise,sunset',
    timezone: 'auto',
    forecast_days: 7,
  });
  const res = await fetch(`${BASE}?${params}`);
  if (!res.ok) throw new Error('Ошибка загрузки погоды');
  return res.json();
}

export async function getCoords() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({ lat: 55.7558, lon: 37.6173 });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      () => resolve({ lat: 55.7558, lon: 37.6173 }),
      { timeout: 5000 }
    );
  });
}
