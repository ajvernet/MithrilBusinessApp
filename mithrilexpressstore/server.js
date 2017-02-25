'use strict'

var express = require('express');

var app = express();
var bodyParser = require('body-parser');

var db = require('./config/db');

var URL = 'mongodb://localhost:27017/products';


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static(__dirname + '/src'));

app.use('/bin', express.static(__dirname + '/bin'));


app.get('/', function(req, res){
        res.sendFile(__dirname + 
                    '/index.html');
    console.log(req.body);
});

app.get('/all', function(req, res){


        var collection = db.get().collection('coding');
    
    collection.find().toArray(function(err, docs){
        res.json({jobs: docs})
        
    })

})

app.post('/addcustomer', function(req, res){
    
        console.log(req.body);
    var name = req.body;
    var collection = db.get().collection('customers');
    collection.insert(name);
    
    console.log(collection.find().toArray(function(err, docs){
        res.json({customers: docs})
        
    }))
})

db.connect(URL, function(err){
    if (err) return err;
    app.listen(3000, () => {
        console.log( 'Express started in ' + app.get('env') +
        ' mode on http://localhost: 3000' + 
        '; press Ctrl-C to terminate.' );
  });

})




                      
                      