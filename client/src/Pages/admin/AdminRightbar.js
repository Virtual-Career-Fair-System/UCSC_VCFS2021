import "./adminrightbar.css";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
export default function AdminRightbar({ profile }) {
    const HomeRightbar = () => {

    };

    const ProfileRightbar = () => {
        return (

            <div align="center">
                <br></br>
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th>Student Name</th>
                            <th>Accept</th>
                            <th>Reject</th>

                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>Nimantha</td>
                            <td><button>Accept</button></td>
                            <td><button>Reject</button></td>

                        </tr>
                        <tr>
                            <td>Praveen</td>
                            <td><button>Accept</button></td>
                            <td><button>Reject</button></td>
                        </tr>
                        <tr>
                            <td>Pasindu</td>
                            <td><button>Accept</button></td>
                            <td><button>Reject</button></td>
                        </tr>
                        <tr>
                            <td>Sudesh</td>
                            <td><button>Accept</button></td>
                            <td><button>Reject</button></td>
                        </tr>
                        <tr>
                            <td>Lahiru</td>
                            <td><button>Accept</button></td>
                            <td><button>Reject</button></td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>

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
