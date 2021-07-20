import React from "react";
import {Button, Col, Row} from 'react-bootstrap';

type NotificationProps = {
  notification: any
}
const Notification: React.FC<NotificationProps> = (props) => {
  const {notification} = props;
  return (
    <Row className='notification mx-3 my-1'>
      <Col>
        <Row>
          <Col xs={6}>
            <Row>
              <Col xs={10} className='notification-title'>
                {notification.title}
              </Col>
            </Row>
            <Row className='notification-date'><Col>{notification.date}</Col></Row>
          </Col>
          <Col className='text-right pt-1'>
            <Button size='sm' variant='danger'>check</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s,
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Notification;