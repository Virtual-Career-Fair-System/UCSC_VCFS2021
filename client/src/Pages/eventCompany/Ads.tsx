import React, {useState} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Column,Row, Item} from '@mui-treasury/components/flex';
import {Info, InfoSubtitle, InfoTitle} from '@mui-treasury/components/info';
import {useApexInfoStyles} from '@mui-treasury/styles/info/apex';
import {useStyles} from "./AdsConstants";
import {useHistory} from 'react-router-dom';
import {Col,Row as Row2,Image} from "react-bootstrap";
import PDFViewer from "pdf-viewer-reactjs";
import {AiOutlineCloseCircle} from "react-icons/all";

type AdsProps = {
  advertisements: any
  thisEvent: any
}

const Ads: React.FC<AdsProps> = (props) => {
  const styles = useStyles();
  const history = useHistory();
  const [isCompanyViewNotificationRedirect, setIsCompanyViewNotificationRedirect] = useState(false);
  const onclickCompanyViewNotificationRoute = (ad_id: any) => {
    history.push(`/currentEvents/company/${props.thisEvent.event_code}/${ad_id}`);
  }

  const [previewAdd, setPreviewAdd] = useState<any>(null);

  const handleONPreviewAdd = (add: string) => {
    console.log(add);
    setPreviewAdd(add);
  }

  const CustomCard = ({thumbnail, title, subtitle, description, joined = false, ad_id, ad_image}: any) => {
    return (
      <div className={styles.root}>
        <Column className={styles.card}>
          <Row p={2} gap={2}>
            <Avatar className={styles.logo} variant={'rounded'} src={thumbnail}/>
            <Info position={'middle'} useStyles={useApexInfoStyles}>
              <InfoTitle>{title}</InfoTitle>
              <InfoSubtitle>{subtitle}</InfoSubtitle>
            </Info>
          </Row>
          <Box
            pb={1}
            px={2}
            color={'grey.600'}
            fontSize={'0.875rem'}
            fontFamily={'Ubuntu'}
          >
            {description}
          </Box>
          <Row p={2} gap={2} position={'bottom'}>
            <Item position={'middle-left'}>
              <Button className={styles.join} variant={'contained'} color={'secondary'} disableRipple
                      onClick={() => onclickCompanyViewNotificationRoute(ad_id)}
              >
                Applicants
              </Button>
            </Item>
            <Item position={'middle-left'}>
              <Button className={styles.join} variant={'contained'} color={'secondary'} disableRipple
                      onClick={() => handleONPreviewAdd(ad_image)}>
                View Ad
              </Button>
            </Item>
          </Row>
        </Column>
      </div>
    );
  };

  const renderAds = () => {
    if (!props.advertisements) {
      return;
    }
    return props.advertisements.map((advertisement: any) => {
      return (
        <Grid item xs={12} md={6} lg={4}>
          <CustomCard
            thumbnail={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQHCBAj8nRJkEwjWg5TpNuSZZG9iscsf43V1mfx0LZHNDYW3S_&usqp=CAU'
            }
            title={advertisement.com_name}
            subtitle={''}
            description={<b>{advertisement.description}</b>}
            ad_id={advertisement.ad_id}
            ad_image={advertisement.image}
          />
        </Grid>)
    })
  }
  const image = (previewAdd: string) => {
    if (!previewAdd) {
      return;
    }
    return require(`../../assets/adverts/${previewAdd}`).default;
  }
  const handleOnFormClose = () => {
    setPreviewAdd(null);
  }

  return (
    <React.Fragment>
      {previewAdd &&
      <Row2 >
          <Col xs={{span: 6, offset: 3}}  style={{border: 'solid 2px blue'}} className='my-5'>
          <Col xs={12} className='text-right'>
              <AiOutlineCloseCircle color='red' size='2em' onClick={handleOnFormClose}/>
          </Col>
          <Col xs={12} className='px-5 py-5'>
            { previewAdd.split('.')[1] == 'pdf' ?
              <PDFViewer
                  document={{
                    url: image(previewAdd),
                  }}
              /> : <Image style={{width:'100%'}} src={image(previewAdd)}/>}
          </Col>
          </Col>
      </Row2>
      }
      <Grid container spacing={4}>
        {renderAds()}
      </Grid>
    </React.Fragment>
  );
}

export default Ads;
