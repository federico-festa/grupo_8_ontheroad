const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const app = express();

const publicPath = path.resolve(__dirname, '../public');

const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');

app.set('view engine', 'ejs');

app.use(express.static(publicPath));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false}));
app.use(session( {secret: 'ontheroad'}));

app.listen(3000, () => {
    console.log('Servidor corriendo - 3000');
});

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/user', usersRoutes);

module.exports = app;