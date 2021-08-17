import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../components/header/Header";
import {Container, Col, Row, Button} from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import SideBarStudent from "./SideBarStudent";
import {FaBars} from "react-icons/all";
import {IoNotificationsCircle} from "react-icons/all";
import Ads from './Ads'

const EventStudent = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value: boolean) => {
    setToggled(value);
  };

  return (
    <React.Fragment>
      <Header title="Career Fair UCSC"/>
      <Container fluid={true} className='event-page'>
        <SideBarStudent toggled={toggled}
                        handleToggleSidebar={handleToggleSidebar}/>
        <main>
          <Row>
            <Col className='event-title text-center py-1 mb-4'>
              UCSC Virual Career Fair 2021
            </Col>
          </Row>
          <Row>
            <Col xs={6} className='sidebar-toggle-btn-col'>
              <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Ads/>
            </Col>
          </Row>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}

export default EventStudent;
