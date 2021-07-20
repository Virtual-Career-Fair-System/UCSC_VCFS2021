import "./AdminProfile.css";
import AdminRightbar from "./AdminRightbar";
import AdminPost from "./AdminPost";


export default function AdminProfile() {
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
          <h1>Admin Profile</h1>
          <div className="profileRightBottom">

         
            <AdminPost />

            <AdminRightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
