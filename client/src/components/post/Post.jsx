import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
import SideBar from "../../Pages/profile/SideBar";

export default function Post({student}) {


  return (
    <div className="post">
      <SideBar student={student}/>

      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">

            <br></br>
            <br></br>
          </div>
          <div className="postTopRight">
          </div>
        </div>
        <div className="postCenter">

        </div>
        <div className="postBottom">
          <div className="postBottomLeft">

          </div>
          <div className="postBottomRight">
          </div>
        </div>
      </div>
    </div>
  );
}
