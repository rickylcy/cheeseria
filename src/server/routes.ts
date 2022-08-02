import * as express from 'express';
const connection = require("./connect");
const cheeses = require('./data/cheeses.json');
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {

    res.json(cheeses);
});

router.post('/api/purchase',jsonParser, async (req, res, next) => {
    var data = req.body;
    //var insert_query = `INSERT INTO purchase_history (items, total) VALUES (${}, ${})`;
    /*var query = `SELECT * FROM purchase_history`;
    await connection.query(`SELECT * FROM purchase_history`, (err, rows, fields) => {
        if (err) throw err
      
        console.log('The solution is: ', rows[0].solution)
      })*/
    res.json('POST request to the homepage')
});


export default router;