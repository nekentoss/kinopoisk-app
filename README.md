# Kinopoisk App

## Данные

### Описание

Приложение для просмотра фильмов с использованием API Kinopoisk. Реализовано на React с использованием Redux для управления состоянием, React Router для маршрутизации и Material UI для компонентов интерфейса.

### Ссылки

- [Репозиторий](https://github.com/nekentoss/kinopoisk-app)
- [Деплой проекта](https://nekentoss.github.io/kinopoisk-app/)

---

## Установка и настройка приложения

### Клонирование и установка

1. Склонировать репозиторий по HTTPS
2. Установить зависимости для проекта через `npm i`
3. Создать `.env`-файл

### `.env`-файл

- Для ключа `VITE_KP_API_KEY` добавить значение из "Профиля" [Kinopoisk API Unofficial](https://kinopoiskapiunofficial.tech/)

```
VITE_KP_API_KEY=ваш_ключ_api
```

---

## Команды

```bash
npm run dev             # Запуск приложения в dev-режиме на localhost
npm run build           # Сборка приложения
npm run preview         # Запуск собранного приложения из "dist" для предпросмотра production-сборки

npm run lint            # Проверить код с помощью ESLint

npm run storybook       # Запуск StoryBook в dev-режиме на localhost
npm run build-storybook # Сборка StoryBook

npm run predeploy       # Сборка приложения перед деплоем
npm run deploy          # Сборка приложения и push в ветку "gh-pages" на GitHub
```

---

## Функционал

- **Главная страница** — описание проекта
- **Список фильмов** — отображение новых фильмов
- **Поиск фильмов** — поиск по названию
- **Страница фильма** — подробная информация о фильме, рейтинг, приквелы/сиквелы
- **Избранное** — добавление/удаление фильмов в избранное
- **Профиль** — ввод имени пользователя

---
