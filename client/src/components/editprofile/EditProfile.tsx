import React from 'react';
import {ILoginData} from "../../types/login";
import {AppState} from "../../state/reducers";
import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import Swal from 'sweetalert2';

import {
  Button,
  Card,
  Form,
  Row,
  Col, Container,
} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Header from '../header/Header';
import {useMutation} from "@apollo/client";
import {UPDATE_STUDENT} from '../../grapgQl/student/editMutation';
import {number} from "prop-types";
import Footer from "../footer/Footer";


const EditProfile = () => {
  const [updateStudent] = useMutation(UPDATE_STUDENT);

  const login: ILoginData = useSelector((state: AppState) => state.login.login);
  console.log(login);
  const dispatch = useDispatch();

  const [fname, setFname] = useState<string>('');
  const [lname, setLname] = useState<string>('');
  const [project1, setProject1] = useState<string>('');
  const [projectDis1, setProjectDis1] = useState<string>('');
  const [project2, setProject2] = useState<string>('');
  const [projectDis2, setProjectDis2] = useState<string>('');
  const [project3, setProject3] = useState<string>('');
  const [projectDis3, setProjectDis3] = useState<string>('');
  const [skills, setSkills] = useState<string>('');
  const [contactNumber, setcontactNumber] = useState<string>('');
  const [linkedIn, setLinkedIn] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [editprofile, setEditprofile] = useState(false);
  const [profilePicture, setProfilePicture] = useState<any>(null);
  const [coverPhoto, setCoverPhoto] = useState<any>(null);

  const profilePictureChange = ({
                                  target: {
                                    validity,
                                    files: [file]
                                  }
                                }: any) => {
    setProfilePicture(file);
  }
  const coverPhotoChange = ({
                              target: {
                                validity,
                                files: [file]
                              }
                            }: any) => {
    setCoverPhoto(file);
  }

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

  const updateProfile = async (event: any) => {
    event.preventDefault();
    if (!fname || !lname || !project1 || !projectDis1 || !project2 || !projectDis2 || !project3 || !projectDis3 || !skills || !contactNumber || !linkedIn || !address || !login.id) {
      Toast.fire({
        icon: 'warning',
        title: 'Invalid...'
      });
      return;
    }
    updateStudent({
      variables: {
        id: Number(login.id),
        profilePicture: profilePicture,
        coverPhoto: coverPhoto,
        fname: fname,
        lname: lname,
        project1: project1,
        projectDis1: projectDis1,
        project2: project2,
        projectDis2: projectDis2,
        project3: project3,
        projectDis3: projectDis3,
        skills: skills,
        contactNumber: contactNumber,
        linkedIn: linkedIn,
        address: address
      }
    }).then((data: any) => {
        setEditprofile(data.data.updateStudent.successful);
        if (data.data.updateStudent.successful) {

          Toast.fire({
            icon: 'success',
            title: data.data.updateStudent.message
          });
          setProfilePicture(null);
          setCoverPhoto(null);
          setFname(" ");
          setLname(" ");
          setProject1(" ");
          setProjectDis1(" ");
          setProject2(" ");
          setProjectDis2(" ");
          setProject3(" ");
          setProjectDis3(" ");
          setSkills(" ");
          setcontactNumber(" ");
          setLinkedIn(" ");
          setAddress(" ");
        } else {
          Toast.fire({
            icon: 'warning',
            title: 'failed to update'
          });
        }
      }
    );


  }
  return (
    <React.Fragment>
      <Header title="Career Fair UCSC"/>

      {/* <h1>Edit Profile</h1> */}
      <Container >
        <Form onSubmit={updateProfile}>
          <Row style={{border: '1px solid green', borderRadius: '5px', marginBottom: 3}}>
            <Col className="pr-1" md="12">
              <Form.Group>
                <label htmlFor="exampleInputEmail1">
                  Profile picture
                </label>
                <Form.Control
                  placeholder="pro pic"
                  type="file"
                  onChange={profilePictureChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row style={{border: '1px solid green', borderRadius: '5px', marginBottom: 3}}>
            <Col className="pr-1" md="12">
              <Form.Group>
                <label htmlFor="exampleInputEmail1">
                  Cover picture
                </label>
                <Form.Control
                  placeholder="pro pic"
                  type="file"
                  onChange={coverPhotoChange}
                />
              </Form.Group>
            </Col>
          </Row>
          {/*<Row>*/}
          {/*  <Col className="pr-1" md="12">*/}
          {/*    <Form.Group>*/}
          {/*      <label htmlFor="exampleInputEmail1">*/}
          {/*        Email address*/}
          {/*      </label>*/}
          {/*      <Form.Control*/}
          {/*        placeholder="Email"*/}
          {/*        type="email"*/}
          {/*        value={email}*/}
          {/*        onChange={(event) => setEmail(event.target.value)}*/}
          {/*      />*/}
          {/*    </Form.Group>*/}
          {/*  </Col>*/}
          {/*</Row>*/}
          <Row style={{border: '1px solid green', borderRadius: '5px', marginBottom: 3}}>
            <Col className="pr-1" md="6">
              <Form.Group>
                <label>First Name</label>
                <Form.Control
                  placeholder="First Name"
                  type="text"
                  value={fname}
                  onChange={(event) => setFname(event.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="pl-1" md="6">
              <Form.Group>
                <label>Last Name</label>
                <Form.Control
                  placeholder="Last Name"
                  type="text"
                  value={lname}
                  onChange={(event) => setLname(event.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row style={{border: '1px solid green', borderRadius: '5px', marginBottom: 3}}>
            <Col className="pr-1" md="6">
              <Form.Group>
                <label htmlFor="exampleInputEmail1">
                  My Project 1
                </label>
                <Form.Control
                  placeholder="Project Name"
                  type="text"
                  value={project1}
                  onChange={(event) => setProject1(event.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="pr-1" md="6">
              <Form.Group>
                <label htmlFor="exampleInputEmail1">
                  My Project 1 Description
                </label>
                <Form.Control
                  placeholder="Project Description"
                  as="textarea" rows={5}
                  value={projectDis1}
                  onChange={(event) => setProjectDis1(event.target.value)}
                />
              </Form.Group>
            </Col>

          </Row>
          <Row style={{border: '1px solid green', borderRadius: '5px', marginBottom: 3}}>
            <Col className="pr-1" md="6">
              <Form.Group>
                <label htmlFor="exampleInputEmail1">
                  My Project2
                </label>
                <Form.Control
                  placeholder="Project Name"
                  type="text"
                  value={project2}
                  onChange={(event) => setProject2(event.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="pr-1" md="6">
              <Form.Group>
                <label htmlFor="exampleInputEmail1">
                  My Project 2 Description
                </label>
                <Form.Control
                  placeholder="Project Description"
                  as="textarea" rows={5}
                  value={projectDis2}
                  onChange={(event) => setProjectDis2(event.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row style={{border: '1px solid green', borderRadius: '5px', marginBottom: 3}}>
            <Col className="pr-1" md="6">
              <Form.Group>
                <label htmlFor="exampleInputEmail1">
                  My Project 3
                </label>
                <Form.Control
                  placeholder="Project Name"
                  type='text'
                  value={project3}
                  onChange={(event) => setProject3(event.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="pr-1" md="6">
              <Form.Group>
                <label htmlFor="exampleInputEmail1">
                  My Project 3 Description
                </label>
                <Form.Control
                  placeholder="Project Description"
                  as="textarea" rows={5}
                  value={projectDis3}
                  onChange={(event) => setProjectDis3(event.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row style={{border: '1px solid green', borderRadius: '5px', marginBottom: 3}}>
            <Col className="pr-1" md="12">
              <Form.Group>
                <label htmlFor="exampleInputEmail1">
                  Skills
                </label>
                <Form.Control
                  placeholder="My Skills"
                  type="text"
                  value={skills}
                  onChange={(event) => setSkills(event.target.value)}
                />
              </Form.Group>
            </Col>

          </Row>
          <Row style={{border: '1px solid green', borderRadius: '5px', marginBottom: 3}}>
            <Col className="pr-1" md="12">
              <Form.Group>
                <label htmlFor="exampleInputEmail1">
                  Contact Number
                </label>
                <Form.Control
                  placeholder="Contact Number"
                  type="text"
                  value={contactNumber}
                  onChange={(event) => setcontactNumber(event.target.value)}
                />
              </Form.Group>
            </Col>

          </Row>
          <Row style={{border: '1px solid green', borderRadius: '5px', marginBottom: 3}}>
            <Col className="pr-1" md="12">
              <Form.Group>
                <label htmlFor="exampleInputEmail1">
                  LinkedIn
                </label>
                <Form.Control
                  placeholder=" LinkedIn"
                  type="text"
                  value={linkedIn}
                  onChange={(event) => setLinkedIn(event.target.value)}
                />
              </Form.Group>
            </Col>

          </Row>
          <Row style={{border: '1px solid green', borderRadius: '5px', marginBottom: 3}}>
            <Col className="pr-1" md="12">
              <Form.Group>
                <label htmlFor="exampleInputEmail1">
                  Address
                </label>
                <Form.Control
                  placeholder=" Address"
                  type="text"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          {/*<Row>*/}
          {/*  <Col className="pr-1" md="6">*/}
          {/*    <Form.Group>*/}
          {/*      <label>Old Password</label>*/}
          {/*      <Form.Control*/}

          {/*        placeholder="Old password"*/}
          {/*        type="text"*/}
          {/*      />*/}
          {/*    </Form.Group>*/}
          {/*  </Col>*/}
          {/*  <Col className="pl-1" md="6">*/}
          {/*    <Form.Group>*/}
          {/*      <label>New Psssword</label>*/}
          {/*      <Form.Control*/}

          {/*        placeholder="New Password"*/}
          {/*        type="text"*/}
          {/*      />*/}
          {/*    </Form.Group>*/}
          {/*  </Col>*/}
          {/*</Row>*/}
          <Row className='py-5'>
            <Col className='text-right'>
              <Button
                className="btn-fill pull-right"
                type="submit"
              >
                Update Profile
              </Button>
            </Col>
          </Row>

          {(isRedirectAd || setEditprofile) && <Redirect to='/editprofile'/>}
          <div className="clearfix"></div>
        </Form>
      </Container>
      <Footer title={'Career Fair UCSC'}/>
    </React.Fragment>
  )
}

export default EditProfile
