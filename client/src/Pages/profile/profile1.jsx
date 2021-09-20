import "./profile.css";
import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile1() {
    const [isCvViewRedirect, setIsCvViewRedirect] = useState(false);
    const onclickCvViewRoute = () => {
      // console.log('Nim');
      setIsCvViewRedirect(true);

    }
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
            <button onClick={onclickCvViewRoute}>
                back
                {isCvViewRedirect && <Redirect to='/cvview' />}
            </button>

            <br></br>
            <br></br>
            <div className="profileInfo">
              <h4 className="profileInfoName">Tharindu Jayawardana </h4>
              <span className="profileInfoDesc">undergraduate</span>
            </div>
          </div>
          <div className="profileRightBottom">


            {/* <Post /> */}


            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
