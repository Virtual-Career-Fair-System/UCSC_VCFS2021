import express, {Application, Request, Response, NextFunction, urlencoded, response} from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');
const app: Application = express();
const mysqlPromise = require('mysql2/promise');
const mysqlNotPromise = require('mysql2');
const crypto = require('crypto');
const jwt =require('jsonwebtoken');

const dbnp: any = mysqlNotPromise.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'career_fair_2021'
});

const dbp: any = mysqlPromise.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'career_fair_2021'
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));

const isExistEmail = async (email: string) => {
  const [rowsStudents,fieldsStudents]: any = await dbp.query("SELECT * FROM student WHERE email=?",[email]);
  const [rowsCompanies,fieldsCompanies]: any = await dbp.query("SELECT * FROM company WHERE email=?",[email]);
  return (rowsStudents.length > 0||rowsCompanies.length > 0);
}

const isExistRegNo = async (regNo: string) => {
  const [rows,fields]: any = await dbp.query("SELECT * FROM student WHERE reg_No=?",[regNo]);
  console.log(rows.length > 0);
  return rows.length > 0;
}

app.post('/createStudent', async (req, res) => {

  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const regNo = req.body.regNo;
  const password = req.body.password;

  if (await isExistEmail(email)) {
    res.json({
      registered: false,
      message: 'Email already taken...'
    });
    return;
  }

  if (await isExistRegNo(regNo)) {
    res.json({
      registered: false,
      message: 'Register Number already taken...'
    });
    return;
  }

  const PasswordSh1 = crypto.createHash('md5').update(password).digest('hex');
  dbnp.query('INSERT INTO student(f_name,l_name,email,password,reg_no) VALUES (?,?,?,?,?);',
    [fname, lname, email, PasswordSh1, regNo], (err: any, result: any, fields: any) => {
      if (err) {
        res.json({
          registered: false,
          message: 'Something went wrong...'
        });
      } else if (result) {
        res.json({
          registered: true,
          result: result.data
        });
      } else {
        res.json({
          registered: false,
          message: 'Something went wrong...'
        });
      }
    });
});

app.post('/createCompany', (req, res) => {

});

app.post('/login', (req:Request, res:Response) => {
  const email: string = req.body.email;
  const password: string = req.body.password;
  const PasswordSh1 = crypto.createHash('md5').update(password).digest('hex');
  dbp.query('SELECT * FROM student WHERE email = ? AND password = ?', [email, PasswordSh1], (err: any, result: any, fields: any) => {
    if (err) {
      res.json({
        login: false,
        message: 'Something went wrong! try again...'
      });
    }
    if (result.length > 0) {
      const id:Number =result[0].id;
      const token:string=jwt.sign({id},'secret',{
        expiresIn:300
      });

      res.json({
        login: true,
        token:token,
        result: result
      });
    } else {
      res.json({
        login: false,
        message: 'Incorrect User Name or PassWord'
      });
    }
  });
})
;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  const sqlInsert = "INSERT INTO student(f_name,l_name,email,password,reg_no) VALUES ('sudesh','bandara','swelikotuwa@gmail.com','sudesh','2018cs023')";
  dbp.query(sqlInsert, (err: any, result: any) => {
    res.send(err);
  })
});

app.listen(5000, () => console.log('server running port 5000'));