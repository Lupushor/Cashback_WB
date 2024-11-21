const { Product } = require('../models');

// Добавление нового продукта
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error('Ошибка создания продукта:', error);
    res.status(500).json({ error: 'Ошибка создания продукта' });
  }
};
