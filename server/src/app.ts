import express, {Application, Request, Response, NextFunction, urlencoded, response} from 'express';

const cors = require('cors');
const bodyParser = require('body-parser');
const app: Application = express();
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const sha1 = require('sha1');
const crypto = require('crypto');

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
  const PasswordSh1 = crypto.createHash('md5').update(password).digest('hex');
  db.query('INSERT INTO student(f_name,l_name,email,password) VALUES (?,?,?,?);', [fname, lname, email, PasswordSh1], (err: any, result: any, fields: any) => {
    if (err) {
      res.send({err: err});
    }
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: 'Failed to Register...'
      });
    }
  });
});

app.post('/login', (req, res) => {
  const email: string = req.body.email;
  const password: string = req.body.password;
  const PasswordSh1 = crypto.createHash('md5').update(password).digest('hex');
  db.query('SELECT * FROM student WHERE email = ? AND password = ?', [email, PasswordSh1], (err: any, result: any, fields: any) => {
    if (err) {
      res.send({err: err});
    }
    if (result.length>0) {
      res.send({
        login:true,
        result:result
      });
    } else {
      res.send({
        login:false,
        message: 'Incorrect User Name or PassWord'
      });
    }
  });
})
;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  const sqlInsert = "INSERT INTO student(f_name,l_name,email,password) VALUES ('sudesh','bandara','swelikotuwa@gmail.com','sudesh')";
  db.query(sqlInsert, (err: any, result: any) => {
    res.send(err);
  })
});

app.listen(5000, () => console.log('server running'));