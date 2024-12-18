var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var HotelRouter = require('./controller/hotelController');
var app = express();

app.use(logger('dev'));
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/hotel2025').then(() => {
        console.log("DB connected !");
    })
    .catch((error) => {
        console.log("error : " + error);
    })
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/Hotel', HotelRouter)

// catch 404 and forward to error handler   
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

var http = require('http');
const { error } = require('console');
var server = http.createServer(app)
server.listen(3000, () => {
    console.log('server started');

})
module.exports = app;