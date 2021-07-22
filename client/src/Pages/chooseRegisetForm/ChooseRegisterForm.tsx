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
                  Invitation to all UCSC undergraduates and graduates!,
                  Highlight Your Education. As a student, you should
                  highlight your academic successes at the beginning
                  of your resume, before the “Experience” description.
                  If you have completed any projects or taken courses
                  related to the job you are applying for, you can include these as well.
                  Invitation to all UCSC undergraduates and graduates!,
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
                  Organizations from the IT industry get an exclusive
                  opportunity to meet with outstanding students and
                  conduct interviews, recruitment, and company presentations
                  to showcase their organization and to inform of every
                  available career opportunity.\nIf you are looking for skilled,
                  talented, and innovative fresh graduates to make a difference in your company,
                  Join Now!. Skilled and talented graduates await your call!!',
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