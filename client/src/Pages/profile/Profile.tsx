import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import {ILoginData} from "../../types/login";
import {AppState} from "../../state/reducers";
import {useMutation, useQuery} from "@apollo/client";
import {useSelector} from "react-redux";
import {CHANGE_AVAILABLE, GET_STUDENT} from "../../grapgQl/student/studentMutation";
import React, {useState, useEffect} from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {useHistory} from 'react-router-dom';

export default function Profile() {
  const history = useHistory();
  const [changeAvailable] = useMutation(CHANGE_AVAILABLE);
  const login: ILoginData = useSelector((state: AppState) => state.login.login);
  const [getStudent] = useMutation(GET_STUDENT);
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    if (!login.id) {
      return
    }
    getStudent({variables: {id: Number(login.id)}}).then((result) => {
      setStudent(result.data.getStudent);
    })
  }, []);

  const editProfile = () => {
    history.push('/editprofile');
  }

  const handleOnChangeAvailable = () => {
    if (!student) {
      return;
    }
    if (student.available == 0) {
      console.log('0');
      changeAvailable({variables: {id: Number(student.id), available: 1}}).then(result => setStudent({
        ...student,
        available: 1
      }))
    } else {
      console.log('1');
      changeAvailable({variables: {id: Number(student.id), available: 0}}).then(result => setStudent({
        ...student,
        available: 0
      }))
    }
  }


  const coverImage = () => {
    try {
      if (!student) {
        return require(`../../assets/image/profileImages/user.jpg`).default;
      }
      return require(`../../assets/image/studentCoverPicture/${student.cover_pic}`).default;
    } catch {
      return require(`../../assets/image/profileImages/user.jpg`).default;
    }
  }

  const ProfileImage = () => {
    try {
      if (!student) {
        return require(`../../assets/image/profileImages/user.jpg`).default;
      }
      return require(`../../assets/image/profileImages/${student.image}`).default;
    } catch {
      return require(`../../assets/image/profileImages/user.jpg`).default;
    }
  }

  return (
    <React.Fragment>
      <Header title="Career Fair UCSC"/>
      <Container fluid={true}>
        <div className="profile">
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover py-2">
                <Image className="profileCoverImg" src={coverImage()} alt="image not found"/>
                <img className="profileUserImg" src={ProfileImage()} alt=""/>
              </div>
              <div>

              </div>
              <div className="profileInfo py-5">
                <Row className='py-2'>
                  <Col className='text-center'>
                    <h4 className="profileInfoName">{student && student.f_name} {student && student.l_name} </h4>

                    <span className="profileInfoDesc">{student && student.state}</span>
                  </Col>
                </Row>
                <Row className='pt-2'>
                  <Col> <Button variant={student && student.available === 0 ? "success" : "danger"}
                                onClick={handleOnChangeAvailable}>
                    {student && student.available === 0 ? 'Available' : 'Unavailable'}
                  </Button></Col>
                  <Col>
                    <Button onClick={editProfile} style={{whiteSpace:"nowrap"}}>Edit Profile</Button>
                  </Col>
                </Row>
              </div>
            </div>
            <Container>
              <div className="profileRightBottom">
                <Rightbar student={student}/>
              </div>
            </Container>
          </div>
        </div>
      </Container>
      <Footer/>
    </React.Fragment>
  );
}
