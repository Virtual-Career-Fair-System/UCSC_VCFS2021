const express = require('express')

const app = express()
const mysql = require('mysql')
const cors = require('cors')

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

    db.query('INSERT INTO student(firstname,lastname,email,pasword) VALUES (?,?,?,?);',[fname,lname,email,password], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Value Inserted");
        }
    })
})

app.post('/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    db.query('SELECT * FROM student WHERE email = ? AND pasword = ? ',[email,password], (err, result)=>{
        if(err){
            res.send({err: err})
        }
        
        if(result){
            // console.log(email);
        res.send(result);
        }
        else{
            res.send({message: "Wrong Combination"});
        }
        
    })
})

app.listen(3001,()=>{
    console.log("server is running on port 3001")
})