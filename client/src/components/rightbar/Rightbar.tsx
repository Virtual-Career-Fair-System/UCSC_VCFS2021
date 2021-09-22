import React from "react";
import "./rightbar.css";
import {Row, Col} from "react-bootstrap";
import Footer from "../footer/Footer";

const Rightbar: React.FC<any> = (props) => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <h2 className="text-center"> PROJECTS </h2>
        </Col>
        <Col xs={12} style={{backgroundColor: '#D3D3D3', border: '1px solid black', borderRadius: '5px'}}
             className='py-5 my-5'>
          <Row>
            <Col xs={3}> {props.student && props.student.project1}</Col>
            <Col xs={9}>{props.student && props.student.projectDis1}</Col>
          </Row>

        </Col>

        <Col xs={12} style={{backgroundColor: '#D3D3D3', border: '1px solid black', borderRadius: '5px'}}
             className='py-5 my-5'>
          <Row>
            <Col xs={3}> {props.student && props.student.project1}</Col>
            <Col xs={9}>{props.student && props.student.projectDis1}</Col>
          </Row>
        </Col>

        <Col xs={12} style={{backgroundColor: '#D3D3D3', border: '1px solid black', borderRadius: '5px'}}
             className='py-5 my-5'>
          <Row>
            <Col xs={3}> {props.student && props.student.project3}</Col>
            <Col xs={9}> {props.student && props.student.projectDis3}</Col>
          </Row>
        </Col>

        <Col>
          <h4 className="text-center">Skills</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src="../../assets/person/2.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Java</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="../../assets/person/9.png"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">react</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="../../assets/person/8.png"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Node.js</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="../../assets/person/6.png"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">MySQl</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="../../assets/person/7.png"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Python</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="../../assets/person/4.png"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">C</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="../../assets/person/5.png"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">C++</span>
            </div>
          </div>
        </Col>

        <Col xs={12} className='text-center py-1'>
          <h2 className='pb-2'>Contact me</h2>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From:</span>
              <span className="rightbarInfoValue"> {props.student && props.student.address}
            </span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Tel:</span>
              <span className="rightbarInfoValue">{props.student && props.student.ContactNumber}</span>
            </div>

            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Email:</span>
              <span className="rightbarInfoValue">{props.student && props.student.email}</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Linkedin:</span>
              <span className="rightbarInfoValue">{props.student && props.student.linkedin}
            </span>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Rightbar;