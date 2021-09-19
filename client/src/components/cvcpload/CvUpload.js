import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import Swal from 'sweetalert2';
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
} from "react-bootstrap";

import { Redirect } from 'react-router-dom';
import StudentHeader from '../../Pages/profile/StudentHeader';
import { CREATE_CV } from '../../grapgQl/student/studentMutation';
import {AppState} from "../../state/reducers";
import {IEvent, ILoginData} from "../../types/login";
import {useDispatch, useSelector} from "react-redux";

 const CvUpload= (props) => {
    // const login: ILoginData = useSelector((state: AppState) => state.login.login);
    const { loginId } = props;

    const [createCv] = useMutation(CREATE_CV);

    // const [com_id, setCompanyId] = useState(null);
 
    const [cv_path1, setPath] = useState(null);
    const [cved, setCved] = useState(false);
    
    const PathChange = ({
        target: {
            validity,
            files: [file]
        }
    }) => {
        setPath(file);
    }
    


    const [isRedirectCv, setIsRedirectCv] = useState(false);
    const redirectToCv = () => {
        setIsRedirectCv(true);
    }
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })



    function createCv1(e) {
        e.preventDefault();
if(!cv_path1){
    Toast.fire({
        icon: 'warning',
        title: 'invalid..'
    });
    return;
}
// console.log(ad_path1)
        createCv({
            variables: { cv_path1: cv_path1 }
            
        }).then((data) => {
            setCved(data.data.createCv.successful);
            if (data.data.createCv.successful) {

                Toast.fire({
                    icon: 'success',
                    title: 'Adverticement Upload successfully'
                });
                
                setPath(null);



            } else {
                Toast.fire({
                    icon: 'warning',
                    title: data.data.createCv.message
                });
            }
        })
            ;


    }
    return (
        <div>
            <StudentHeader />
            <Card.Body>
                <h3>{loginId}</h3>
                <h1>Cv Submission</h1>
                <Form onSubmit={createCv1}>



                    {/* <Row>
                        <Col className="pr-1" md="12">
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">
                                    Name
                                </label>
                                <Form.Control
                                    placeholder="Name"
                                    type="text"
                                    value={s_name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col className="pr-1" md="12">
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">
                                    Email
                                </label>
                                <Form.Control
                                    placeholder="Email"
                                    type="email"
                                    value={s_email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row> */}
                    <Row>
                        <Col className="pr-1" md="12">
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">
                                    CV
                                </label>
                                <Form.Control
                                    placeholder="Cv"
                                    type="file"
                                    
                                    onChange={PathChange}
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>


                    <Button
                        className="btn-fill pull-right"
                        type="submit"
                        variant="info"
                    >
                        Submit
                    </Button>
                    {(isRedirectCv || cved) && <Redirect to='/cvupload' />}
                    <div className="clearfix"></div>
                </Form>
            </Card.Body>

        </div>
    )
}

export default CvUpload;

