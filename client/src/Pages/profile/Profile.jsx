import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Post from "../../components/post/Post";


export default function Profile() {
  return (
    <>
      <div className="profile">

        <div className="profileRight">

          <div className="profileRightTop">

            <div className="profileCover">

              <img
                className="profileCoverImg"
                src="assets/person/2.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/1.jfif"
                alt=""
              />

            </div>

            <br></br>
            <br></br>
            <div className="profileInfo">
              <h4 className="profileInfoName">Tharindu Jayawardana </h4>
              <span className="profileInfoDesc">undergraduate</span>
            </div>
          </div>
          <div className="profileRightBottom">


            <Post />


            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
