import React, {useState} from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import {Info, InfoSubtitle, InfoTitle} from '@mui-treasury/components/info';
import {useApexInfoStyles} from '@mui-treasury/styles/info/apex';
import {useStyles} from "./AdsConstants";

type AdsProps = {
  advertisements: any
}

const Ads: React.FC<AdsProps> = (props) => {
  const styles = useStyles();

  const CustomCard = ({thumbnail, title, subtitle, description, joined = false}: any) => {
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
    if(!props.advertisements){
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
        />
      </Grid>)
    })
  }

  return (
    <React.Fragment>
      <NoSsr>
        <GoogleFontLoader fonts={[{font: 'Ubuntu', weights: [400, 700]}]}/>
      </NoSsr>
      <Grid container spacing={4}>
        {renderAds()}
      </Grid>
    </React.Fragment>
  );
}

export default Ads;
