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
// import Axios from 'axios';
import {Redirect} from "react-router-dom";
// import {Alert, AlertTitle} from '@material-ui/lab';
import {Row} from 'react-bootstrap';
import {useMutation} from "@apollo/client";
import {CREATE_COMPANY} from "../../grapgQl/company/companyMutation";
import Swal from 'sweetalert2';

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
  const [createCompany] = useMutation(CREATE_COMPANY);
  const classes = useStyles();
  const [registered, setRegistered] = useState<true | false>(false);

  const [name, setName] = useState<null | string>(null);
  const [email, setEmail] = useState<null | string>(null);
  const [password, setPassword] = useState<null | string>(null);
  const [confirmPassword, setConfirmPassword] = useState<null | string>(null);
  const [registerError, setRegisterError] = useState<null | string>(null);

  const [errorName, setErrorName] = useState<null | string>(null);
  const [errorEmail, setErrorEmail] = useState<null | string>(null);
  const [errorPassword, setErrorPassword] = useState<null | string>(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<null | string>(null);

  const [isRedirectLogin, setIsRedirectLogin] = useState(false);
  const redirectToLogin = () => {
    setIsRedirectLogin(true);
  }
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const isValidEmail = (text: string) => {
    if (!text) {
      return;
    }
    const lastAtPos = text.lastIndexOf('@');
    const lastDotPos = text.lastIndexOf('.');
    return (lastAtPos < lastDotPos && lastAtPos > 0 && text.indexOf('@@') == -1 && lastDotPos > 2 && (text.length - lastDotPos) > 2);
  }

  const isValidPassword = (password: string) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");
    return re.test(password);
  }

  const isPasswordConfirmed = () => {
    return password === confirmPassword;
  }

  const validation = () => {
    let errorNameTemp: string = '';
    let errorEmailTemp: string = '';
    let errorPasswordTemp: string = '';
    let errorConfirmPasswordTemp: string = '';
    if (name === '' || !name) {
      errorNameTemp = "Required";
    }

    if (!email || email === '') {
      errorEmailTemp = "Required";
    } else if (!isValidEmail(email)) {
      errorEmailTemp = "Enter valid email";
    }

    if (password === '' || !password) {
      errorPasswordTemp = "Required";
    } else if (!isValidPassword(password)) {
      errorPasswordTemp = "Length of password must be greater than 7  and must contain at least one lowercase, uppercase, numeric, special character";
    }
    if (confirmPassword === '' || !confirmPassword) {
      errorConfirmPasswordTemp = "Required";
    } else if (!isPasswordConfirmed()) {
      errorConfirmPasswordTemp = "Password not matched";
    }

    setErrorName(errorNameTemp);
    setErrorEmail(errorEmailTemp);
    setErrorPassword(errorPasswordTemp);
    setErrorConfirmPassword(errorConfirmPasswordTemp);

    return !(errorNameTemp !== '' || errorEmailTemp !== '' || errorPasswordTemp !== '' || errorConfirmPasswordTemp !== '');

  }

  const fetchAddCompany = async (event: any) => {
    event.preventDefault();
    if (!validation()) {
      return;
    } else {
      createCompany({
        variables: {name: name, email: email, password: password}
      }).then((data) => {
         setRegistered(data.data.createCompany.successful);
        if (data.data.createCompany.successful) {
          Toast.fire({
            icon: 'success',
            title: 'Signed up successfully'
          });
        } else {
          Toast.fire({
            icon: 'warning',
            title: data.data.createCompany.message
          });
        }
      })
      ;
    }
  }
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
                {errorName &&
                <span className='register-error'>
                  {errorName}
                </span>
                }
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  value={name}
                  required
                  size='small'
                  fullWidth
                  id="name"
                  label="Company Name"
                  autoFocus
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                {errorEmail &&
                <span className='register-error'>
                  {errorEmail}
                </span>
                }
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={email}
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
                {errorPassword &&
                <span className='register-error'>
                  {errorPassword}
                </span>
                }
                <TextField
                  variant="outlined"
                  required
                  size='small'
                  fullWidth
                  value={password}
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
                <span className='register-error'>
                  {errorConfirmPassword}
                </span>
                }
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  size='small'
                  value={confirmPassword}
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
              onClick={fetchAddCompany}
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