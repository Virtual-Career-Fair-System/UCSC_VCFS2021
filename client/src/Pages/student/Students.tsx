import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../components/header/Header";
import {Container} from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Profile from "../profile/Profile";
import StudentHeader from "../profile/StudentHeader";
import Dashboard from "../admin/Dashboard";


const Students = () => {
  return(
    <React.Fragment>
      <CssBaseline/>
      {/* <Dashboard/> */}
      <StudentHeader title="Career Fair UCSC"/>
      <Container fluid={true}>
        <Profile/>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}

export default Students;