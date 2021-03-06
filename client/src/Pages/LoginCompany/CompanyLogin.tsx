import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
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
import {Redirect} from "react-router-dom";
import {Row} from 'react-bootstrap';

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
    cursor:"pointer",
  },

}));

const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const [isRedirectRegister, setIsRedirectRegister] = useState(false);
  const [loginError, setLoginError] = useState<null|string>(null);


  const routeToRegister = () => {
    setIsRedirectRegister(true);
  }
   const fetchLogin = (event:any) => {
     setLoginStatus(true);
  };

  return (
      <div className='login'>
        {loginStatus && <Redirect to='/companies'/>}
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"/>}
              label="Remember me"
            />
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
          </form>
        </div>
        <h1>{loginStatus}</h1>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </div>
  );
}

export default SignIn;