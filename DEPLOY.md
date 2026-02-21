# Как выложить приложение на GitHub Pages (для портфолио)

Так ты получишь ссылку вида `https://ТВОЙ_НИК.github.io/weather-app/`, которую можно вставить в портфолио как «Открыть сайт».

---

## 1. Создать репозиторий на GitHub

1. Зайди на [github.com](https://github.com) и войди в аккаунт.
2. Нажми **«+» → «New repository»**.
3. **Repository name:** `weather-app` (или другое имя — тогда его нужно будет подставить в шаги ниже).
4. Можешь оставить репо пустым (без README). Нажми **Create repository**.

---

## 2. Подключить проект к репозиторию

В папке проекта открой терминал и выполни (подставь свой ник и имя репо):

```bash
git init
git add .
git commit -m "Weather app for portfolio"
git branch -M main
git remote add origin https://github.com/ТВОЙ_НИК/weather-app.git
git push -u origin main
```

Если репозиторий создан с другим именем (не `weather-app`), замени `weather-app` в URL на имя своего репо.

---

## 3. Настроить проект под твой репозиторий

Если имя репозитория **не** `weather-app`:

1. **vite.config.js** — в `base` укажи имя репо со слэшами:
   ```js
   base: '/ИМЯ_РЕПОЗИТОРИЯ/',
   ```

2. **package.json** — в `homepage` укажи свой ник и имя репо:
   ```json
   "homepage": "https://ТВОЙ_НИК.github.io/ИМЯ_РЕПОЗИТОРИЯ/"
   ```

Если репо так и называется `weather-app`, достаточно в **package.json** заменить `YOUR_USERNAME` на свой GitHub-ник:
```json
"homepage": "https://ТВОЙ_НИК.github.io/weather-app/"
```

---

## 4. Установить зависимость и задеплоить

В папке проекта:

```bash
npm install
npm run deploy
```

При первом запуске `npm run deploy` может спросить логин/пароль GitHub. Можно использовать [Personal Access Token](https://github.com/settings/tokens) вместо пароля.

---

## 5. Включить GitHub Pages в настройках репо

1. На GitHub открой репозиторий **weather-app**.
2. **Settings** → слева **Pages**.
3. В блоке **Source** выбери **Deploy from a branch**.
4. **Branch:** `gh-pages`, папка **/ (root)**.
5. Сохрани (**Save**).

Через 1–2 минуты сайт будет доступен по адресу:

**https://ТВОЙ_НИК.github.io/weather-app/**

(если репо назывался иначе — подставь его имя вместо `weather-app`).

---

## 6. Ссылка в портфолио

В коде портфолио добавь к проекту «Погода» ссылку:

- **Текст кнопки/ссылки:** например, «Открыть сайт» или «Посмотреть».
- **URL:** `https://ТВОЙ_НИК.github.io/weather-app/`

Пример в HTML:

```html
<a href="https://ТВОЙ_НИК.github.io/weather-app/" target="_blank" rel="noopener">Открыть сайт</a>
```

После правок в проекте достаточно снова выполнить:

```bash
git add .
git commit -m "Update"
git push
npm run deploy
```

Сайт на GitHub Pages обновится.
