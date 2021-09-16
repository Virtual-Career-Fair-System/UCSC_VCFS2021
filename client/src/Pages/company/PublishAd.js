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
import { CREATE_AD } from '../../grapgQl/company/companyMutation';
import { Redirect } from 'react-router-dom';
import CompanyHeader from './CompanyHeader';

export default function PublishAd() {
    const [createAd] = useMutation(CREATE_AD);

    // const [com_id, setCompanyId] = useState(null);
    const [ad_description, setDescrption] = useState(null);
    const [ad_path1, setPath] = useState(null);
    const [added, setAdded] = useState(false);
    

    const [isRedirectAd, setIsRedirectAd] = useState(false);
    const redirectToAd = () => {
        setIsRedirectAd(true);
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

    
    
    function createAd1(e) {
        e.preventDefault();
        

        createAd({
            variables: { ad_description: ad_description, ad_path1: ad_path1}
        }).then((data) => {
            setAdded(data.data.createAd.successful);
            if (data.data.createAd.successful) {
                
                Toast.fire({
                    icon: 'success',
                    title: 'Adverticement Upload successfully'
                });
                setDescrption('');
                setPath('');
                


            } else {
                Toast.fire({
                    icon: 'warning',
                    title: data.data.createAd.message
                });
            }
        })
            ;


    }
    return (
        <div>
            <CompanyHeader/>
            <Card.Body>
                <h1>Publish Ad</h1>
                <Form onSubmit={createAd1}>
                
                    
                  
                <Row>
                        <Col className="pr-1" md="12">
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">
                                    Job Category
                                </label>
                                <Form.Control
                                    placeholder="Category"
                                    type="text"
                                    value={ad_description}
                                    onChange={(e) => {
                                        setDescrption(e.target.value);
                                    }}
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col className="pr-1" md="12">
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">
                                    Adverticement
                                </label>
                                <Form.Control
                                    placeholder="Adverticement"
                                    type="file"
                                    value={ad_path1}
                                    onChange={(e) => {
                                        setPath(e.target.value);
                                    }}
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                   

                    <Button
                        className="btn-fill pull-right"
                        type="submit"
                        variant="info"
                    >
                        Publish
                    </Button>
                    {(isRedirectAd || added) && <Redirect to='/publishad' />}
                    <div className="clearfix"></div>
                </Form>
            </Card.Body>

        </div>
    )
}

