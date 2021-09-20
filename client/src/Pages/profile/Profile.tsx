import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Post from "../../components/post/Post";
import {ILoginData} from "../../types/login";
import {AppState} from "../../state/reducers";
import {useMutation, useQuery} from "@apollo/client";
import { useSelector } from "react-redux";
import {GET_STUDENT} from "../../grapgQl/student/studentMutation";
import { useState,useEffect } from "react";
import {Image} from "react-bootstrap";
export default function Profile() {
    const login: ILoginData = useSelector((state: AppState) => state.login.login);
    const [getStudent] = useMutation(GET_STUDENT);
    const [student,setStudent] = useState<any>(null);
    useEffect(() => {
        getStudent({variables:{id:15}}).then((result)=>{setStudent(result.data.getStudent)})
    },[]);
    
    const image1 = () =>{
        if(!student){
            return ;
        }
        return require(`../../assets/image/studentCoverPicture/${student.cover_pic}`).default;
    }
    
    return (
        <>
            <div className="profile">
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <Image
                                className="profileCoverImg"
                                src={image1()}
                                 alt="image not found"
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
                           <h4 className="profileInfoName">{student &&student.f_name} {student &&student.l_name} </h4>
                            <span className="profileInfoDesc">{student &&student.state}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                       <Post student={student}/>
                        <Rightbar student={student}/>
                    </div>
                </div>
            </div>
        </>
    );
}
