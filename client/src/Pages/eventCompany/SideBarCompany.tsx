import React, {useEffect, useState} from 'react';
import {ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent,} from 'react-pro-sidebar';
import {Button, Col, Image, Row} from "react-bootstrap";
import Calendar from "react-calendar";
import {ILoginData} from "../../types/login";
import {useSelector} from "react-redux";
import {AppState} from "../../state/reducers";
import {Link} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {GET_COMPANY} from "../../grapgQl/company/companyMutation";

type SideBarProps = {
  toggled: boolean
  handleToggleSidebar: any
  thisEvent: any
}

const SideBarCompany: React.FC<SideBarProps> = (props) => {

  const [getCompany]=useMutation(GET_COMPANY);
  const [thisCompany,setThisCompany]=useState(null);

  useEffect(()=>{
    getCompany({variables:{com_id:Number(login.id)}}).then((data)=>{
setThisCompany(data.data.getCompany)
    })
  },[])

  const styles: any = {
    fontFamily: 'Raleway, sans-serif',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }

  const {toggled, handleToggleSidebar} = props;
  const login: ILoginData = useSelector((state: AppState) => state.login.login);
  const image = () => {
    try {
      if (login.id) {
        return require(`../../assets/image/profileImages/${login.id}.jpg`).default;
      }
      return require(`../../assets/image/profileImages/user.jpg`).default;
    } catch {
      return require(`../../assets/image/profileImages/user.jpg`).default;
    }
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
            {
              // @ts-ignore
              thisCompany && thisCompany.com_name}
          </Col>
        </Row>

      </SidebarHeader>
      <SidebarContent style={styles}>
        <Menu iconShape="circle">
          {props.thisEvent &&
          <React.Fragment>
              <MenuItem>
                  <Link className='nav-link' to={`/currentEvents/company/${props.thisEvent.event_code}`}> Publish new
                      Add</Link>
              </MenuItem>
              <MenuItem>
                  <Link className='nav-link' to={`/currentEvents/company/${props.thisEvent.event_code}/rules`}> Rules
                      and Regulations</Link>
              </MenuItem>
              <MenuItem>
                  <Link className='nav-link'
                        to={`/currentEvents/company/${props.thisEvent.event_code}/description`}> Info</Link>
              </MenuItem>
          </React.Fragment>
          }
        </Menu>

      </SidebarContent>
      <SidebarFooter style={styles}>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBarCompany;
