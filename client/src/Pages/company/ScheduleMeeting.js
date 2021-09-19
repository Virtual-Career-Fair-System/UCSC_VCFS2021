import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import emailjs from 'emailjs-com';
// import { useSelector } from 'react-redux';



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

    // const [com_id, setCompanyId] = useState(null);
    const [c_name, setCompanyName] = useState(null);
    const [s_email, setStuEmail] = useState(null);
    // const [stu_id, setStudentId] = useState(null);
    // const [ad_id, setAdId] = useState(null);
    const [subject, setSubject] = useState(null);
    const [linka, setMeeting] = useState(null);
    const [timea, setTime] = useState(null);
    const [emailed, setEmailed] = useState(false);

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
    // const login = useSelector((state) => state.login.login);
    // console.log(login);
    function sendEmail(e) {
        e.preventDefault();
        // if (!login.id) {
        //     Toast.fire({
        //         icon: 'error',
        //         title: 'login first'
        //     });
        //     return;
        // }

        createEmail({
            variables: { c_name: c_name, s_email: s_email, subject: subject, timea: timea, linka: linka}
        }).then((data) => {
            setEmailed(data.data.createEmail.successful);
            if (data.data.createEmail.successful) {
                emailjs.sendForm('service_pge121o', 'template_xfjqubs', e.target, 'user_k0ud7jimObiEk5NVY1Plm')
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });
                e.target.reset();
                Toast.fire({
                    icon: 'success',
                    title: 'email send successfully'
                });
                setCompanyName('');
                setStuEmail('');
                setSubject('');
                setMeeting('');
                setTime('');
                


            } else {
                Toast.fire({
                    icon: 'warning',
                    title: data.data.createEmail.message
                });
            }
        })
            ;


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
                                    value={c_name}
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
                                    value={s_email}
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
                                    Scheduled Time
                                </label>
                                <Form.Control
                                    placeholder="scheduled time"
                                    type="text"
                                    name="time"
                                    value={timea}
                                    onChange={(e) => {
                                        setTime(e.target.value);
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
                                    value={linka}
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
                    {(isRedirectEmail || emailed) && <Redirect to='/schedule' />}
                    <div className="clearfix"></div>
                </Form>
            </Card.Body>

        </div>
    )
}

