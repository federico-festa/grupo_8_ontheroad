const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const app = express();

const publicPath = path.resolve(__dirname, '../public');

const userLog = require('./middlewares/userLog');

const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');

app.use(session( {secret: 'kerouac', resave: false, saveUninitialized: false}));
app.use(express.static(publicPath));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false}));
app.use(userLog);

app.listen(3000, () => {
    console.log('Servidor corriendo - 3000');
});

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/user', userRoutes);

module.exports = app;