import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../header/Header";
import {Container} from "react-bootstrap";
import Footer from "../footer/Footer";
import SignUp from "../signup/SignUp";

const Register = () => {
  return(
    <React.Fragment>
      <CssBaseline/>
      <Header title="Career Fair UCSC"/>
      <Container fluid={true}>
        <SignUp/>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}

export default Register;