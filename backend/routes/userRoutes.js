const express = require('express');
const router = express.Router();
const { User } = require('../models');
const { createUser } = require('../controllers/userController');

// Получить всех пользователей
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Маршрут для создания пользователя
router.post('/users', createUser);

module.exports = router;
