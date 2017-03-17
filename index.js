
var express = require('express');
var todoController = require('./controllers/todocontroller');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files 
// app.use('/assets', express.static('./public')); // path agr den to ye /assets/ k routes p hi ye static file attach krega jo public dir me hn
app.use(express.static('./public')); // path agr nhi den to ye har route p ye static file attach krega jo public dir me hn

// fire controllers
todoController(app);

//listening to port 3000
app.listen(3000); 
console.log('listening to port 3000');

