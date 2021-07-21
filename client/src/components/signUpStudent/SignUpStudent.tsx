import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import {Redirect} from "react-router-dom";
import {Alert, AlertTitle} from '@material-ui/lab';
import {Row} from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const inputStyle = {fontSize: 1, backgroundColor: 'unset', paddingBottom: 0};

export default function SignUpStudent() {
  const classes = useStyles();
  const [registered, setRegistered] = useState<true | false>(false);

  const [fname, setFname] = useState<null | string>(null);
  const [lname, setLname] = useState<null | string>(null);
  const [email, setEmail] = useState<null | string>(null);
  const [password, setPassword] = useState<null | string>(null);
  const [confirmPassword, setConfirmPassword] = useState<null | string>(null);
  const [regNo, setRegNo] = useState<null | string>(null);
  const [registerError, setRegisterError] = useState<null | string>(null);

  const [errorFName, setErrorFName] = useState<null | string>(null);
  const [errorLName, setErrorLName] = useState<null | string>(null);
  const [errorEmail, setErrorEmail] = useState<null | string>(null);
  const [errorPassword, setErrorPassword] = useState<null | string>(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<null | string>(null);
  const [errorRegNo, setErrorRegNo] = useState<null | string>(null);

  const [isRedirectLogin, setIsRedirectLogin] = useState(false);
  const redirectToLogin = () => {
    setIsRedirectLogin(true);
  }

  const x=(event:any)=>{
    console.log(event.target.value)
    setFname(event.target.value);
  }

  const isOnlyLetters = (text: string) => {
    if (!text) {
      return;
    }
    return text.match(/^[a-zA-Z]+$/);
  }

  const isValidEmail = (text: string) => {
    if (!text) {
      return;
    }
    const lastAtPos = text.lastIndexOf('@');
    const lastDotPos = text.lastIndexOf('.');
    return (lastAtPos < lastDotPos && lastAtPos > 0 && text.indexOf('@@') == -1 && lastDotPos > 2 && (text.length - lastDotPos) > 2);
  }

  const isValidPassword = (password: string) => {
    const re = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
    return re.test(password);
  }

  const isPasswordConfirmed = () => {
    return password === confirmPassword;
  }

  const isValidRegNo = () => {
    if (!regNo) {
      return;
    }
    const re = new RegExp("^[0-9]{4}[c|i][s][0-1][0-9]{2}$");
    return re.test(regNo);
  }

  const validation = () => {
    setErrorFName(null);
    setErrorLName(null);
    setErrorEmail(null);
    setErrorRegNo(null);
    setErrorPassword(null);
    setErrorConfirmPassword(null);

    console.log(fname)
    if (fname === '' || !fname) {
      setErrorFName("Required");
    } else if (!isOnlyLetters(fname)) {
      setErrorFName("Enter valid first name");
    }

    if (lname === '' || !lname) {
      setErrorLName("Required");
    } else if (!isOnlyLetters(lname)) {
      setErrorLName("Enter valid last name");
    }

    if (!email||email==='') {
      setErrorEmail("Required");
    } else if (!isValidEmail(email)) {
      setErrorEmail("Enter valid email");
    }

    if (password === '' || !password) {
      setErrorPassword("Required");
    } else if (!isValidPassword(password)) {
      console.log(isValidPassword(password));
      console.log(password);
      setErrorPassword("Minimum length of this field must be equal or greater than 8");
    }
    if (confirmPassword === ''||!confirmPassword) {
      setErrorConfirmPassword("Required");
    } else if (!isPasswordConfirmed()) {
      setErrorConfirmPassword("Password not matched");
    }

    if (regNo === '' || !regNo) {
      setErrorRegNo("Required");
    } else if (!isValidRegNo()) {
      setErrorRegNo('Registration number is not valid')
    }
  }

  const fetchAddStudent =  (event: any) => {
    event.preventDefault();
    validation();
    if(errorFName||errorLName||errorEmail||errorPassword||errorConfirmPassword||errorRegNo||!fname||!lname||!email||!password||!confirmPassword||!regNo){
      console.log("errorFName "+errorFName);
      console.log("errorLName "+errorLName);
      console.log("errorPassword "+errorPassword);
      console.log("errorConfirmPassword "+errorConfirmPassword);
      console.log("errorregNo "+errorRegNo);
      console.log("erroremail "+errorEmail);
      console.log("return");
      return;
    }else{
      console.log(errorFName);
      console.log(errorLName);
      console.log(errorPassword);
      console.log(errorConfirmPassword);
      console.log(errorFName);
      console.log(errorFName);
      Axios.post('http://localhost:5000/createStudent', {
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        regNo:regNo,
      }).then((responce) => {
        if(responce.data.registered){
          setRegistered(true);
        }else {
          setRegistered(false);
          setRegisterError(responce.data.message);
        }
        setErrorFName(null);
        setErrorLName(null);
        setErrorEmail(null);
        setErrorRegNo(null);
        setErrorPassword(null);
        setErrorConfirmPassword(null);
      });
    }
  };

  return (
    <div className='register'>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {errorFName &&
                <Alert severity="error" style={inputStyle}>
                  {errorFName}
                </Alert>
                }
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  size='small'
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event) =>{x(event)}}
                />
              </Grid>
              <Grid item xs={12}>
                {errorLName &&
                <Alert severity="error" style={inputStyle}>
                  {errorLName}
                </Alert>
                }
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  size='small'
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={(event) => {
                    setLname(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                {errorEmail &&
                <Alert severity="error" style={inputStyle}>
                  {errorEmail}
                </Alert>
                }
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  size='small'
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                {errorRegNo &&
                <Alert severity="error" style={inputStyle}>
                  {errorRegNo}
                </Alert>
                }
                <TextField
                  variant="outlined"
                  required
                  size='small'
                  fullWidth
                  id="regNo"
                  label="Registration Number"
                  name="regNo"
                  autoComplete="regNo"
                  onChange={(event) => {
                    setRegNo(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                {errorPassword &&
                <Alert severity="error" style={inputStyle}>
                  {errorPassword}
                </Alert>
                }
                <TextField
                  variant="outlined"
                  required
                  size='small'
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                {errorConfirmPassword &&
                <Alert severity="error" style={inputStyle}>
                  {errorConfirmPassword}
                </Alert>
                }
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  size='small'
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirmPassword"
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Row className='login-error-label'>
              <label>{registerError && registerError}</label>
            </Row>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={fetchAddStudent}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                {(isRedirectLogin || registered) && <Redirect to='/login'/>}
                <Link variant="body2"
                      onClick={redirectToLogin}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}