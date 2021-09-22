import React, {useState} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {useStyles, useStyles2} from "./headerConstants";
import {Container, Col, Row} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {AiFillHome} from "react-icons/all";
import {RiCalendarEventLine} from "react-icons/all";
import {HiUserGroup} from "react-icons/all";
import {FaRegBuilding} from "react-icons/all";
import {FaUserGraduate} from "react-icons/all";
import NotificationPanel from "./notification/NotificationPanel";
import {ILoginData} from "../../types/login";
import {AppState} from "../../state/reducers";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../state/actions/loginActions";
import {useHistory} from 'react-router-dom';

type HeaderProps = {
  title: string
}

const Header: React.FC<HeaderProps> = (props) => {
  const history = useHistory();
  const login: ILoginData = useSelector((state: AppState) => state.login.login);
  const dispatch = useDispatch();
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
  const onclickLogOut = () => {
    dispatch(logout());
    localStorage.setItem("loginID", '');
    localStorage.setItem("loginType", '');
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
  const onclickRedirectProfile =()=>{
    history.push(`/profileview`);
  }
  // @ts-ignore
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

        {isRedirectLogin && <Redirect to='/login'/>}

        {login.id && login.type==='student'&&
          <Button className='mr-3' variant="contained" size="small" onClick={onclickRedirectProfile}>
           Profile
          </Button>
        }
        {login.id ?
          <Button variant="outlined" size="small" onClick={onclickLogOut}>
            LOGOUT
          </Button> :
          <Button variant="outlined" size="small" onClick={onclickRouteLogin}>
            Sign IN
          </Button>
        }

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
      {/*  <Link
          color="inherit"
          noWrap
          key={'aboutUs'}
          variant="body2"
          onClick={onclickRouteAboutUs}
          className={classes.toolbarLink}
        >
          <i className='head-label'>About Us</i><i className='head-icon'><HiUserGroup size='1.6em'/></i>
        </Link>*/}
        {isRedirectCompanies && <Redirect to='/companies'/>}
        <Link
          color="inherit"
          noWrap
          key={'companies'}
          variant="body2"
          onClick={onclickRouteCompanies}
          className={classes.toolbarLink}
        >
          <i className='head-label'>Companies</i><i className='head-icon'><FaRegBuilding size='1.6em'/></i>
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
      <Row>
      </Row>
    </Container>
  );
}


export default Header;
