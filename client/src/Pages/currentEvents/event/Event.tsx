import React, {useEffect, useState} from "react";
import {Button, Col, Row, Image} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {ILoginData} from "../../../types/login";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../state/reducers";
import DOMPurify from "dompurify";
import {BsBoxArrowInUp} from "react-icons/all";
import {FetchResult, useMutation} from "@apollo/client";
import {APPROVE_EVENT} from "../../../grapgQl/admin/adminMutation";
import Swal from "sweetalert2";
import {changeEvent} from "../../../state/actions/eventsActions";
import {useHistory} from 'react-router-dom';

type EventProps = {
  event: any
}

const Event: React.FC<EventProps> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  const [approveEvent] = useMutation(APPROVE_EVENT)
  const [isRedirectToEvent, setIsRedirectToEvent] = useState(false);
  const handleOnRedirectToEvent = () => {
    if(!login.id){
      Toast.fire({
        icon: 'info',
        title: 'Please login '
      });
      history.push(`/login`);
      return;
    }
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

  const handleOnClickApprove = () => {
    approveEvent({variables: {event_id: Number(event.id)}}).then((data: any) => {
      if(!data || data.data){
        Toast.fire({
          icon: 'error',
          title: 'Something Went Wrong'
        });
      }
      dispatch(changeEvent(Number(event.id)));
      Toast.fire({
        icon: 'success',
        title: data.data.approveEvent.message
      });
    })
  }

  return (
    <Row
      className={event.status === 'requested' ? 'event-requested' : event.status === 'upcoming' ? 'event-upcoming' : event.status === 'closed' ? 'event-closed' : 'event'}>
      <Col xs={{span: 12, order: 2}} md={9} className='event-detail'>
        <Row>
          <Col className='event-name px-0'>{event && event.name}</Col>
          {(login.type === 'admin' && event.status === 'requested') &&
          <Col className='text-right approve-button py-1'><Button size="sm" variant='success'
                                                                  onClick={handleOnClickApprove}> Approve</Button></Col>}
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
        <Row>
          <Button className='go-event-button' size='sm' onClick={handleOnRedirectToEvent}>
            {event.name}<i className='px-1'><BsBoxArrowInUp/></i>
          </Button>
        </Row>
      </Col>
      <Col xs={{span: 12, order: 1}} md={3} className='event-image-col'><Image src={image.default} alt="image not found"
                                                                               className='event-cover-image'/>
      </Col>
    </Row>
  );
}

export default Event;
