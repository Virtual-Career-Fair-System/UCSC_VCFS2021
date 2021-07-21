import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Redirect } from "react-router-dom";
import Link from '@material-ui/core/Link';
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
          sudesh
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          {isEditProfileRedirect && <Redirect to='/editprofile' />}
          <Link
            color="inherit"
            noWrap
            key={'students'}
            variant="body2"


          >

{isEditProfileRedirect && <Redirect to='/editprofile' />}
            <MenuItem
              icon={<FaTachometerAlt />}
              suffix={<span className="badge red"></span>}
              onClick={onclickEditProfileRoute}
            >
              Edit Profile
            </MenuItem>
          </Link>
          {isStudentNotificationRedirect && <Redirect to='/notification' />}
          <Link
            color="inherit"
            noWrap
            key={'students'}
            variant="body2"
          >

            <MenuItem icon={<FaGem />} onClick={onclickStudentNotificationRoute}> Notification</MenuItem>
          </Link>

          {isVacancyRedirect && <Redirect to='/vacancy' />}
          <Link
            color="inherit"
            noWrap
            key={'students'}
            variant="body2"
          >


            <SubMenu
              suffix={<span className="badge yellow">3</span>}
              title='Vacancy'
              icon={<FaRegLaughWink />}
              onClick={onclickVacancyRoute}

            >

            </SubMenu>
          </Link>
          <SubMenu
            title='Interviews'
            icon={<FaHeart />}
          >
            <MenuItem>sudesh 1</MenuItem>
            <MenuItem>sudesh 2</MenuItem>
            <MenuItem>sudesh 3</MenuItem>
          </SubMenu>
          <SubMenu title='Accepted Cv' icon={<FaList />}>
            <MenuItem>sudesh 1 </MenuItem>
            <MenuItem>sudesh 2 </MenuItem>
            <SubMenu title='sudesh 3'>
              <MenuItem>sudesh 3.1 </MenuItem>
              <MenuItem>sudesh 3.2 </MenuItem>
              <SubMenu title={`sudesh 3.3`}>
                <MenuItem>sudesh 3.3.1 </MenuItem>
                <MenuItem>sudesh 3.3.2 </MenuItem>
                <MenuItem>sudesh 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
        <div className='px-2'>
          <Calendar />
        </div>
      </SidebarContent>
    </ProSidebar>
  );
};

export default SideBar;
