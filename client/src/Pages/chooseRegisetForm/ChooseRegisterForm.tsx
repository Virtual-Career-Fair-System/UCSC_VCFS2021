import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../components/header/Header";
import {Container,Card,Button,Col,Row} from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import SignUpStudent from "../../components/signUpStudent/SignUpStudent";
import {Redirect} from "react-router-dom";
import company from '../../assets/image/homePagePhotos/company.webp';
import student from '../../assets/image/homePagePhotos/student.webp';

const ChooseRegisterForm = () => {
  const [RegisterAsStudent,setRegisterAsStudent]=useState(false);
  const [RegisterAsCompany,setRegisterAsCompany]=useState(false);

  const onClickRegisterAsStudent=()=>{
    setRegisterAsStudent(true);
  }
  const onClickRegisterAsCompany=()=>{
    setRegisterAsCompany(true);
  }
  return(
    <React.Fragment>
      {RegisterAsStudent && <Redirect to='/studentRegister'/>}
      {RegisterAsCompany && <Redirect to='/companyRegister'/>}
      <CssBaseline/>
      <Header title="Career Fair UCSC"/>
      <Container >
        <Row className='justify-content-center py-5'>
          <div className='px-5'>
            <Card style={{ width: '18rem' }} >
              <Card.Img variant="top" src={student} />
              <Card.Body>
                <Card.Title>Student</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary" onClick={onClickRegisterAsStudent}>Register as Student</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='px-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={company} />
              <Card.Body>
                <Card.Title>Company</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary" onClick={onClickRegisterAsCompany}>Register as Company</Button>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}

export default ChooseRegisterForm;