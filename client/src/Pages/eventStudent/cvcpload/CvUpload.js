import React, {useState} from 'react';
import {useMutation} from "@apollo/client";
import Swal from 'sweetalert2';
import {Badge, Button, Card, Form, Row, Col, Image} from "react-bootstrap";
import {CREATE_CV} from '../../../grapgQl/student/studentMutation';
import {useSelector} from "react-redux";
import {Column} from "@mui-treasury/components/flex";
import {AiOutlineCloseCircle} from "react-icons/all";
import PDFViewer from "pdf-viewer-reactjs";
import ScheduleMeeting from "../../company/ScheduleMeeting";

const CvUpload = (props) => {

    const login = useSelector((state) => state.login.login);
    const image = () => {
        if (!props.advertisement) {
            return;
        }
        return require(`../../../assets/adverts/${props.advertisement.image}`).default;
    }

    const [createCv] = useMutation(CREATE_CV);
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
        if (!cv_path1) {
            Toast.fire({
                icon: 'warning',
                title: 'Select your CV to apply..'
            });
            return;
        }
        createCv({
            variables: {cv_path1: cv_path1, ad_id: Number(props.advertisement.ad_id), student_id: Number(login.id)}
        }).then((data) => {
            setCved(data.data.createCv.successful);
            if (data.data.createCv.successful) {
                Toast.fire({
                    icon: 'success',
                    title: 'CV Upload successfully'
                });
                setPath(null);
                props.setAddCvAdvertisement(null);

            } else {
                Toast.fire({
                    icon: 'warning',
                    title: data.data.createCv.message
                });
            }
        });
    }

    return (
        <div>
            <Card.Body>
                <Form onSubmit={createCv1}>
                    <Row>
                        <Col className="pr-1" md="12">
                            {props.advertisement
                            &&
                            props.advertisement.image.split('.')[1] === 'pdf' ?
                                <PDFViewer
                                    document={{
                                        url: image(),
                                    }}
                                /> : <Image src={image()}/>
                            }
                        </Col>
                    </Row>
                    <h3>Cv Submission</h3>
                    <Row>
                        <Col className="pr-1" md="12">
                            <Form.Group>
                                <Form.Control placeholder="Cv" type="file" onChange={PathChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button className="btn-fill pull-right" type="submit" variant="info">
                        Apply
                    </Button>
                    <div className="clearfix"/>
                </Form>
            </Card.Body>
        </div>
    )
}

export default CvUpload;

// {
//     previewCv &&
//     <Column p={0} gap={0} className={styles.card}>
//         <Col className='text-right'>
//             <AiOutlineCloseCircle color='red' size='2em' onClick={handleOnFormClose}/>
//         </Col>
//         {
//             previewCv.cv_path1.split('.')[1] == 'pdf'?
//                 <PDFViewer
//                     document={{
//                         url: renderCv(previewCv.cv_path1),
//                     }}
//                 />:<Image src={renderCv(previewCv.cv_path1)}/>
//         }
//
//
//         {previewCv.status==='notInvited' &&
//         <ScheduleMeeting applicant={previewCv}
//                          setApplicants={setApplicants}
//                          applicants={applicants}
//         />
//         }
//     </Column>
// }