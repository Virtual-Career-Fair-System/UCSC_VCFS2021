import React, {useState} from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {useStyles2} from "../headerConstants";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover';
import Notification from "./Notification";

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
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <div className='pr-4 pt-2'>
        <div className={classes.root}><Badge badgeContent={1000}
                                             max={999}
                                             color='secondary'
                                             children={<NotificationsNoneIcon fontSize='large'/>}/>
        </div>
      </div>
    </OverlayTrigger>
  );
}

export default NotificationPanel;