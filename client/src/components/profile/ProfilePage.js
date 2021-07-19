import React,{useState} from 'react'
// import SideBar from '../currentEvents/SideBar';
import "./ProfilePage.css"
// import {
//     Badge,
//     Button,
//     Card,
//     Form,
//     Navbar,
//     Nav,
//     Container,
//     Row,
//     Col,
//   } from "react-bootstrap";

export default function ProfilePage() {
    const [name,setName] = useState('Your Name');
    const [job,setJob] = useState(' Job');
    const [about,setAbout] = useState('I’m an enthusiastic undergraduate interested in emerging technologies as well as web development who is a highly motivated and positive individual willing to learn and explore new technologies. My goal is to develop my skills as a tech personality and give my best to the company.');
   

    return (
        <div>
            
           
        
        <div align="center">
        <div  className="Card" >
            <div className="upper-container">
                <div className="image-container">
                    <img src="https://storage.googleapis.com/kaggle-avatars/images/7043707-gr.jpg" alt='' height="100px" width="100px"/>

                </div>
            </div>
            
            
            <div className="lower-container">
                <h3> {name} </h3>
                <h4>{job}</h4>
                <p>{about}</p>
                <button>Edit Profile</button>
                <br></br>
                <button>Notification</button>
                <br></br>
                <button>New VAcancies</button>
                <br></br>
                <button>Accepted CV's</button>
            </div>
        </div>
        </div>
        </div>
    )
}


