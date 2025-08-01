const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;