import React, {useState} from "react";
import Header from "../../components/header/Header";
import {Container, Col, Row, Button} from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Admin from "./Admin";
import Dashboard from "./admin/studentTable";

const EventAdminStudentTable = () => {
  const [toggled, setToggled] = useState(false);
  const [events, setEvents] = useState([
    {id: 1, eventName: 'carier fair 2021'},
    {id: 2, eventName: 'carier fair 2021'},
    {id: 3, eventName: 'carier fair 2020'},
    {id: 4, eventName: 'carier fair 2019'}
  ]);

  const handleToggleSidebar = (value: boolean) => {
    setToggled(value);
  };

  return (
    <React.Fragment>
      <Header title="Career Fair UCSC"/>
      <Container fluid={true} className='current-events2'>
        <Dashboard/>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}

export default EventAdminStudentTable;
