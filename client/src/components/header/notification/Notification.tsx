import React from "react";
import {Button, Col, Row} from 'react-bootstrap';
import {IoNotificationsCircle} from "react-icons/all";

type NotificationProps = {
  notification: any
}
const Notification: React.FC<NotificationProps> = (props) => {
  const {notification} = props;
  return (
    <Row>
      <Col xs={1} className='px-2'><IoNotificationsCircle color='blue' size='1.5em'/></Col>
      <Col xs={5} ><Row> {notification.title}</Row>
        <Row>The standard chunk of Lorem
        </Row>
      </Col>
      <Col xs={2} ><Button size={"sm"}>check</Button></Col>
    </Row>
  );
}

export default Notification;