import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Для GitHub Pages: base должен совпадать с именем репозитория.
// Если репо будет называться иначе — поменяй здесь и в package.json "homepage".
export default defineConfig({
  plugins: [
    react(),
    // Копируем index.html в 404.html, чтобы GitHub Pages отдавал SPA при любом пути
    {
      name: 'copy-404',
      closeBundle() {
        const outDir = resolve(__dirname, 'dist')
        copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
      },
    },
  ],
  base: '/weather-app/',
})
