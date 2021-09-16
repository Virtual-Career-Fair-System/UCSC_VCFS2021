import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Post from "../../components/post/Post";
import {ILoginData} from "../../types/login";
import {AppState} from "../../state/reducers";
import {useMutation, useQuery} from "@apollo/client";
import { useSelector } from "react-redux";
import {GET_STUDENT} from "../../grapgQl/student/studentMutation";
import { useState,useEffect } from "react";
export default function Profile() {
    const login: ILoginData = useSelector((state: AppState) => state.login.login);
    const [getStudent] = useMutation(GET_STUDENT);
    const [student,setStudent] = useState<any>(null);
    useEffect(() => {
        getStudent({variables:{id:15}}).then((result)=>{setStudent(result.data.getStudent)})
    console.log(student);
    },[]);
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
                        <br></br>
                        <br></br>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Tharindu Jayawardana </h4>
                            <span className="profileInfoDesc">undergraduate</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        {/*<Post/>*/}
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    );
}
