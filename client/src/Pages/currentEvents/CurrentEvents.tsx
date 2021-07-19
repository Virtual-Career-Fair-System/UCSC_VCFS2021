import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../components/header/Header";
import {Container, Col, Row,Button} from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import SideBar from "./SideBar";
import {FaBars} from "react-icons/all";
import {IoNotificationsCircle} from "react-icons/all";
import Event from "./event/Event";

const CurrentEvents = () => {
  const [toggled, setToggled] = useState(false);
  const [events,setEvents]=useState([
    {id:1,eventName:'carier fair 2021',eventCode:'1careerFare2021'},
    {id:2,eventName:'carier fair 2020',eventCode:'2careerFare2020'},
    {id:3,eventName:'carier fair 2019',eventCode:'3careerFare2019'},
    {id:4,eventName:'carier fair 2018',eventCode:'4careerFare2018'}
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
          </Row>
          <Event event={events[0]}/>
          <Event event={events[1]}/>
          <Event event={events[2]}/>
          <Event event={events[3]}/>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}

export default CurrentEvents;