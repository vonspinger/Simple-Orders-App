const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/simpleorders', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

const productRouter = require('./routes/products');
const orderRouter = require('./routes/orders');
const authRouter = require('./routes/auth');

app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/auth', authRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});