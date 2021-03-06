import React, {useEffect} from "react";
import { Route, Switch} from "react-router-dom";
import Album from "../components/editprofile/Album";
import Rules from "../Pages/eventStudent/rules";
import Description from "../Pages/eventStudent/description";
import Ads from "../Pages/eventStudent/Ads";

const StudentEventRoutes = ({thisEvent}:any) => {
  return (
    <Switch>
      <Route exact path="/currentEvents/student/:event_code" render={()=><Album thisEvent={thisEvent}/>}/>
      <Route path="/currentEvents/student/:event_code/rules" render={()=><Rules thisEvent={thisEvent} />}/>
      <Route path="/currentEvents/student/:event_code/description" render={()=><Description thisEvent={thisEvent} />}/>
      <Route path="/currentEvents/student/:event_code/:category" component={Ads}/>
    </Switch>
  );
};

export default StudentEventRoutes;