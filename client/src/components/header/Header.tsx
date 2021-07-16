import React, {useState} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from "./headerConstants";
import {Container} from "react-bootstrap";
import {Redirect} from "react-router-dom";

type HeaderProps = {
  title: string
}

const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  const {title} = props;
  const [isRedirectCurrentEvents, setIsRedirectCurrentEvents] = useState(false);
  const [isHomeRedirect, setIsHomeRedirect] = useState(false);
  const [isRedirectNews, setIsRedirectNews] = useState(false);
  const [isRedirectLogin, setIsRedirectLogin] = useState(false);
  const [isRedirectStudents, setIsRedirectStudents] = useState(false);
  const [isRedirectCompanies, setIsRedirectCompanies] = useState(false);
  const [isRedirectAboutUs, setIsRedirectAboutUs] = useState(false);
  const onclickHomeRoute = () => {
    setIsHomeRedirect(true);
  }
  const onclickRouteLogin = () => {
    setIsRedirectLogin(true);
  }
  const onclickRouteNews = () => {
    setIsRedirectNews(true);
  }
  const onclickRouteStudents = () => {
    setIsRedirectStudents(true);
  }
  const onclickRouteCompanies = () => {
    setIsRedirectCompanies(true);
  }
  const onclickRouteAboutUs = () => {
    setIsRedirectAboutUs(true);
  }
  const onclickRouteCurrentEvents = () => {
    setIsRedirectCurrentEvents(true);
  }
  return (
    <Container fluid={true}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {isRedirectLogin && <Redirect to='/login'/>}
        <Button variant="outlined" size="small" onClick={onclickRouteLogin}>
          Sign IN
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {isHomeRedirect && <Redirect to='/'/>}
        <Link
          color="inherit"
          noWrap
          key={'home'}
          variant="body2"
          onClick={onclickHomeRoute}
          className={classes.toolbarLink}
        >
          Home
        </Link>
        {isRedirectCurrentEvents && <Redirect to='/currentEvents'/>}
        <Link
          color="inherit"
          noWrap
          key={'currentEvents'}
          variant="body2"
          onClick={onclickRouteCurrentEvents}
          className={classes.toolbarLink}
        >
          Current Events
        </Link>
        {isRedirectAboutUs && <Redirect to='/aboutUs'/>}
        <Link
          color="inherit"
          noWrap
          key={'aboutUs'}
          variant="body2"
          onClick={onclickRouteAboutUs}
          className={classes.toolbarLink}
        >
          About Us
        </Link>
        {isRedirectCompanies && <Redirect to='/companies'/>}
        <Link
          color="inherit"
          noWrap
          key={'companies'}
          variant="body2"
          onClick={onclickRouteCompanies}
          className={classes.toolbarLink}
        >
          Companies
        </Link>
        {isRedirectStudents && <Redirect to='/students'/>}
        <Link
          color="inherit"
          noWrap
          key={'students'}
          variant="body2"
          onClick={onclickRouteStudents}
          className={classes.toolbarLink}
        >
          Students
        </Link>
        {isRedirectNews && <Redirect to='/news'/>}
        <Link
          color="inherit"
          noWrap
          key={'News'}
          variant="body2"
          onClick={onclickRouteNews}
          className={classes.toolbarLink}
        >
          News
        </Link>
      </Toolbar>
    </Container>
  );
}


export default Header;