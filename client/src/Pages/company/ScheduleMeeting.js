import React, {useEffect, useState} from 'react';
import {useMutation} from "@apollo/client";
import emailjs from 'emailjs-com';
import {Button, Card, Form, Row, Col} from "react-bootstrap";
import {CREATE_EMAIL, GET_COMPANY} from '../../grapgQl/company/companyMutation';
import Swal from 'sweetalert2';
import {ILoginData} from "../../types/login";
import {useSelector} from "react-redux";


export default function ScheduleMeeting(props) {
    const login = useSelector((state) => state.login.login);
    const [createEmail] = useMutation(CREATE_EMAIL);
    const [getCompany] = useMutation(GET_COMPANY);
    const [subject, setSubject] = useState(null);
    const [linka, setMeeting] = useState(null);
    const [timea, setTime] = useState(null);
    const [isRedirectEmail, setIsRedirectEmail] = useState(false);
    const [thisCompany, setThisCompany] = useState(null);

    useEffect(() => {

        getCompany({variables: {com_id: Number(login.id)}}).then((data) => {
            setThisCompany(data.data.getCompany)
        })
    }, [])


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
    });

    function sendEmail(e) {
        e.preventDefault();
        if (!login || !thisCompany || !subject || !timea || !linka) {
            Toast.fire({
                icon: 'error',
                title: 'Failed to send invitation'
            });
            return;
        }
        console.log(thisCompany.com_name);
        console.log(props.applicant.email);
        createEmail({
            variables: {
                cv_id: Number(props.applicant.cv_id),
                c_name: thisCompany.com_name,
                s_email: props.applicant.email,
                subject: subject,
                timea: timea,
                linka: linka
            }
        }).then((data) => {
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
                props.setApplicants(props.applicants.map((applicant)=>{
                    return applicant.cv_id===props.applicant.cv_id ? {...applicant,status:'invited'}:applicant
                }));
                setSubject('');
                setMeeting('');
                setTime('');
            } else {
                Toast.fire({
                    icon: 'warning',
                    title: data.data.createEmail.message
                });
            }
        });
    }

    return (
        <Row className='justify-content-center'>
            <Col style={{border: '3px solid blue'}} className='mx-3' xs={{span: 6}}>
                <Card.Body>
                    <h1 className='text-center'>Schedule Meeting</h1>
                    <Form onSubmit={sendEmail} className='text-center'>
                        <Row style={{display: 'none'}}>
                            <Col className="pr-1" md="12">
                                <Form.Group>
                                    <label htmlFor="exampleInputEmail1">
                                        Company Name
                                    </label>
                                    <Form.Control
                                        placeholder="Company"
                                        type="text"
                                        name="name"
                                        value={thisCompany && thisCompany.com_name}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row style={{display: 'none'}}>
                            <Col className="pr-1" md="12">
                                <Form.Group>
                                    <label htmlFor="exampleInputEmail1">
                                        Selected Student Email
                                    </label>
                                    <Form.Control
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        value={props.applicant && props.applicant.email}
                                    />
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
                                    />
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
                                        type="datetime-local"
                                        name="time"
                                        value={timea}
                                        onChange={(e) => {
                                            setTime(e.target.value);
                                        }}
                                    />
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
                                    />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col className='text-right'>
                                <Button className="btn-fill pull-right" type="submit" variant="success"
                                        style={{padding: '8px 40px'}}>
                                    Send
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Col>
        </Row>
    )
}