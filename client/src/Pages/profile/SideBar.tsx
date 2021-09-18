import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import { Redirect } from "react-router-dom";
import {Button} from 'react-bootstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {useMutation, useQuery} from "@apollo/client";
import {CHANGE_AVAILABLE} from "../../grapgQl/student/studentMutation";

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



const SideBar: React.FC<any> = (props) => {
  const [changeAvailable] = useMutation(CHANGE_AVAILABLE);
  const handleOnChangeAvailable = () =>{
    if(!props.student){
      return;
    }
    if(props.student.available=='0'){
      changeAvailable({variables:{id:Number(props.student.id),available:'1'}}).then(result=>setAvailable('1'))  
        }else{
          changeAvailable({variables:{id:Number(props.student.id),available:'0'}}).then(result=>setAvailable('0'))  
    }
  }
  useEffect(() => {
  if(!props.student){
    return;
  }
  setAvailable(props.student.available);

}, [props.student]);
  const [available,setAvailable] = useState<string>('0');
  const { toggled, handleToggleSidebar, title } = props;
  const [isEditProfileRedirect, setIsEditProfileRedirect] = useState(false);
  const [isStudentNotificationRedirect, setIsStudentNotificationRedirect] = useState(false);
  const [isVacancyRedirect, setIsVacancyRedirect] = useState(false);

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
          <MenuItem suffix={<span className="badge red"></span>}>
            <Button variant={available==='0'?"success":"danger"} onClick={handleOnChangeAvailable}>
            {available==='0'?'Available':'Unavailable'}
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
