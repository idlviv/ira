const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('./server/libs/mongoose');
const config = require('./server/config');
const errorhandler = require('errorhandler');
const HttpError = require('./server/error').HttpError;

const app = express();

const users = require('./server/routes/users');
const products = require('./server/routes/products');

app.use(cors());

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(require('./server/middleware/sendHttpError'));

app.use(passport.initialize());
app.use(passport.session());
require('./server/config/passport')(passport);

app.use('/api', users);
app.use('/api', products);

// app.get('/', function(req, res) {
//   res.send('node');
// });

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '/public'));
});

app.use(function(err, req, res, next) {
  if (typeof err === 'number') { //next(404);
    err = new HttpError(err);
  }

  if (err instanceof HttpError) {
    res.sendHttpError(err);
  } else {
    if (app.get('env') === 'development') {
      let errorHandler = errorhandler();
      console.log('errorhandler catch error');
      errorHandler(err, req, res, next);
    } else {
      log.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }

});

app.listen(process.env.PORT || config.get('port'),
  () => console.log('Server on port ' + process.env.PORT || config.get('port')));
