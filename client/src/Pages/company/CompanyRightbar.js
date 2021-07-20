import "./companyrightbar.css";

export default function CompanyRightbar({ profile }) {
    const HomeRightbar = () => {

    };

    const ProfileRightbar = () => {
        return (

            <div align="center">

                {/* <br></br>
                <button className="publish" >Publish New Adverticement</button>
                <br></br>
                <br></br>
                <br></br> */}
                <div align="left">
                    <div align="center">
                    <h4>Old Adverticements</h4>
                    </div>
                    <br></br>

                    <img className="image" src="http://www.topjobs.lk/logo/0000000082/55cSenioroSoftwareoEngineeroUIoUX.jpg"></img>

                    <img className="image" src="https://glints.com/sg/hired/wp-content/uploads/2018/08/asset1.png"></img>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img className="image" src="https://glints.com/sg/hired/wp-content/uploads/2018/08/asset1.png"></img>
                    <img className="image" src="https://i.pinimg.com/originals/74/16/76/7416762a4e8cc852b7b498b378a120d7.png"></img>
                </div>
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
