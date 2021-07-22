import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {Redirect} from "react-router-dom";
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';




export const mainListItems  = React.memo(function KanbanCard()  {
  const [isEditProfileRedirect, setIsEditProfileRedirect] = useState(false);
  const [isStudentNotificationRedirect, setIsStudentNotificationRedirect] = useState(false);
  const [isVacancyRedirect, setIsVacancyRedirect] = useState(false);
  // console.log(toggled);
  const onclickEditProfileRoute = () => {
    setIsEditProfileRedirect(true);
  }
  const onclickStudentNotificationRoute = () => {
    setIsStudentNotificationRedirect(true);
  }
  const onclickVacancyRoute = () => {
    setIsVacancyRedirect(true);
  }

  return (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <button onClick={onclickEditProfileRoute}>
      <ListItemText primary="Edit Profile" />
      {isEditProfileRedirect && <Redirect to='/editprofile'/>}
      </button>

      
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Notification" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Vacancy" />
    </ListItem>
  </div>
  );
});

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="2020" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="2019" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="2018" />
    </ListItem>
  </div>
);
