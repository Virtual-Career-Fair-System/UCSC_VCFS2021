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
import {FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart} from 'react-icons/fa';
import {Button, Col, Image, Row} from "react-bootstrap";
import Calendar from "react-calendar";
import profileImage from '../../assets/image/profileImages/1.jpg'

type SideBarProps = {
  toggled: boolean
  handleToggleSidebar: any
}

const SideBarStudent: React.FC<SideBarProps> = (props) => {

  const styles:any={
    fontFamily: 'Raleway, sans-serif',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }

  const {toggled, handleToggleSidebar} = props;
  console.log(toggled);

  return (
    <ProSidebar image={undefined} rtl={false} collapsed={false} toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar}>
      <SidebarHeader>
        <Row >
          <Col className='text-center py-2'>
            <Image className='profile-image' src={profileImage} roundedCircle />
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-2' style={styles}>
            W.G.S.L.Bandara
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-2'><Button  variant='info' size={'sm'}>profile</Button></Col>
        </Row>
      </SidebarHeader>
      <SidebarContent  style={styles}>
        <Menu iconShape="circle">
          <MenuItem /* icon={<FaTachometerAlt/>} suffix={<span className="badge red">sudesh</span>}*/ >
            Rules and Regulations
          </MenuItem>
          <MenuItem /* icon={<FaTachometerAlt/>} suffix={<span className="badge red">sudesh</span>}*/>
            Info
          </MenuItem>
          <MenuItem /* icon={<FaTachometerAlt/>} suffix={<span className="badge red">sudesh</span>}*/>
            Notifications
          </MenuItem>
        </Menu>
        <Col>
          <Calendar />
        </Col>
      </SidebarContent>
      <SidebarFooter  style={styles}>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBarStudent;
