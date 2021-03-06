import React, {useEffect, useState} from "react";
import Header from "../../components/header/Header";
import {Container, Col, Row, Button, Image} from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import SideBarStudent from "./SideBarStudent";
import {FaBars} from "react-icons/all";
import {IEvent} from "../../types/login";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../state/reducers";
import {useQuery} from "@apollo/client";
import {GET_ALL_EVENTS} from "../../grapgQl/events/eventsQueries";
import {setInitEvents} from "../../state/actions/eventsActions";
import StudentEventRoutes from "../../routes/StudentEventRoutes";

const EventStudent = (props: any) => {

  const {data} = useQuery(GET_ALL_EVENTS);
  const dispatch = useDispatch();
  console.log(props);

  useEffect(() => {
    if (data) {
      dispatch(setInitEvents(data.getAllEvents));
    }
  },)

  const [toggled, setToggled] = useState(false);
  const events: IEvent[] = useSelector((state: AppState) => state.events.events);
  const thisEvent: any = events.find((event: IEvent) => (event.event_code === props.match.params.event_code));

  const handleToggleSidebar = (value: boolean) => {
    setToggled(value);
  };

  const image = () => {
    if (thisEvent) {
      return require(`../../assets/image/eventCoverPhotos/${thisEvent.cover_image}`).default;
    }
    return require(`../../assets/image/eventCoverPhotos/coverImage.png`).default;
  }

  return (
    <React.Fragment>
      <Header title="Career Fair UCSC"/>
      <Container fluid={true} className='event-page'>
        <SideBarStudent toggled={toggled}
                        handleToggleSidebar={handleToggleSidebar}
                        thisEvent={thisEvent}
        />
        <main>
          <Row>
            <Col className='event-title text-center py-1 mb-2'>
              {thisEvent && thisEvent.name}
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
            <Col className='text-center py-2 event-cover-image-col mb-2'>
              <Image className='cover-image rounded' src={image()}/>
            </Col>
          </Row>
          <Row>
            <Col className='px-5 py-5'>
              <StudentEventRoutes thisEvent={thisEvent}/>
            </Col>
          </Row>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}

export default EventStudent;
