import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Для GitHub Pages: base должен совпадать с именем репозитория.
// Если репо будет называться иначе — поменяй здесь и в package.json "homepage".
export default defineConfig({
  plugins: [react()],
  base: '/weather-app/',
})
