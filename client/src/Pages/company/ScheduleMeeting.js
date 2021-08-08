import React from 'react'
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


export default function ScheduleMeeting() {
    

    function sendEmail(e) {
        e.preventDefault();

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
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>


                    <Button
                        className="btn-fill pull-right"
                        type="submit"
                        variant="info"
                    >
                        Send
                    </Button>
                    <div className="clearfix"></div>
                </Form>
            </Card.Body>

        </div>
    )
}

