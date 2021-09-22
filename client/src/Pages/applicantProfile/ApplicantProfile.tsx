import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Post from "../../components/post/Post";
import {useMutation} from "@apollo/client";
import {GET_STUDENT} from "../../grapgQl/student/studentMutation";
import {useState, useEffect} from "react";
import {Container, Image} from "react-bootstrap";
import React from "react";
import {useHistory} from 'react-router-dom';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const ApplicantProfile = (props: any) => {

  const [getStudent] = useMutation(GET_STUDENT);
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    getStudent({variables: {id: Number(props.match.params.id)}}).then((result) => {
      setStudent(result.data.getStudent)
    })
  }, []);

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
            <div className="profileInfo py-5">
              <h4 className="profileInfoName">{student && student.f_name} {student && student.l_name} </h4>
              <span className="profileInfoDesc">{student && student.state}</span>
              <span style={{color:'black',border:'1px solid green',padding:'10px 10px',margin:'10px 10px',backgroundColor:'#90EE90',borderRadius:'10px'}}>{student && student.available===0 ?'Available':'Unavailable'}</span>
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

export default ApplicantProfile;