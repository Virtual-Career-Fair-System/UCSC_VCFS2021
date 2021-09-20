import "./rightbar.css";
import {ILoginData} from "../../types/login";
import {AppState} from "../../state/reducers";
import {useMutation, useQuery} from "@apollo/client";
const  Rightbar: React.FC<any> = (props) =>{

console.log("student:");
console.log(props.student);

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>

      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h1 className="rightbarTitle">
          PROJECTS </h1>
          <h2 className="rightbarTitle">
          
          <h1 className="rightbarTitle">
           {props.student &&props.student.project1}</h1>
           {props.student &&props.student.projectDis1}
           
          <br></br>
          <br></br>
          <h1 className="rightbarTitle">
           {props.student &&props.student.project2}</h1>
           {props.student &&props.student.projectDis2}
          <br></br>
          <br></br>
          <h1 className="rightbarTitle">
           {props.student &&props.student.project3}</h1>
           {props.student &&props.student.projectDis3}
          <br></br>
          <br></br>
         </h2>
        <h4 className="rightbarTitle">Contact me</h4>

        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue"> {props.student &&props.student.address}
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Tel:</span>
            <span className="rightbarInfoValue">{props.student &&props.student.ContactNumber}</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Email:</span>
            <span className="rightbarInfoValue">{props.student &&props.student.email}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Linkedin:</span>
            <span className="rightbarInfoValue">{props.student &&props.student.linkedin}
            </span>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <h4 className="rightbarTitle">Skills</h4>


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
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {props.student ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;