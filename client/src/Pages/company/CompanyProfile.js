import "./CompanyProfile.css";
import CompanyRightbar from "./CompanyRightbar";
import CompanyPost from "./CompanyPost";


export default function CompanyProfile() {
  return (
    <>
      <div className="profile">

        <div className="profileRight">

          <div className="profileRightTop">

            <div className="profileCover">




            </div>

            <br></br>
            <br></br>
            <div className="profileInfo">
              
            </div>
          </div>
          <h1>Company Profile</h1>
          <div className="profileRightBottom">


            <CompanyPost />

            <CompanyRightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
