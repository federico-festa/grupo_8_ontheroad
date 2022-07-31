const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');

const publicPath = path.resolve(__dirname, '../public');

const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');
const userRouter = require('./routes/userRouter');

app.set('view engine', 'ejs');
app.use(express.static(publicPath));
app.use(methodOverride('_method'));

app.listen(3030, () => {
    console.log('Servidor corriendo - 3000');
});

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);

module.exports = app;