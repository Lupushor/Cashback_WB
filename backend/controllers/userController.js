const { users } = require('../models'); // Импорт модели users

const createUser = async (req, res) => {
  try {
    const { telegram_id, role } = req.body; // Получаем данные из тела запроса
    const newUser = await users.create({
      telegram_id,
      role,
    });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error('Ошибка создания пользователя:', error);
    return res.status(500).json({ message: 'Ошибка создания пользователя' });
  }
};

module.exports = { createUser };
