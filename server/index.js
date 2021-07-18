const express = require('express')

const app = express()
const mysql = require('mysql')
const cors = require('cors')

var bcrypt = require('bcrypt');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host : 'localhost',
    password: 'password@123',
    database: 'career_fair_2021'
});




app.post('/create',(req,res)=>{
    // console.log(req.body)
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password,10, function(err, hash) {
    db.query('INSERT INTO student(firstname,lastname,email,password) VALUES (?,?,?,?);',[fname,lname,email,hash], function (err, result, fields){
        if(err) throw err;
        res.send({
            message: 'Table Data',
            Total_record:result.length,
            result:result
            });
    })
})
})

app.get('/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password,10, function(err, hash) {
    db.query('SELECT * FROM student WHERE email = ? AND password = ? ',[email,hash], function (err, result, fields){
        if(err) throw err;
            res.send({err: err})
            res.send({
                message: 'Table Data',
                Total_record:result.length,
                result:result
                });
        
    })
})
})

app.listen(3001,()=>{
    console.log("server is running on port 3001")
})