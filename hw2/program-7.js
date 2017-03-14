//模組化主程式
var hello = require('./hello')
hello(); //print Hello!

var hola = require('./hola');
hola(); //print Hola!

var util = require('util');
util.log('Log from util'); //print systemTime - Log from util