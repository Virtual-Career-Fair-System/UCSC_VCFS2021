import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {Redirect} from "react-router-dom";

type EventProps={
  event:any
}
const Event :React.FC<EventProps>= (props) => {
  const [isRedirectToEvent,setIsRedirectToEvent]=useState(false);
  const handleOnRedirectToEvent=()=>{
    setIsRedirectToEvent(true);
  }
  const {event}=props;
  return(
    <Row>
      <Col xs={12} className='event'>
        <Row>{event.eventName}</Row>
        <Row>{event.id}</Row>
        <Row>{event.eventCode}</Row>
        {isRedirectToEvent && <Redirect to={`/currentEvents/${event.eventCode}`}/>}
        <Button onClick={handleOnRedirectToEvent}>Go !{event.eventCode}</Button>
      </Col>
    </Row>
  );
}

export default Event;