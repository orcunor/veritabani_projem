var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var opn = require('opn');

const swaggerUi = require('swagger-ui-express');

const sequelize = require('./database/db');

// ekle 1
var urunRoute = require('./routes/UrunRoute');
var satistemsilcisiRoute = require('./routes/SatistemsilcisiRoute');
var siparisdetayRoute = require('./routes/SiparisdetayRoute');
var musteriRoute = require('./routes/MusteriRoute');
var siparisRoute = require('./routes/SiparisRoute');
var faturaRoute = require('./routes/FaturaRoute');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// ekle
const Urun = require('./model/Urun');
const Satistemsilcisi = require('./model/Satistemsilcisi');
const Siparisdetay = require('./model/Siparisdetay');
const Musteri = require('./model/Musteri');
const Siparis = require('./model/Siparis');
const Fatura = require('./model/Fatura');

// Tablo ilişkilendirmeleri (import edilen modeller burada ilişkilendiriliyor)
Urun.belongsTo(Satistemsilcisi); //ürüne userid ekler ve ilişkilendirir
Satistemsilcisi.hasMany(Urun);
Satistemsilcisi.hasMany(Siparisdetay);
Siparisdetay.belongsTo(Satistemsilcisi);
Siparisdetay.belongsTo(Urun);
Musteri.hasMany(Siparisdetay);
Siparisdetay.belongsTo(Musteri);
Musteri.belongsTo(Satistemsilcisi);
Satistemsilcisi.hasOne(Musteri);
Siparis.belongsTo(Musteri);
Musteri.hasMany(Siparis);
Fatura.belongsTo(Musteri);
Musteri.hasMany(Fatura);




var app = express();
swaggerDocument = require('./swagger.json');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(function (req, res, next) {
  res.header('Access-Control-Allsow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
  );
  next();
}); 

app.use(logger('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// buraya ekle 2
app.use('/', urunRoute);
app.use('/', satistemsilcisiRoute);
app.use('/', siparisdetayRoute);
app.use('/', musteriRoute);
app.use('/', faturaRoute);
app.use('/', siparisRoute);

// Model importları (burada modelleri ilişkilendirmek için import ediyoruz)
// const Urun = require("./model/Urun");
// const User = require("./model/user"); bu dursun





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});  
//Connection
sequelize
//.sync()
.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(process.env.PORT || 3001);
   // opn('http://localhost:3000/swagger/', { app: 'chrome' });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
