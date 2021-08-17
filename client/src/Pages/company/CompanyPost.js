import "./CompanyPost.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

import CompanySideBar from "./CompanySideBar";

export default function CompanyPost({ CompanyPost }) {


  return (
    <div className="CompanyPost">
      <CompanySideBar/>
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
