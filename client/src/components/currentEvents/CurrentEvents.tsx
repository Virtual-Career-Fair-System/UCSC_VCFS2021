import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../header/Header";
import {Container, Col, Row,Button} from "react-bootstrap";
import Footer from "../footer/Footer";
import SideBar from "./SideBar";
import {FaBars} from "react-icons/all";
import {IoNotificationsCircle} from "react-icons/all";

const CurrentEvents = () => {
  const [toggled, setToggled] = useState(false);
  const [events,setEvents]=useState([{eventName:'carier fair 2021'},{eventName:'carier fair 2021'},{eventName:'carier fair 2020'},{eventName:'carier fair 2019'}]);
  const handleToggleSidebar = (value: boolean) => {
    setToggled(value);
  };
  return (
    <React.Fragment>
      <CssBaseline/>
      <Header title="Career Fair UCSC"/>
      <Container fluid={true}  className='current-events'>
        <SideBar toggled={toggled}
                 handleToggleSidebar={handleToggleSidebar}/>
        <main>
          <Row>
            <Col xs={6} className='sidebar-toggle-btn-col'>
              <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars/>
              </div>
            </Col>
            <Col xs={6} className='text-info text-right'>
              <IoNotificationsCircle size='2.5em'/>
            </Col>
          </Row>
          <Row>
          </Row>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}

export default CurrentEvents;