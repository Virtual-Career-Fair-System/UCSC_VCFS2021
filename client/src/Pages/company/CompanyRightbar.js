import Comp from "./Comp";
import "./companyrightbar.css";

export default function CompanyRightbar({ profile }) {
    const HomeRightbar = () => {

    };

    const ProfileRightbar = () => {
        return (

            <div align="center">

                    <Comp/>
            </div>
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
