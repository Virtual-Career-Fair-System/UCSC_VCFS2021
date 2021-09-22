import React, {useEffect, useState} from 'react';
import cx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import {useDynamicAvatarStyles} from '@mui-treasury/styles/avatar/dynamic';
import {useMutation} from "@apollo/client";
import {GET_CV_APPLICANTS} from "../../grapgQl/company/companyMutation";
import {Col, Image} from "react-bootstrap";
import PDFViewer from 'pdf-viewer-reactjs';
import ScheduleMeeting from "../company/ScheduleMeeting";
import {AiOutlineCloseCircle} from "react-icons/all";

const usePersonStyles = makeStyles(() => ({
    text: {
      fontFamily: 'Barlow, san-serif',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    name: {
      fontWeight: 600,
      fontSize: '1rem',
      color: '#122740',
    },
    caption: {
      fontSize: '0.875rem',
      color: '#758392',
      marginTop: -4,
    },
    btn: {
      borderRadius: 20,
      padding: '0.125rem 0.75rem',
      borderColor: '#becddc',
      fontSize: '0.75rem',
    },
  }
));

const useStyles = makeStyles(() => ({
  card: {
    width: '100%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
  },
  container: {},
  header: {
    fontFamily: 'Barlow, san-serif',
    backgroundColor: '#fff',
  },
  headline: {
    color: '#122740',
    fontSize: '1.25rem',
    fontWeight: 600,
  },
  link: {
    color: '#2281bb',
    padding: '0 0.25rem',
    fontSize: '0.875rem',
  },
  actions: {
    color: '#BDC9D7'
  },
  divider: {
    backgroundColor: '#d9e2ee',
    margin: '0 20px',
  }
}));

const Applcants = (props: any) => {
  const styles = useStyles();

  const handeOnClickPreviewCv = (cv_path1: any) => {
    console.log(cv_path1);
    setPreviewCv(cv_path1);
  }

  const PersonItem = ({src, name, email, cv_path1, available, applicant}: any) => {
    const avatarStyles = useDynamicAvatarStyles({size: 56});
    const styles = usePersonStyles();
    return (
      <Row gap={2} p={2.5}>
        <Item>
          <Avatar classes={avatarStyles} src={src}/>
        </Item>
        <Row wrap grow gap={0.5} minWidth={0}>
          <Item grow minWidth={0}>
            <div className={cx(styles.name, styles.text)}>{name}</div>
            <div className={cx(styles.caption, styles.text)}>
              {available === 0 ? 'Available' : 'Unavailable'}
            </div>
            {applicant.status === 'invited' ?
              <div className={cx(styles.caption, styles.text)}>
                Invited
              </div> : <></>
            }
          </Item>
          {available === 0 ?
            <Item position={'middle'}>
              <Button className={styles.btn} variant={'outlined'} onClick={() => {
                handeOnClickPreviewCv(applicant)
              }}>
                View
              </Button>
            </Item> : <></>
          }
        </Row>
      </Row>
    );
  };
  const [applicants, setApplicants] = useState(null);
  const [getCvApplication] = useMutation(GET_CV_APPLICANTS)
  const [previewCv, setPreviewCv] = useState<any>(null);

  useEffect(() => {
    getCvApplication({
      variables: {
        ad_id: Number(props.match.params.ad_id)
      }
    }).then((data) => {
      setApplicants(data.data.getCvApplication)
    })
  }, []);


  const renderImage = (image: string) => {
    try {
      return require(`../../assets/image/profileImages/${image}.jpg`).default;

    } catch {
      return require(`../../assets/image/profileImages/user.jpg`).default;
    }
  }

  const renderCvs = () => {
    if (!applicants) {
      return;
    }
    // @ts-ignore
    return applicants.map((applicant: any) => {
      return <PersonItem name={applicant.f_name + ' ' + applicant.l_name}
                         src={renderImage(applicant.id)}
                         email={applicant.email}
                         cv_path1={applicant.cv_path1}
                         available={applicant.available}
                         applicant={applicant}
      />
    })
  }

  const renderCv = (cv: string) => {
    return require(`../../assets/cv/${cv}`).default;
  }
  const handleOnFormClose = () =>{
    setPreviewCv(null);
  }

  return (
    <React.Fragment>
      {
        previewCv &&
        <Column p={0} gap={0} className={styles.card}>
            <Col className='text-right'>
                <AiOutlineCloseCircle color='red' size='2em' onClick={handleOnFormClose}/>
            </Col>

            <PDFViewer
                document={{
                  url: renderCv(previewCv.cv_path1),
                }}
            />

          {previewCv.status==='notInvited' &&
            <ScheduleMeeting applicant={previewCv}
                             setApplicants={setApplicants}
                             applicants={applicants}
            />
          }
        </Column>
      }

      <Column p={0} gap={0} className={styles.card}>
        <Row wrap p={2} alignItems={'baseline'} className={styles.header}>
          <div>
            <Item stretched className={styles.headline}>New Notifications</Item>
          </div>
        </Row>
        <div>
          {renderCvs()}
        </div>
      </Column>
    </React.Fragment>
  );
}

export default Applcants;