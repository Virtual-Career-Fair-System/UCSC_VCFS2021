import express, {Application, Request, Response, NextFunction, urlencoded} from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');
const app: Application = express();
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const db: any = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'career_fair_2021'
});

app.use(cors());
app.use(express.json())

app.post('/create', (req, res) => {
  // console.log(req.body)
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;
  bcrypt.hash(password, 10, function (err: any, hash: any) {
    db.query('INSERT INTO student(f_name,l_name,email,password) VALUES (?,?,?,?);', [fname, lname, email, hash], (err: any, result: any, fields: any) => {
      res.send({
        message: 'Table Data',
        Total_record: result.length,
        result: result
      });
    });
  });
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  bcrypt.hash(password, 10, function (err:any, hash:any) {
    db.query('SELECT * FROM student WHERE email = ? AND password = ? ', [email, hash], function (err:any, result:any, fields:any) {
      if (err) {
        res.send(null);
      }else{
        res.send({
          message: 'Table Data',
          Total_record: result.length,
          result: result
        });
      }
    });
  });
});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  const sqlInsert = "INSERT INTO student(f_name,l_name,email,password) VALUES ('sudesh','bandara','swelikotuwa@gmail.com','sudesh')";
  db.query(sqlInsert, (err: any, result: any) => {
    res.send(err);
  })
});

app.listen(5000, () => console.log('server running'));