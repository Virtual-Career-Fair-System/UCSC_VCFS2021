import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from '../App/App';
import AboutUs from "../Pages/aboutUs/AboutUs";
import Companies from "../Pages/companies/Companies";
import CurrentEvents from "../Pages/currentEvents/CurrentEvents";
import Students from "../Pages/student/Students";
import Login from "../components/login/Login";
import Register from "../Pages/register/Register";
import News from "../Pages/news/News";
import Event from "../Pages/event/Event";

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/currentEvents" component={CurrentEvents} />
        <Route exact path="/currentEvents/:eventId" component={Event}/>
        <Route exact path="/students" component={Students} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/news" component={News} />
        <Route exact path="/Register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;