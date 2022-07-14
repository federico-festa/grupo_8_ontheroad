const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');
const userRouter = require('./routes/userRouter');

app.set('view engine', 'ejs');
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log('Servidor corriendo');
});

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);