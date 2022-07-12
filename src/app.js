const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log('Servidor corriendo');
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/cart', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});

app.get('/jujuy', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/jujuy.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
const mainRouter = require('./routers/mainRouter');
const productsRouter = require('./routers/productsRouter');
const userRouter = require('./routers/userRouter');

app.use('/mainRouter', mainRouter);
app.use('/')
app.use('/userRouter', userRouter);