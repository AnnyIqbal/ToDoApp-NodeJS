var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the mongodb
mongoose.connect('mongodb://anny:todoapp@ds133670.mlab.com:33670/todoapp');

// create a schema for mongodb - a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema); //create model based on the schema
var itemOne = Todo({item: 'anny is ok'}).save(function (err) {
    if(err) throw err;
    console.log('item saved!');
});

var urlencodedParser = bodyParser.urlencoded({extended: false});

var data = [{item: 'hello world'}, {item: 'good going'}, {item: 'keep it up'}];

module.exports = function(app) {
    // get data
    app.get('/', function(req,res){
        res.render('home');
    })
    app.get('/todo', function(req,res) {
        res.render('todo', {'todos': data});
    });
    // post data (add a todo)
    app.post('/todo', urlencodedParser, function(req,res) {
        data.push(req.body);
        res.json(data);
    });
    // delete data (dlt a todo)
    app.delete('/todo/:item', function(req,res) {
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, "-") !== req.params.item;
        });
        res.json(data);
    });
};