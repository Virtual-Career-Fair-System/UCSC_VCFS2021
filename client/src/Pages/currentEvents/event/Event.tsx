import React, {useEffect, useState} from "react";
import {Button, Col, Row, Image} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {ILoginData} from "../../../types/login";
import {useSelector} from "react-redux";
import {AppState} from "../../../state/reducers";
import DOMPurify from "dompurify";
import {FaRegHandPaper} from "react-icons/all";

type EventProps = {
  event: any
}

const Event: React.FC<EventProps> = (props) => {
  const [isRedirectToEvent, setIsRedirectToEvent] = useState(false);
  const handleOnRedirectToEvent = () => {
    setIsRedirectToEvent(true);
  }
  const login: ILoginData = useSelector((state: AppState) => state.login.login);

  const {event} = props;
  const image: any = require(`../../../assets/image/eventCoverPhotos/${event.cover_image}`);
  const createMarkup = (html: any) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }
  const renderStatus = (status: string) => {
    if (!status) {
      return;
    }
    if (status === 'requested') {
      return <label className='requested'>Still in process</label>;
    } else if (status === 'upcoming') {
      return <label className='approved'>Approved</label>;
    }
  }
  return (
    <Row
      className={event.status === 'requested' ? 'event-requested' : event.status === 'upcoming' ? 'event-upcoming' : event.status === 'closed' ? 'event-closed' : 'event'}>
      <Col xs={{span: 12, order: 2}} md={9} className='event-detail'>
        <Row>
          <Col className='event-name px-0'>{event && event.name}</Col>
          {(login.type === 'admin' && event.status === 'requested') &&
          <Col className='text-right approve-button py-1'><Button size="sm" variant='success'> Approve</Button></Col>}
          {(login.type === 'student' && login.id == event.organizer) &&
          <Col className='text-right status py-1'>{renderStatus(event.status)}</Col>}
        </Row>
        <Row className='event-date'>{event.start_date} </Row>
        <Row className='event-content py-3'>
          <div className="preview" dangerouslySetInnerHTML={createMarkup(event.description)}/>
        </Row>
        {isRedirectToEvent && (login.type === 'unknown') ? <Redirect to={`/currentEvents/${event.event_code}`}/> :
          isRedirectToEvent && (login.type === 'student') ?
            <Redirect to={`/currentEvents/student/${event.event_code}`}/> :
            isRedirectToEvent && (login.type === 'company') ?
              <Redirect to={`/currentEvents/company/${event.event_code}`}/> :
              isRedirectToEvent && (login.type === 'admin') ?
                <Redirect to={`/currentEvents/admin/${event.event_code}`}/> : ''
        }
        <Row><Button className='go-event-button' onClick={handleOnRedirectToEvent}>{event.name}
          <FaRegHandPaper/></Button></Row></Col>
      <Col xs={{span: 12, order: 1}} md={3} className='event-image-col'><Image src={image.default} alt="image not found"
                                                                               className='event-cover-image'/>
      </Col>
    </Row>
  );
}

export default Event;
