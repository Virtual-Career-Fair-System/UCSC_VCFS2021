"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express_1.default();
const mysqlPromise = require('mysql2/promise');
const mysqlNotPromise = require('mysql2');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const dbnp = mysqlNotPromise.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'career_fair_2021'
});
const dbp = mysqlPromise.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'career_fair_2021'
});
app.use(cors());
app.use(express_1.default.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));
const isExistEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const [rowsStudents, fieldsStudents] = yield dbp.query("SELECT * FROM student WHERE email=?", [email]);
    const [rowsCompanies, fieldsCompanies] = yield dbp.query("SELECT * FROM company WHERE email=?", [email]);
    return (rowsStudents.length > 0 || rowsCompanies.length > 0);
});
const isExistRegNo = (regNo) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows, fields] = yield dbp.query("SELECT * FROM student WHERE reg_No=?", [regNo]);
    console.log(rows.length > 0);
    return rows.length > 0;
});
app.post('/createStudent', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const regNo = req.body.regNo;
    const password = req.body.password;
    if (yield isExistEmail(email)) {
        res.json({
            registered: false,
            message: 'Email already taken...'
        });
        return;
    }
    if (yield isExistRegNo(regNo)) {
        res.json({
            registered: false,
            message: 'Register Number already taken...'
        });
        return;
    }
    const PasswordSh1 = crypto.createHash('md5').update(password).digest('hex');
    dbnp.query('INSERT INTO student(f_name,l_name,email,password,reg_no) VALUES (?,?,?,?,?);', [fname, lname, email, PasswordSh1, regNo], (err, result, fields) => {
        if (err) {
            res.json({
                registered: false,
                message: 'Something went wrong...'
            });
        }
        else if (result) {
            res.json({
                registered: true,
                result: result.data
            });
        }
        else {
            res.json({
                registered: false,
                message: 'Something went wrong...'
            });
        }
    });
}));
app.post('/createCompany', (req, res) => {
});
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const PasswordSh1 = crypto.createHash('md5').update(password).digest('hex');
    dbp.query('SELECT * FROM student WHERE email = ? AND password = ?', [email, PasswordSh1], (err, result, fields) => {
        if (err) {
            res.json({
                login: false,
                message: 'Something went wrong! try again...'
            });
        }
        if (result.length > 0) {
            const id = result[0].id;
            const token = jwt.sign({ id }, 'secret', {
                expiresIn: 300
            });
            res.json({
                login: true,
                token: token,
                result: result
            });
        }
        else {
            res.json({
                login: false,
                message: 'Incorrect User Name or PassWord'
            });
        }
    });
});
app.get('/', (req, res, next) => {
    const sqlInsert = "INSERT INTO student(f_name,l_name,email,password,reg_no) VALUES ('sudesh','bandara','swelikotuwa@gmail.com','sudesh','2018cs023')";
    dbp.query(sqlInsert, (err, result) => {
        res.send(err);
    });
});
app.listen(5000, () => console.log('server running port 5000'));
