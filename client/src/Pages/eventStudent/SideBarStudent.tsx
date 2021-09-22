import React, {useEffect, useState} from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
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
import {useMutation} from "@apollo/client";
import {GET_STUDENT} from "../../grapgQl/student/studentMutation";

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
  const [getStudent] = useMutation(GET_STUDENT);
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    if (!login.id) {
      return
    }
    getStudent({variables: {id: Number(login.id)}}).then((result) => {
      setStudent(result.data.getStudent);
    })
  }, []);

  const image = () => {
    try {
      if (!student) {
        return require(`../../assets/image/profileImages/user.jpg`).default;
      }
      return require(`../../assets/image/profileImages/${student.image}`).default;
    }catch{
      return require(`../../assets/image/profileImages/user.jpg`).default;
    }
  }



  return (
    <ProSidebar image={undefined} rtl={false} collapsed={false} toggled={toggled} breakPoint="md"
                onToggle={handleToggleSidebar}>
      <SidebarHeader>
        <Row>
          <Col className='text-center py-2'>
            <Image className='profile-image' style={{height:'165px'}} src={image()} roundedCircle/>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-2' style={styles}>
            {student && student.f_name+' '+student.l_name}
          </Col>
        </Row>
      </SidebarHeader>
      <SidebarContent style={styles}>
        <Menu iconShape="circle">
          {props.thisEvent &&
          <React.Fragment>
              <MenuItem>
                  <Link className='nav-link' to={`/currentEvents/student/${props.thisEvent.event_code}`}> Apply</Link>
              </MenuItem>
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

      </SidebarContent>
      <SidebarFooter style={styles}>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBarStudent;