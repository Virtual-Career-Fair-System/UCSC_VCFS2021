import React from 'react';
import {ILoginData} from "../../types/login";
import {AppState} from "../../state/reducers";
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

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
import StudentHeader from '../../Pages/profile/StudentHeader';
import {useDispatch, useSelector} from "react-redux";
import Header from '../header/Header';
import { useMutation } from "@apollo/client";
import { UPDATE_STUDENT } from '../../grapgQl/student/editMutation';



const EditProfile = () => {
  const [updateStudent] = useMutation(UPDATE_STUDENT);

  const login: ILoginData = useSelector((state: AppState) => state.login.login);
  console.log(login);
  const dispatch = useDispatch();

  const [profilePhoto, setProfilePhoto] = useState<null | File>(null);
  const [coverPhoto, setcoverPhoto] = useState<null | File>(null);

  const [fname, setFname] = useState<null | string>(null);
  const [lname, setLname] = useState<null | string>(null);
  const [email, setEmail] = useState<null | string>(null);
  const [project1, setProject1] = useState<null | string>(null);
  const [projectDis1, setProjectDis1] = useState<null | string>(null);
  const [project2, setProject2] = useState<null | string>(null);
  const [projectDis2, setProjectDis2] = useState<null | string>(null);
  const [project3, setProject3] = useState<null | string>(null);
  const [projectDis3, setProjectDis3] = useState<null | string>(null);
  const [  skills , setSkills] = useState<null | string>(null);
  const [  contactNumber , setcontactNumber] = useState<null | string>(null);
  const [  linkedIn , setLinkedIn] = useState<null | string>(null);
  const [  address , setAddress] = useState<null | string>(null);

  const [password, setPassword] = useState<null | string>(null);
  const [confirmPassword, setConfirmPassword] = useState<null | string>(null);
  const [regNo, setRegNo] = useState<null | string>(null);
  const [registerError, setRegisterError] = useState<null | string>(null);
  const[editprofile, setEditprofile] =useState(false);

  const [isRedirectAd, setIsRedirectAd] = useState(false);
  const redirectToAd = () => {
      setIsRedirectAd(true);
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

const handleOnFile =(event:any)=>{
  setProfilePhoto(event.target.files[0])
}
const handleOnFile1 =(event:any)=>{
  setcoverPhoto(event.target.files[0])
  }


  const updateProfile = async (event:any) =>{

    event.preventDefault();
        

    updateStudent({
        variables: {
          fname:fname ,
           lname:lname,
            email:email,
            project1:project1,
            projectDis1:projectDis1,
            project2:project2,
            projectDis2:projectDis2,
            project3:project3,
            projectDis3:projectDis3, 
          skills:skills,
          contactNumber:contactNumber,
          linkedIn:linkedIn,
          address:address}
    }).then((data:any) => {
      setEditprofile(data.data.updateStudent.successful);
        if (data.data.updateStudent.successful) {
            
            Toast.fire({
                icon: 'success',
                title: 'Adverticement Upload successfully'
            });
            // setFname(" ");
            // setLname(" ");
            // setEmail(" ");
            // setProject1(" ");
            // setProjectDis1(" ");
            // setProject2(" ");
            // setProjectDis2(" ");
            // setProject3(" ");
            // setProjectDis3(" ");
            // setSkills(" ");
            // setcontactNumber(" ");
            // setLinkedIn(" ");
            // setAddress(" ");
            


        } else {
            Toast.fire({
                icon: 'warning',
                title: data.data.updateStudent.message
            });
        }
    }
        
    );
  

  }
  return (
    

    <Card.Body>
      <Header title="Career Fair UCSC"/>
    
      {/* <h1>Edit Profile</h1> */}
      <Form onSubmit={updateProfile}>
        <Row>
          <Col className="pr-1" md="12">
            <Form.Group>
              <label htmlFor="exampleInputEmail1">
                Profile picture
              </label>
              <Form.Control
                placeholder="pro pic"
                type="file"
                onChange={handleOnFile}
              ></Form.Control>
            </Form.Group>
          </Col>

        </Row>

        <Row>
          <Col className="pr-1" md="12">
            <Form.Group>
              <label htmlFor="exampleInputEmail1">
                Cover picture
              </label>
              <Form.Control
                placeholder="pro pic"
                type="file"
                onChange={handleOnFile1}
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
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
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
                value={fname}

                onChange={(event)=>setFname(event.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col className="pl-1" md="6">
            <Form.Group>
              <label>Last Name</label>
              <Form.Control

                placeholder="Last Name"
                type="text"
                value={lname}

                onChange={(event)=>setLname(event.target.value)}

              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="pr-1" md="12">
            <Form.Group>
              <label htmlFor="exampleInputEmail1">
                My Project 1
              </label>
              <Form.Control
                placeholder="Project Name"
                type="text"
                value={project1}

                onChange={(event)=>setProject1(event.target.value)}

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
                value={projectDis1}
                onChange={(event)=>setProjectDis1(event.target.value)}

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
                placeholder="Project Name"
                type="text"
                value={project2}

                onChange={(event)=>setProject2(event.target.value)}

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
                value={projectDis2}

                onChange={(event)=> setProjectDis2(event.target.value)}
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
                placeholder="Project Name"
                type="text"
                value={project3}

                onChange={(event)=>setProject3(event.target.value)}

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
                value={projectDis3}

                onChange={(event)=> setProjectDis3(event.target.value)}

               
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
                value={skills}

                onChange={(event)=>  setSkills(event.target.value)}

              ></Form.Control>
            </Form.Group>
          </Col>

        </Row>
        <Row>
          <Col className="pr-1" md="12">
            <Form.Group>
              <label htmlFor="exampleInputEmail1">
               Contact Number
              </label>
              <Form.Control
                placeholder="Contact Number"
                type="text"
                value={contactNumber}

                onChange={(event)=>  setcontactNumber(event.target.value)}

              ></Form.Control>
            </Form.Group>
          </Col>

        </Row>
        <Row>
          <Col className="pr-1" md="12">
            <Form.Group>
              <label htmlFor="exampleInputEmail1">
                LinkedIn
              </label>
              <Form.Control
                placeholder=" LinkedIn"
                type="text"
                value={linkedIn}

                onChange={(event)=> setLinkedIn(event.target.value)}

              ></Form.Control>
            </Form.Group>
          </Col>

        </Row>
        <Row>
          <Col className="pr-1" md="12">
            <Form.Group>
              <label htmlFor="exampleInputEmail1">
                Address
              </label>
              <Form.Control
                placeholder=" Address"
                type="text"
                value={address}

                onChange={(event)=> setAddress(event.target.value)}

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
        {(isRedirectAd || setEditprofile) && <Redirect to='/editprofile' />}
        <div className="clearfix"></div>
      </Form>
    </Card.Body>
  )
}

export default EditProfile
