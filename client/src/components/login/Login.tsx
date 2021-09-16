import Header from "../header/Header";
import Footer from "../footer/Footer";
import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import {Redirect} from "react-router-dom";
import {Row} from 'react-bootstrap';
import {useMutation} from "@apollo/client";
import Swal from "sweetalert2";
import {CREATE_STUDENT} from "../../grapgQl/student/studentMutation";
import {LOGIN} from "../../grapgQl/user/loginMutation";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../state/actions/loginActions";
import {Alert} from "@material-ui/lab";
import {inputStyle} from "../../Pages/registerStudent/RegisterStudentsConstants";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    padding: theme.spacing(1),
    flexShrink: 0,
    cursor: "pointer",
  },

}));

const SignIn = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const [isRedirectRegister, setIsRedirectRegister] = useState(false);
  const [loginError, setLoginError] = useState<null | string>(null);
  const [errorEmail, setErrorEmail] = useState<null | string>(null);
  const [errorPassword, setErrorPassword] = useState<null | string>(null);

  const [loginFetch] = useMutation(LOGIN);

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


  const routeToRegister = () => {
    setIsRedirectRegister(true);
  }
  const isValidEmail = (text: string) => {
    if (!text) {
      return;
    }
    const lastAtPos = text.lastIndexOf('@');
    const lastDotPos = text.lastIndexOf('.');
    return (lastAtPos < lastDotPos && lastAtPos > 0 && text.indexOf('@@') == -1 && lastDotPos > 2 && (text.length - lastDotPos) > 2);
  }
  const validation = () => {

    let errorEmailTemp: string = '';
    let errorPasswordTemp: string = '';

    if (!email || email === '') {
      errorEmailTemp = "Required";
    } else if (!isValidEmail(email)) {
      errorEmailTemp = "Enter valid email";
    }

    if (password === '' || !password) {
      errorPasswordTemp = "Required";
    }

    setErrorEmail(errorEmailTemp);
    setErrorPassword(errorPasswordTemp);

    return !(errorEmailTemp !== '' || errorPasswordTemp !== '');
  }
  const fetchLogin = (event: any) => {
    event.preventDefault();
    if (!validation()) {
      return;
    } else {
      loginFetch({
        variables: {email: email, password: password}
      }).then((data) => {

        if (data.data.login.successful) {
          dispatch(login({id: data.data.login.id, type: data.data.login.type}));
          localStorage.setItem("loginID", data.data.login.id);
          localStorage.setItem("loginType", data.data.login.type);
          Toast.fire({
            icon: 'success',
            title: data.data.login.message
          });
          setLoginStatus(data.data.login.successful);
        } else {
          Toast.fire({
            icon: 'warning',
            title: data.data.login.message
          });
        }
      });
    }
  }

  return (
    <div className='login'>
      {loginStatus && <Redirect to='/'/>}
      <Header title="Career Fair UCSC"/>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {errorEmail &&
                <span className='register-error'>
                  {errorEmail}
                </span>}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
                margin="normal"
                required
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
              <Row className='login-error-label'>
                <label>{loginError && loginError}</label>
              </Row>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={fetchLogin}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  {isRedirectRegister && <Redirect to='/chooseRegisterForm'/>}
                  <Link variant="body2"
                        onClick={routeToRegister}>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
        <h1>{loginError}</h1>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </div>
  );
}

export default SignIn;
