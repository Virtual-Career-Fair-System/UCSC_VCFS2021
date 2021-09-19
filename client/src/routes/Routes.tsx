import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from '../App/App';
import AboutUs from "../Pages/aboutUs/AboutUs";
import Companies from "../Pages/companies/Companies";
import CurrentEvents from "../Pages/currentEvents/CurrentEvents";
import Students from "../Pages/student/Students";
import Login from "../components/login/Login";
import RegisterStudent from "../Pages/registerStudent/RegisterStudent";
import RegisterCompany from "../Pages/registerCompany/RegisterCompany";
import News from "../Pages/news/News";
import Event from "../Pages/event/Event";
import EditProfile from "../components/editprofile/EditProfile";
import {StudentViewNotification} from "../Pages/student/StudentViewNotification";
import Album from "../components/editprofile/Album";
import Jobs from "../components/editprofile/Jobs";
import Add from "../components/editprofile/Add";
import CvUpload from "../components/cvcpload/CvUpload";
import PublishAd from "../Pages/company/PublishAd";
import {CompanyViewNotification} from "../Pages/company/CompanyViewNotification";
import Applicants from "../Pages/company/Applicants";
import Cv from "../Pages/company/Cv";
import ScheduleMeeting from "../Pages/company/ScheduleMeeting";
import CompanyLogin from "../Pages/LoginCompany/CompanyLogin";
import OrganizeNewCareerFair from "../Pages/organizeNewCareerFair/OrganizeNewCareerFair";
import ChooseRegisterForm from "../Pages/chooseRegisetForm/ChooseRegisterForm";
// import DashBoard from "../Pages/admin/Dashboard";
import Home from "../Pages/home/Home";
import {useEffect} from "react";
import {login} from "../state/actions/loginActions";
import {useDispatch} from "react-redux";
import Profile1 from "../Pages/profile/profile1";
import EventAdmin from "../Pages/eventAdmin/EventAdmin";
import EventCompany from "../Pages/eventCompany/EventCompany";
import EventStudent from "../Pages/eventStudent/EventStudent";
import {useQuery} from "@apollo/client";
import {GET_ALL_EVENTS} from "../grapgQl/events/eventsQueries";
import {setInitEvents} from "../state/actions/eventsActions";
import AdminProfile from "../Pages/admin/AdminProfile";
import AdminPost from "../Pages/admin/AdminPost";
import DashBoard from "../Pages/admin/DashBoard";
import Orders1 from "../Pages/admin/Orders1";
import Orders from "../Pages/admin/Orders";

const Routes = () => {
  const dispatch = useDispatch();
  const {data} = useQuery(GET_ALL_EVENTS);

  useEffect(() => {
    if (localStorage.getItem('loginID') && localStorage.getItem('loginType')) {
      const id: number = Number(localStorage.getItem('loginID'));
      const type: string = String(localStorage.getItem('loginType'));
      dispatch(login({id: id, type: type}));
    }
    if (data) {
      dispatch(setInitEvents(data.getAllEvents));
    }
  }, [])
//        <Route exact path="/Admin/DashBoard" component={DashBoard}/>


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/aboutUs" component={AboutUs}/>
        <Route exact path="/companies" component={Companies}/>
        <Route exact path="/companyLogin" component={CompanyLogin}/>
        <Route exact path="/currentEvents" component={CurrentEvents}/>
        <Route exact path="/currentEvents/:event_code" component={Event}/>
        <Route exact path="/currentEvents/company/:event_code" component={EventCompany}/>
        <Route exact path="/currentEvents/admin/:event_code" component={EventAdmin}/>
        <Route exact path="/currentEvents/student/:event_code" component={EventStudent}/>
        <Route exact path="/students" component={Students}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/news" component={News}/>
        <Route exact path="/chooseRegisterForm" component={ChooseRegisterForm}/>
        <Route exact path="/studentRegister" component={RegisterStudent}/>
        <Route exact path="/companyRegister" component={RegisterCompany}/>
        <Route exact path="/editprofile" component={EditProfile}/>
        <Route exact path="/notification" component={StudentViewNotification}/>
        <Route exact path="/vacancy" component={Album}/>
        <Route exact path="/job" component={Jobs}/>
        <Route exact path="/adview" component={Add}/>
        <Route exact path="/cvupload" component={CvUpload}/>
        <Route exact path="/publishad" component={PublishAd}/>
        <Route exact path="/companyviewnotification" component={CompanyViewNotification}/>
        <Route exact path="/applicant" component={Applicants}/>
        <Route exact path="/cvview" component={Cv}/>
        <Route exact path="/schedule" component={ScheduleMeeting}/>
        <Route exact path="/profileview" component={Profile1}/>
        <Route exact path="/organizeNewCareerFair" component={OrganizeNewCareerFair}/>
        {/* <Route exact path="/admin" component={Orders}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
