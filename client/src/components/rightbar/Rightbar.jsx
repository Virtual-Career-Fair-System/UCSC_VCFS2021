import "./rightbar.css";

export default function Rightbar({ profile }) {
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
        <h2 className="rightbarTitle">
          Projects
          <br></br>
          <br></br>
          A Terminal Chat application, Terminal Chat Network
          It is prototype of console chat apps like the one we saw in Die Hard 4.
          It has in-app capabilities to transfer file of any type between users.
          It also has a user login and registration feature.
          It is written in python.
          <br></br>
          <br></br>
          MySQL is used to manage the database of login data and user.
          FTP Servers are used to mange the file transfer between the users.
          Link to GitHub Repository: https://github.com/ayanbag/Terminal_Chat_Network
          <br></br>
          <br></br>
          A terminal console Dictionary cum Translator app, COMLID
          It is a command line dictionary application.
          This project uses the API Services of OXFORD DICTIONARY.
          It also features a translator.
          The backend part code of COMLID is written in Python.
          <br></br>
          <br></br>
          My Personal Website, kickresume.ml
          It is designed with basic HTML and CSS skills</h2>
        {/* <h4 className="rightbarTitle">Contact me</h4> */}

        {/* <div className="rightbarInfo"> */}
        {/* <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">No: 13/6,
Baron waidya rathna mw,
Matara.
</span>
</div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Tel:</span>
            <span className="rightbarInfoValue">+94770062833</span>
          </div>
       
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Email:</span>
            <span className="rightbarInfoValue">tharindu.infor@gmail.com</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Linkedin:</span>
            <span className="rightbarInfoValue">https://github.com/tharindu-31
</span>
          </div>
          </div> */}
          <br></br>
          <br></br>
          <br></br>

        <h4 className="rightbarTitle">Skills</h4>
        Programming Languages
        <br></br>
        Python
        <br></br>
        R
        <br></br>
        JAVA
        <br></br>
        JavaScript
        <br></br>
        Node.js
        <br></br>

        {/* <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.PNG"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Java</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/9.PNG"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">react</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/8.PNG"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Node.js</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.PNG"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">MySQl</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/7.PNG"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Python</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.PNG"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">C</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.PNG"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">C++</span>
          </div>
        </div> */}
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
