const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const userLog = require('./middlewares/userLog');
const cors = require('cors');
const app = express();

const publicPath = path.resolve(__dirname, '../public');

const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/userRoutes');
const productsApiRoutes = require('./routes/api/productsApiRoutes');
const usersApiRoutes = require('./routes/api/usersApiRoutes');

app.set('view engine', 'ejs');

app.use(session( {secret: 'kerouac', resave: false, saveUninitialized: false}));
app.use(cookies());
app.use(express.static(publicPath));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(userLog);
app.use(cors());

app.listen(3001, () => {
    console.log('Servidor corriendo - 3001');
});

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/user', userRoutes);
app.use('/api/products', productsApiRoutes);
app.use('/api/users', usersApiRoutes);

app.use((req, res, next) => {
    res.status(404).render('error');
    next();
});
app.use((req, res, next) => {
    next(createError(404));
});
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err:{};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;