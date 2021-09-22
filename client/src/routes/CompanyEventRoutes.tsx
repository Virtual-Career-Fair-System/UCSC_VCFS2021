import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import Rules from "../Pages/eventCompany/rules";
import Description from "../Pages/eventCompany/description";
import CreateAdd from "../Pages/eventCompany/CreateAdd";
import Applicants from "../Pages/eventCompany/Applicants";

const CompanyEventRoutes = ({thisEvent}: any) => {
  return (
    <Switch>
      <Route exact path="/currentEvents/company/:event_code" render={() => <CreateAdd thisEvent={thisEvent}/>}/>
      <Route path="/currentEvents/company/:event_code/rules" render={() => <Rules thisEvent={thisEvent}/>}/>
      <Route path="/currentEvents/company/:event_code/description" render={() => <Description thisEvent={thisEvent}/>}/>
      <Route path="/currentEvents/company/:event_code/:ad_id" component={Applicants}/>
    </Switch>
  );
};

export default CompanyEventRoutes;