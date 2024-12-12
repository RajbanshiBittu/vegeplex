const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(bodyParser.json());

//MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bitturajbanshi@2024',
    database: 'VegePlex',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

//Registration endpoint
app.post('/register', (req, res) => {
    const {username, contact, password} = req.body;
    const sql = 'INSERT INTO users (username, contact, password) VALUES (Bittu Rajbanshi,8927834551,Bittu@raj2024)';
    db.query(sql, [username, contact, password], (err, result) => {
        if (err){
            return res.status(500).json({error: err.messege});
        }
        res.status(201).json({messege: 'User registered successfully!'});
    });
});

//Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});