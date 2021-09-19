import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import {Button, Col, Image, Row} from "react-bootstrap";
import Calendar from "react-calendar";
import {ILoginData} from "../../types/login";
import {useSelector} from "react-redux";
import {AppState} from "../../state/reducers";
import {Link} from "react-router-dom";

type SideBarProps = {
  toggled: boolean
  handleToggleSidebar: any
  thisEvent: any
}

const SideBarStudent: React.FC<SideBarProps> = (props) => {

  const styles: any = {
    fontFamily: 'Raleway, sans-serif',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }

  const {toggled, handleToggleSidebar} = props;
  const login: ILoginData = useSelector((state: AppState) => state.login.login);
  const image = () => {
    if (login.id) {
      return require(`../../assets/image/profileImages/${login.id}.jpg`).default;
    }
    return require(`../../assets/image/profileImages/user.jpg`).default;
  }

  return (
    <ProSidebar image={undefined} rtl={false} collapsed={false} toggled={toggled} breakPoint="md"
                onToggle={handleToggleSidebar}>
      <SidebarHeader>
        <Row>
          <Col className='text-center py-2'>
            <Image className='profile-image' src={image()} roundedCircle/>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-2' style={styles}>
            W.G.S.L.Bandara
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-2'><Button variant='info' size={'sm'}>Profile</Button></Col>
        </Row>
      </SidebarHeader>
      <SidebarContent style={styles}>
        <Menu iconShape="circle">
          {props.thisEvent &&
          <React.Fragment>
              <MenuItem /* icon={<FaTachometerAlt/>} suffix={<span className="badge red">sudesh</span>}*/ >
                  <Link className='nav-link' to={`/currentEvents/student/${props.thisEvent.event_code}/rules`}> Rules
                      and Regulations</Link>
              </MenuItem>
              <MenuItem /* icon={<FaTachometerAlt/>} suffix={<span className="badge red">sudesh</span>}*/>
                  <Link className='nav-link'
                        to={`/currentEvents/student/${props.thisEvent.event_code}/description`}> Info</Link>
              </MenuItem>
          </React.Fragment>
          }
        </Menu>
        <Col>
          <Calendar/>
        </Col>
      </SidebarContent>
      <SidebarFooter style={styles}>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBarStudent;

// <Route exact path="/currentEvents/student/:event_code" render={()=><Album/>}/>
// <Route path="/currentEvents/student/:event_code/ads/:category" render={()=><Ads thisEvent={thisEvent}/>}/>
// <Route path="/currentEvents/student/:event_code/rules" render={()=><Rules thisEvent={thisEvent} />}/>
// <Route path="/currentEvents/student/:event_code/description" render={()=><Description thisEvent={thisEvent} />}/>
