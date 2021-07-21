import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../App/App';
import AboutUs from "../Pages/aboutUs/AboutUs";
import Companies from "../Pages/companies/Companies";
import CurrentEvents from "../Pages/currentEvents/CurrentEvents";
import Students from "../Pages/student/Students";
import Login from "../components/login/Login";
import Register from "../Pages/register/Register";
import News from "../Pages/news/News";
import Event from "../Pages/event/Event";
// import Profile from "../Pages/profile/Profile";
import EditProfile from "../components/editprofile/EditProfile";
import { StudentViewNotification } from "../Pages/student/StudentViewNotification";
import Album from "../components/editprofile/Album";
import Jobs from "../components/editprofile/Jobs";
import Add from "../components/editprofile/Add";
import CvUpload from "../components/cvcpload/CvUpload";
import PublishAd from "../Pages/company/PublishAd";
import { CompanyViewNotification } from "../Pages/company/CompanyViewNotification";
import Applicants from "../Pages/company/Applicants";
import Cv from "../Pages/company/Cv";
import ScheduleMeeting from "../Pages/company/ScheduleMeeting";



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/currentEvents" component={CurrentEvents} />
        <Route exact path="/currentEvents/:eventId" component={Event} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/news" component={News} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/editprofile" component={EditProfile} />
        <Route exact path="/notification" component={StudentViewNotification} />
        <Route exact path="/vacancy" component={Album} />
        <Route exact path="/job" component={Jobs} />
        <Route exact path="/adview" component={Add} />
        <Route exact path="/cvupload" component={CvUpload} />
        <Route exact path="/publishad" component={PublishAd} />
        <Route exact path="/companyviewnotification" component={CompanyViewNotification} />
        <Route exact path="/applicant" component={Applicants} />
        <Route exact path="/cvview" component={Cv} />
        <Route exact path="/schedule" component={ScheduleMeeting} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;