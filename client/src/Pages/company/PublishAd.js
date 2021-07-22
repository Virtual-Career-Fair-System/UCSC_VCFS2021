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

export default function PublishAd() {
    return (
        <div>
            <CompanyHeader/>
            <Card.Body>
                <h1>Publish Ad</h1>
                <Form>
                
                    
                  
                <Row>
                        <Col className="pr-1" md="12">
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">
                                    Job Category
                                </label>
                                <Form.Control
                                    placeholder="Category"
                                    type="text"
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col className="pr-1" md="12">
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">
                                    Adverticement
                                </label>
                                <Form.Control
                                    placeholder="Adverticement"
                                    type="file"
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

