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

const PublishAd = (props) => {
    const { loginId, eventId } = props;
    const [createAd] = useMutation(CREATE_AD);

    // const [com_id, setCompanyId] = useState(null);
    const [ad_description, setDescrption] = useState(null);
    const [image, setPath] = useState(null);
    const [added, setAdded] = useState(false);

    const PathChange = ({
        target: {
            validity,
            files: [file]
        }
    }) => {
        setPath(file);
    }



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
        if (!image || !eventId || !loginId) {
            Toast.fire({
                icon: 'warning',
                title: 'invalid..'
            });
            return;
        }
        // console.log(ad_path1)
        createAd({
            variables: {loginId: Number(loginId), eventId: Number(eventId), ad_description: ad_description, image: image }

        }).then((data) => {
            setAdded(data.data.createAd.successful);
            if (data.data.createAd.successful) {

                Toast.fire({
                    icon: 'success',
                    title: 'Adverticement Upload successfully'
                });
                setDescrption('');
                setPath(null);



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
            {/* <CompanyHeader /> */}
            <Card.Body>
                <h3>Publish Ad</h3>
                {/* <h3>{loginId}</h3>
                <h3>{eventId}</h3> */}
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
                        Publish
                    </Button>
                    {(isRedirectAd || added) && <Redirect to='/currentEvents/company/1CareerFair2021' />}
                    <div className="clearfix"></div>
                </Form>
            </Card.Body>

        </div>
    )
}

export default PublishAd;