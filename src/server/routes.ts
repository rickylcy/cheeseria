import * as express from 'express';
const cheeses = require('./data/cheeses.json');
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {

    res.json(cheeses);
});

router.post('/api/purchase',jsonParser, (req, res, next) => {
    var data = req.body;
    console.log("data", data)
    res.json('POST request to the homepage')
});


export default router;