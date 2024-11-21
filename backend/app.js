require("dotenv").config();

require("dotenv").config(); // Подключаем переменные окружения
const express = require("express");
const app = express();
const { sequelize } = require('./models');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

// Middleware для обработки JSON данных
app.use(express.json());
app.use(bodyParser.json());
// app.use('/users', userRoutes);

// Подключение маршрутов
app.use('/api', userRoutes);

// Пример основного маршрута для проверки работы сервера
app.get("/", (req, res) => {
  res.send("Cashback_WB Backend is running!");
});

sequelize
  .authenticate()
  .then(() => console.log('Database connected!'))
  .catch((err) => console.error('Error connecting to the database:', err));

module.exports = app;
