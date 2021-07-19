import React, {useEffect, useState} from "react";
import {Button, Col, Row, Image} from "react-bootstrap";
import {Redirect} from "react-router-dom";

type EventProps = {
  event: any
}

const Event: React.FC<EventProps> = (props) => {
  const [isRedirectToEvent, setIsRedirectToEvent] = useState(false);
  const handleOnRedirectToEvent = () => {
    setIsRedirectToEvent(true);
  }
  const {event} = props;
  const image: any = require(`../../../assets/image/eventCoverPhotos/${event.eventCode}.webp`);

  return (
    <Row className='event'>
      <Col xs={{span:12,order:2}} md={9} className='event-detail'>
        <Row className='event-name'>{event.eventName}</Row>
        <Row className='event-date'>Date:2021 JAN </Row>
        {/*<Row>{event.id}</Row>*/}
        <Row className='event-content py-3'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,..
        </Row>
        {isRedirectToEvent && <Redirect to={`/currentEvents/${event.eventCode}`}/>}
        <Row><Button className='go-event-button' onClick={handleOnRedirectToEvent}>{event.eventName} Go !</Button></Row></Col>
      <Col xs={{span:12,order:1}} md={3} className='event-image-col'><Image src={image.default} alt="image not found" className='event-cover-image'/>
      </Col>
    </Row>
  );
}

export default Event;