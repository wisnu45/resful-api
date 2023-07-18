const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restfulapi'
});

//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});

//tampilkan semua data product
app.get('/api/products', (req, res) => {
    let sql = "SELECT * FROM product";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": results
        }));
    });
});

//tampilkan data product berdasarkan id
app.get('/api/products/:id', (req, res) => {
    let sql = "SELECT * FROM product WHERE product_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": results
        }));
    });
});

//Tambahkan data product baru



//Edit data product berdasarkan id



//Delete semua data product



//Delete data product berdasarkan id



//Server listening
app.listen(3000, () => {
    console.log('Server Berjalan Di Port 3000');
});