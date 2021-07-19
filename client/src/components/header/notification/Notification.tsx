import React from "react";
import {Button, Col, Row} from 'react-bootstrap';

type NotificationProps = {
  notification: any
}
const Notification: React.FC<NotificationProps> = (props) => {
  const {notification} = props;
  return (
    <Row>
      <Col>
        <Row>
          <Col xs={10} className='notification-title'>
            {notification.title}
          </Col>
          <Col xs={2}>

          </Col>
        </Row>
        <Row className='notification-date'>{notification.date}</Row>
        <Row><Button>check</Button></Row>
      </Col>
    </Row>
  );
}

export default Notification;