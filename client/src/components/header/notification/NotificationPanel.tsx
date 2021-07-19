import React from "react";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import {useStyles2} from "../headerConstants";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover';

const NotificationPanel = () => {
  const classes = useStyles2();
  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </Popover.Content>
      </Popover>
  );
  return(
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <div className='pr-4 pt-2'><div className={classes.root}><Badge badgeContent={1000} max={999} color='secondary' children={<MailIcon/>} />
      </div>
      </div>
    </OverlayTrigger>
  );
}

export default NotificationPanel;