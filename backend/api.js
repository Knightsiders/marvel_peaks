
var fs = require('fs');
var express = require('express');
 
var app = express();
var myrouter = express.Router();

var bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var content = JSON.parse(fs.readFileSync("userMock.json"));

var hostname = 'localhost';
var port = 8888;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});


myrouter.route('/users/page/:numPage')
.get(function(req,res){
    console.log('Request incoming')
    // A AMELIORER CEPABO
    if (!isNaN(req.params.numPage) && req.params.numPage > 0) {
        itemEnd = (req.params.numPage * 10)-1;
        itemStart = itemEnd - 9;
        res.json(content.slice(itemStart, itemEnd));
    } else {
        console.error('Api param not a number !')
    }
});


function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}


myrouter.route('/users/filter/:prop')
.get(function(req,res){
    console.log(Object.getOwnPropertyNames(content[0]));
    console.log('Request filter incoming: '+ req.params.prop);
    if (Object.getOwnPropertyNames(content[0]).includes(req.params.prop)) {

        content.sort(dynamicSort(req.params.prop));
        res.sendStatus(200)
    } else {
        console.error('Api param is not a property from Object !')
    }
});

app.use(myrouter);

app.listen(port, hostname, function(){
    console.log('Le serveur est sur : http://'+hostname+':'+port);
});
