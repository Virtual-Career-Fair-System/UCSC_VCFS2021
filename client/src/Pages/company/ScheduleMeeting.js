import React, {useState} from 'react';
import {useMutation} from "@apollo/client";
import emailjs from 'emailjs-com';



import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import CompanyHeader from './CompanyHeader';
import { CREATE_EMAIL } from '../../grapgQl/company/companyMutation';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';

export default function ScheduleMeeting() {
    const [createEmail] = useMutation(CREATE_EMAIL);

    const [com_id, setCompanyId] = useState  (null);
    const [company_name, setCompanyName] = useState  (null);
    const [stu_email, setStuEmail] = useState  (null);
    const [stu_id, setStudentId] = useState  (null);
    const [ad_id, setAdId] = useState  (null);
    const [subject, setSubject] = useState  (null);
    const [stu_meeting, setMeeting] = useState  (null);
    const [emailed, setEmailed] = useState (false);

    const [isRedirectEmail, setIsRedirectEmail] = useState(false);
    const redirectToEmail = () => {
    setIsRedirectEmail(true);
  }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    function sendEmail(e) {
        e.preventDefault();

        createEmail({
            variables: {com_id: com_id, name: company_name, email: stu_email, stu_id: stu_id, ad_id: ad_id, subject: subject, meeting: stu_meeting}
          }).then((data) => {
             setEmailed(data.data.createEmail.successful);
            if (data.data.createEmail.successful) {
              Toast.fire({
                icon: 'success',
                title: 'Signed up successfully'
              });
            } else {
              Toast.fire({
                icon: 'warning',
                title: data.data.createEmail.message
              });
            }
          })
          ;

        emailjs.sendForm('service_pge121o', 'template_xfjqubs', e.target, 'user_k0ud7jimObiEk5NVY1Plm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div>
            <CompanyHeader />
            <Card.Body>

                <h1>Schedule Meeting</h1>
                <Form onSubmit={sendEmail}>

                    <Row>
                        <Col className="pr-1" md="12">
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">
                                    Company Name
                                </label>
                                <Form.Control
                                    placeholder="Company"
                                    type="text"
                                    name="name"
                                    value={company_name}
                                    onChange={(e) => {
                                        setCompanyName(e.target.value);
                                      }}
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col className="pr-1" md="12">
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">
                                    Selected Student Email
                                </label>
                                <Form.Control
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={stu_email}
                                    onChange={(e) => {
                                        setStuEmail(e.target.value);
                                      }}
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col className="pr-1" md="12">
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">
                                    Subject
                                </label>
                                <Form.Control
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => {
                                        setSubject(e.target.value);
                                      }}
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>


                    <Row>
                        <Col className="pr-1" md="12">
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">
                                    Meeting Link
                                </label>
                                <Form.Control
                                    placeholder="Paste meeting Link here"
                                    type="text"
                                    name="message"
                                    value={stu_meeting}
                                    onChange={(e) => {
                                        setMeeting(e.target.value);
                                      }}
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>


                    <Button
                        className="btn-fill pull-right"
                        type="submit"
                        variant="info"
                        // onClick={sendEmail}
                    >
                        Send
                    </Button>
                    {(isRedirectEmail || emailed) && <Redirect to='/schedule'/>}
                    <div className="clearfix"></div>
                </Form>
            </Card.Body>

        </div>
    )
}

