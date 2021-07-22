import "./CompanyProfile.css";
import CompanyRightbar from "./CompanyRightbar";
import CompanyPost from "./CompanyPost";


export default function CompanyProfile() {
  return (
    <>
      <div className="profile">

        <div className="profileRight">

          
          <div className="profileRightBottom">


            <CompanyPost />

            <CompanyRightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
