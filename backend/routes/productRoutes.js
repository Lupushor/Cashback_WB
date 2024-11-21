const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/productController');

// Маршрут для добавления нового продукта
router.post('/products', createProduct);

module.exports = router;
