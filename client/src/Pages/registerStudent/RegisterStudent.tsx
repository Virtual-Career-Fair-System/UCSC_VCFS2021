import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../components/header/Header";
import {Container} from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import SignUpStudent from "../../components/signUpStudent/SignUpStudent";

const RegisterStudent = () => {
  return(
    <React.Fragment>
      <CssBaseline/>
      <Header title="Career Fair UCSC"/>
      <Container fluid={true}>
        <SignUpStudent/>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}

export default RegisterStudent;