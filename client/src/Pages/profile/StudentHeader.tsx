import React, {useState} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {useStyles,useStyles2} from "../../components/header/headerConstants";
import {Container} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {AiFillHome} from "react-icons/all";
import {RiCalendarEventLine} from "react-icons/all";
import {HiUserGroup} from "react-icons/all";
import {FaRegBuilding} from "react-icons/all";
import {FaUserGraduate} from "react-icons/all";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationPanel from '../../components/header/notification/NotificationPanel';
// import NotificationPanel from "./notification/NotificationPanel";

type HeaderProps = {
  title: string
}

const StudentHeader: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  const {title} = props;
  const [isRedirectCurrentEvents, setIsRedirectCurrentEvents] = useState(false);
  const [isHomeRedirect, setIsHomeRedirect] = useState(false);
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
    <Container fluid={true} className='header sticky-top'>
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
        <NotificationPanel/>
        {isRedirectLogin && <Redirect to='/companyLogin'/>}
        <Button variant="outlined" size="small" onClick={onclickRouteLogin}>
          Log Out
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
          <i className='head-label'>Home</i><i className='head-icon'><AiFillHome size='1.6em'/></i>
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
          <i className='head-label'>Events</i><i className='head-icon'><RiCalendarEventLine size='1.6em'/></i>
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
          <i className='head-label'>About Us</i><i className='head-icon'><HiUserGroup size='1.6em'/></i>
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
          <i className='head-label'>Students</i><i className='head-icon'><FaUserGraduate size='1.6em'/></i>
        </Link>
      </Toolbar>
    </Container>
  );
}


export default StudentHeader;