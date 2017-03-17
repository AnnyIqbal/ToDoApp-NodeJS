var bodyParser = require('body-parser');

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