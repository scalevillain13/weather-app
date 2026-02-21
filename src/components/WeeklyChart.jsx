import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import './WeeklyChart.css';

const DAY_NAMES = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const MONTHS = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

function formatDay(dateStr) {
  const d = new Date(dateStr);
  const day = DAY_NAMES[d.getDay()];
  const date = d.getDate();
  const month = MONTHS[d.getMonth()];
  return `${day}, ${date} ${month}`;
}

function formatLabel(dateStr) {
  const d = new Date(dateStr);
  return `${DAY_NAMES[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

export function WeeklyChart({ daily, isDay }) {
  const chartData = daily.map((d) => ({
    date: d.date,
    name: formatDay(d.date),
    max: Math.round(d.max),
    min: Math.round(d.min),
    full: formatLabel(d.date),
  }));

  const allTemps = chartData.flatMap((d) => [d.max, d.min]);
  const minY = Math.min(...allTemps) - 2;
  const maxY = Math.max(...allTemps) + 2;

  return (
    <div className={`weekly-chart ${isDay ? 'day' : 'night'}`}>
      <div className="chart-header">
        <h3 className="chart-title">Температура на неделю</h3>
        <div className="chart-legend" aria-hidden>
          <span><span className="dot-max" /> макс</span>
          <span><span className="dot-min" /> мин</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gradMax" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ea580c" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#ea580c" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradMin" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#2563eb" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradMaxNight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradMinNight" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.28} />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={isDay ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: isDay ? '#6b7280' : '#9ca3af' }}
            axisLine={{ stroke: isDay ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)' }}
            tickLine={false}
            dy={4}
          />
          <YAxis
            domain={[minY, maxY]}
            tick={{ fontSize: 11, fill: isDay ? '#6b7280' : '#9ca3af' }}
            axisLine={false}
            tickLine={false}
            width={32}
            tickMargin={4}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              const item = payload[0].payload;
              return (
                <div className="chart-tooltip">
                  <div className="tooltip-label">{item.full}</div>
                  <div className="tooltip-max">Макс: {item.max}°</div>
                  <div className="tooltip-min">Мин: {item.min}°</div>
                </div>
              );
            }}
            cursor={{ stroke: isDay ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)', strokeWidth: 1 }}
          />
          <Area
            type="monotone"
            dataKey="max"
            stroke={isDay ? '#ea580c' : '#fbbf24'}
            strokeWidth={2.5}
            fill={isDay ? 'url(#gradMax)' : 'url(#gradMaxNight)'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Area
            type="monotone"
            dataKey="min"
            stroke={isDay ? '#2563eb' : '#60a5fa'}
            strokeWidth={2.5}
            fill={isDay ? 'url(#gradMin)' : 'url(#gradMinNight)'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
