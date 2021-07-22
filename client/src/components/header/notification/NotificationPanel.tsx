import React, {useState} from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {useStyles2} from "../headerConstants";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover';
import Notification from "./Notification";
import {Col} from 'react-bootstrap';

const NotificationPanel = () => {
  const [notification, setNotification] = useState(
    [{
      id: 1,
      date: "2021 FEB 4",
      title: "Notification_1",
      content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: 2,
      date: "2021 FEB 4",
      title: "Notification_2",
      content: "is simply dummy text of the printing nd typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }]
  );
  const classes = useStyles2();
  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <Notification notification={notification[0]}/>
        <Notification notification={notification[1]}/>
        <Notification notification={notification[0]}/>
      </Popover.Content>
    </Popover>
  );
  return (
    <div className='px-3'>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <div className={classes.root}><Badge badgeContent={3}
                                               color='secondary'
                                               children={<NotificationsNoneIcon fontSize='large'/>}/>
          </div>
      </OverlayTrigger>
    </div>
  );
}

export default NotificationPanel;