require("dotenv").config();

require("dotenv").config(); // Подключаем переменные окружения
const express = require("express");
const app = express();

// Middleware для обработки JSON данных
app.use(express.json());

// Пример основного маршрута для проверки работы сервера
app.get("/", (req, res) => {
  res.send("Cashback_WB Backend is running!");
});

module.exports = app;
