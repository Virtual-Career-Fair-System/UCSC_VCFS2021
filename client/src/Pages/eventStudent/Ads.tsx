import React, {useState} from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import {Col} from 'react-bootstrap';
import {Info, InfoSubtitle, InfoTitle} from '@mui-treasury/components/info';
import {useApexInfoStyles} from '@mui-treasury/styles/info/apex';
import {useStyles} from "./AdsConstants";
import {useQuery} from "@apollo/client";
import {GET_ALL_ADVERTISEMENTS} from "../../grapgQl/advertisement/advertisementQuary";
import CvUpload from "./cvcpload/CvUpload";
import {AiOutlineCloseCircle} from "react-icons/all";


const Ads: React.FC<any> = (props) => {

  const allAds = useQuery(GET_ALL_ADVERTISEMENTS);
  const [addCvAdvertisement, setAddCvAdvertisement] = useState<any>(null);

  const handleOnClickAddCv = (advertisement:any) => {
    setAddCvAdvertisement(advertisement);
  }

  const handleOnCloseForm = () => {
    setAddCvAdvertisement(null);
  }

  const ads = () => {
    if (!allAds.data) {
      return;
    }
    return allAds.data.getAllAdvertisements.filter((ad: any) => {
      return ad.event_code === props.match.params.event_code && ad.category === props.match.params.category
    })
  }

  const styles = useStyles();

  const CustomCard = ({thumbnail, title, subtitle, description, joined = false, advertisement}: any) => {
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
              <Button
                className={styles.join}
                variant={'contained'}
                color={'secondary'}
                disableRipple
                onClick={() => handleOnClickAddCv(advertisement)}
              >
                Apply
              </Button>
            </Item>
          </Row>
        </Column>
      </div>
    );
  };
  const renderAds = () => {
    if (!allAds.data) {
      return;
    }
    return ads().map((advertisement: any) => {
      return (
        <Grid item xs={12} md={6} lg={4} key={advertisement.ad_id}>
          <CustomCard
            advertisement={advertisement}
            thumbnail={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQHCBAj8nRJkEwjWg5TpNuSZZG9iscsf43V1mfx0LZHNDYW3S_&usqp=CAU'
            }
            title={advertisement.com_name}
            subtitle={''}
            description={<b>{advertisement.description}</b>}
          />
        </Grid>)
    })
  }

  return (
    <React.Fragment>
      {addCvAdvertisement &&
      <Row>
          <Col xs={{span: 6, offset: 3}}
               className='text-center'
               style={{border: '3px solid blue', borderRadius: '5px', marginBottom: 3}}>
              <div className='text-right'>
                  <AiOutlineCloseCircle color='red' onClick={handleOnCloseForm}/>
              </div>
              <CvUpload event_code={props.match.params.event_code}
                        advertisement={addCvAdvertisement}
                        setAddCvAdvertisement={setAddCvAdvertisement}
              />
          </Col>
      </Row>
      }
      <Grid container spacing={4}>
        {renderAds()}
      </Grid>
    </React.Fragment>
  );
}

export default Ads;
