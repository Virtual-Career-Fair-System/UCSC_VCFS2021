import "./AdminPost.css";
import AdminSideBar from "./AdminSideBar";
export default function AdminPost({ AdminPost }) {
  return (
    <div className="AdminPost">
      <AdminSideBar/>

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
