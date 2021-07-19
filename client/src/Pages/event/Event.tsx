import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../components/header/Header";
import {Container, Col, Row,Button} from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import SideBar from "./SideBar";
import {FaBars} from "react-icons/all";
import {IoNotificationsCircle} from "react-icons/all";

const Events = () => {
  const [toggled, setToggled] = useState(false);
  const [events,setEvents]=useState([
    {id:1,eventName:'carier fair 2021'},
    {id:2,eventName:'carier fair 2021'},
    {id:3,eventName:'carier fair 2020'},
    {id:4,eventName:'carier fair 2019'}
  ]);

  const handleToggleSidebar = (value: boolean) => {
    setToggled(value);
  };

  /*const renderEvents = () =>{
    return(
      events.map((event)=>{
        <Event eventName={event.eventName}
               id={event.id}
               key={event.id}
        />
      })
    );
  }*/
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
              <IoNotificationsCircle size='2.7em'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Row>{events[0].eventName}</Row>
            </Col>
          </Row>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}

export default Events;