var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the mongodb
mongoose.connect('mongodb://anny:todoapp@ds133670.mlab.com:33670/todoapp');

// create a schema for mongodb - a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema); //create model based on the schema

var urlencodedParser = bodyParser.urlencoded({extended: false});

// var data = [{item: 'hello world'}, {item: 'good going'}, {item: 'keep it up'}];

module.exports = function(app) {
    // get data 
    app.get('/', function(req,res){
        res.render('home');
    })
    app.get('/todo', function(req,res) {
    // get data from mongodb and pass it to view
        
        // Todo.find({item: 'anny is ok'}); // means grab this specific item
        Todo.find({}, function(err, data) { // empty obj means grab all items 
            if(err) throw err;
            res.render('todo', {todos: data});
        });        
    });

    app.post('/todo', urlencodedParser, function(req,res) {
    // get data from view and add ot to mongodb
        var newTodo = Todo(req.body).save(function(err, data) {
            if(err) throw err;
            res.json(data);
        });
    });
    app.delete('/todo/:item', function(req,res) {
    // delete requested item form mongodb
        Todo.find(
                    {item: req.params.item.replace(/\-/g, " ")}
                 ).remove(function (err, data){
                     if(err) throw err;
                     res.json(data);
                   });
    });
};