# Пошаговая заливка на GitHub и GitHub Pages (в терминале Cursor)

Выполняй команды **по порядку** в терминале Cursor (Terminal → New Terminal). Копируй по одной строке или блоком.

---

## Шаг 0. Открой терминал в Cursor

**Terminal** → **New Terminal**. Убедись, что ты в папке проекта (должно быть что-то вроде `PS ...\weather-app>`). Если нет — выполни:

```powershell
cd C:\Users\Honor\Desktop\weather-app
```

---

## Шаг 1. Настрой Git (если ещё не делал)

Подставь свой email вместо `tvoy@email.com` (лучше тот, что привязан к GitHub):

```powershell
git config --global user.name "scalevillain13"
git config --global user.email "tvoy@email.com"
```

---

## Шаг 2. Инициализация репозитория и первый коммит

Если папка ещё не git-репозиторий:

```powershell
git init
```

Добавляем все файлы и делаем коммит:

```powershell
git add .
git commit -m "Weather app for portfolio"
git branch -M main
```

---

## Шаг 3. Подключить удалённый репозиторий

Если `origin` ещё не добавлен:

```powershell
git remote add origin https://github.com/scalevillain13/weather-app.git
```

Если уже был добавлен (ошибка "origin already exists") — просто обновить URL:

```powershell
git remote set-url origin https://github.com/scalevillain13/weather-app.git
```

---

## Шаг 4. Отправить код на GitHub

```powershell
git push -u origin main
```

- Если попросит логин: **Username** — `scalevillain13`.
- Если попросит пароль: вставь **Personal Access Token** (не пароль от аккаунта).  
  Токен: GitHub → Settings → Developer settings → Personal access tokens → Generate new token (право **repo**).

Если выдаст ошибку про «unrelated histories» (на GitHub уже есть коммиты), выполни:

```powershell
git pull origin main --rebase --allow-unrelated-histories
```

Если появятся конфликты — напиши, разберём. Если всё ок, затем снова:

```powershell
git push -u origin main
```

---

## Шаг 5. Установить зависимости (если ещё не ставил)

```powershell
npm install
```

(Нужен пакет `gh-pages` для деплоя.)

---

## Шаг 6. Собрать и выложить сайт на GitHub Pages

```powershell
npm run deploy
```

Команда соберёт проект и зальёт папку `dist` в ветку `gh-pages`. Может снова спросить логин/токен — введи те же данные, что в шаге 4.

---

## Шаг 7. Включить GitHub Pages в настройках репо

1. Открой в браузере: **https://github.com/scalevillain13/weather-app**
2. Вкладка **Settings** → слева **Pages**.
3. В блоке **Build and deployment** → **Source**: выбери **Deploy from a branch**.
4. **Branch**: выбери **gh-pages**, папка **/ (root)**.
5. Нажми **Save**.

Через 1–2 минуты сайт откроется по адресу:

**https://scalevillain13.github.io/weather-app/**

Эту ссылку можно вставить в портфолио как «Открыть сайт».

---

## Если что-то пошло не так

- **«failed to push»** — см. шаг 4 (pull с `--allow-unrelated-histories` или токен).
- **«npm не распознано»** — Node.js не установлен или не в PATH; используй `npm.cmd` вместо `npm` или настрой политику: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`.
- **«vite не является командой»** — сначала выполни `npm install`, потом снова `npm run deploy`.

Если скопируешь сюда полный текст ошибки из терминала, можно разобрать по шагам.
