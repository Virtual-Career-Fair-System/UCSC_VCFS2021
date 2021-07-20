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

function EditProfile() {
  return (

    <Card.Body>
      <h1>Edit Profile</h1>
      <Form>
        <Row>
          <Col className="pr-1" md="12">
            <Form.Group>
              <label htmlFor="exampleInputEmail1">
                Profile picture
              </label>
              <Form.Control
                placeholder="pro pic"
                type="file"
              ></Form.Control>
            </Form.Group>
          </Col>

        </Row>
        <Row>
          <Col className="pr-1" md="12">
            <Form.Group>
              <label htmlFor="exampleInputEmail1">
                Email address
              </label>
              <Form.Control
                placeholder="Email"
                type="email"
              ></Form.Control>
            </Form.Group>
          </Col>

        </Row>
        <Row>
          <Col className="pr-1" md="6">
            <Form.Group>
              <label>First Name</label>
              <Form.Control

                placeholder="First Name"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col className="pl-1" md="6">
            <Form.Group>
              <label>Last Name</label>
              <Form.Control

                placeholder="Last Name"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="pr-1" md="12">
            <Form.Group>
              <label htmlFor="exampleInputEmail1">
                My Project1
              </label>
              <Form.Control
                placeholder="Project Description"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>

        </Row>
        <Row>
          <Col className="pr-1" md="12">
            <Form.Group>
              <label htmlFor="exampleInputEmail1">
                My Project2
              </label>
              <Form.Control
                placeholder="Project Description"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>

        </Row>
        <Row>
          <Col className="pr-1" md="12">
            <Form.Group>
              <label htmlFor="exampleInputEmail1">
                My Project3
              </label>
              <Form.Control
                placeholder="Project Description"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>

        </Row>
        <Row>
          <Col className="pr-1" md="12">
            <Form.Group>
              <label htmlFor="exampleInputEmail1">
                Skills
              </label>
              <Form.Control
                placeholder="My Skills"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>

        </Row>
        <Row>
          <Col className="pr-1" md="6">
            <Form.Group>
              <label>Old Password</label>
              <Form.Control

                placeholder="Old password"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col className="pl-1" md="6">
            <Form.Group>
              <label>New Psssword</label>
              <Form.Control

                placeholder="New Password"
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
          Update Profile
        </Button>
        <div className="clearfix"></div>
      </Form>
    </Card.Body>
  )
}

export default EditProfile
