import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Redirect } from "react-router-dom";
import {Button} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';

type SideBarProps = {
  toggled: boolean
  handleToggleSidebar: any
  title: any
}


const SideBar: React.FC<SideBarProps> = (props) => {
  const { toggled, handleToggleSidebar, title } = props;
  const [isEditProfileRedirect, setIsEditProfileRedirect] = useState(false);
  const [isStudentNotificationRedirect, setIsStudentNotificationRedirect] = useState(false);
  const [isVacancyRedirect, setIsVacancyRedirect] = useState(false);
  console.log(toggled);
  const onclickEditProfileRoute = () => {
    setIsEditProfileRedirect(true);
  }
  const onclickStudentNotificationRoute = () => {
    setIsStudentNotificationRedirect(true);
  }
  const onclickVacancyRoute = () => {
    setIsVacancyRedirect(true);
  }

  return (
    <ProSidebar
      image={undefined}
      rtl={false}
      collapsed={false}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,

            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >

        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            suffix={<span className="badge red"></span>}
            align="center"
          >
            <Button variant="contained" color="secondary">
            unavailable
            </Button>
          </MenuItem>
          {/* {isEditProfileRedirect && <Redirect to='/editprofile'/>} */}

          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red"></span>}
            onClick={onclickEditProfileRoute}
          >
            {isEditProfileRedirect && <Redirect to='/editprofile' />}
            Edit Profile
          </MenuItem>

          <MenuItem icon={<NotificationsActiveIcon />}
            onClick={onclickStudentNotificationRoute}
          >
            {isStudentNotificationRedirect && <Redirect to='/notification' />}
            Notification
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow"></span>}
            title='Vacancy'
            icon={<FaRegLaughWink />}
            onClick={onclickVacancyRoute}
          >
            {isVacancyRedirect && <Redirect to='/vacancy' />}
          </SubMenu>
          <SubMenu
            title='Interviews'
            icon={<FaHeart />}
          >
            
          </SubMenu>
          <MenuItem icon={<ExitToAppIcon />}
           
          >
           
            LogOut
          </MenuItem>
        </Menu>
        <div className='px-2'>
          <Calendar />
        </div>
      </SidebarContent>
    </ProSidebar>
  );
};

export default SideBar;
