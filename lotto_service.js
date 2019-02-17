'use strict'

var app = require('express')();
var lotto = require('./lotto');

var port = process.env.PORT || 7777;

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.get('/lotto/:lottoBarcode', function (req, res) {
    var data = {
        "lotto": {
            "lottoType": req.params.lottoBarcode.substring(0,5),
            "lottoBarcode": req.params.lottoBarcode.substring(9,15)
        }
    };

    lotto.check(data, (jsonData) => {
        res.json(jsonData);
    })
});

app.get('/lotto/:lottoType/:lottoBarcode', function (req, res) {
    var data = {
        "lotto": {
            "lottoType": req.params.lottoType,
            "lottoBarcode": req.params.lottoBarcode
        }
    };

    lotto.check(data, (jsonData) => {
        res.json(jsonData);
    })
});

app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});
