import React from 'react'
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
    return (
        <div>
            <CompanyHeader/>
            <Card.Body>

                <h1>Schedule Meeting</h1>
                <Form>
                
                    
                  
                   
                    <Row>
                        <Col className="pr-1" md="12">
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">
                                    Meeting Link
                                </label>
                                <Form.Control
                                    placeholder="Paste meeting Link here"
                                    type="text"
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                   

                    <Button
                        className="btn-fill pull-right"
                        type="submit"
                        variant="info"
                    >
                        Send Link
                    </Button>
                    <div className="clearfix"></div>
                </Form>
            </Card.Body>

        </div>
    )
}

