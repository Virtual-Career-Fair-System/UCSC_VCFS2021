import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from '../App/App';
import AboutUs from "../components/aboutUs/AboutUs";
import Companies from "../components/companies/Companies";
import CurrentEvents from "../components/currentEvents/CurrentEvents";
import Students from "../components/student/Students";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import News from "../components/news/News";

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/currentEvents" component={CurrentEvents} />
        <Route path="/students" component={Students} />
        <Route path="/login" component={Login} />
        <Route path="/news" component={News} />
        <Route path="/Register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;