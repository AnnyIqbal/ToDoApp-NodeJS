module.exports = function(app) {
    // get data
    app.get('/', function(req,res){
        res.render('home');
    })
    app.get('/todo', function(req,res) {
        res.render('todo');
    });
    // post data (add a todo)
    app.post('/todo', function(req,res) {
        
    });
    // delete data (dlt a todo)
    app.delete('/todo', function(req,res) {
        
    });
};