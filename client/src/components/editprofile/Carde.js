import React, {useState} from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useApexInfoStyles } from '@mui-treasury/styles/info/apex';
import { useGraphicBtnStyles } from '@mui-treasury/styles/button/graphic';
import StudentHeader from '../../Pages/profile/StudentHeader';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    transition: '0.3s',
    position: 'relative',
    '&:before': {
      transition: '0.2s',
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      backgroundColor: '#d9daf1',
      borderRadius: '1rem',
      zIndex: 0,
      bottom: 0,
    },
    '&:hover': {
      '&:before': {
        bottom: -6,
      },
      '& $card': {
        boxShadow: '-12px 12px 64px 0 #bcc3d6',
      },
    },
  },
  card: {
    zIndex: 1,
    position: 'relative',
    borderRadius: '1rem',
    boxShadow: '0 6px 20px 0 #dbdbe8',
    backgroundColor: '#fff',
    transition: '0.4s',
    height: '100%',
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: '0.75rem',
  },
  avatar: {
    fontFamily: 'Ubuntu',
    fontSize: '0.875rem',
    backgroundColor: '#6d7efc',
  },
  join: {
    background: 'linear-gradient(to top, #638ef0, #82e7fe)',
    '& > *': {
      textTransform: 'none !important',
    },
  },
}));

const CustomCard = ({
  thumbnail,
  title,
  subtitle,
  description,
  joined = false,
}) => {
  const styles = useStyles();
  const btnStyles = useGraphicBtnStyles();
  return (
    <div className={styles.root}>
      <Column className={styles.card}>
        <Row p={2} gap={2}>
          <Avatar className={styles.logo} variant={'rounded'} src={thumbnail} />
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

          <Item position={'middle-right'}>
            <Button
              className={styles.join}
              classes={btnStyles}
              variant={'contained'}
              color={'primary'}
              disableRipple
            >
              View
            </Button>
          </Item>
        </Row>
      </Column>
    </div>
  );
};

export const Carde = React.memo(function TeamCard() {
  const [isAddRedirect, setIsAddRedirect] = useState(false);
  const onclickAddRoute = () => {
    console.log('Nim');
    setIsAddRedirect(true);
    
  }
  return (
    <>
    {/* */}
    <br></br>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Ubuntu', weights: [400, 700] }]} />
      </NoSsr>
      <Grid container spacing={4} >
        <Grid item xs={12} md={6} lg={4} onClick={onclickAddRoute}>
          <CustomCard
            thumbnail={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQHCBAj8nRJkEwjWg5TpNuSZZG9iscsf43V1mfx0LZHNDYW3S_&usqp=CAU'
            }
            title={'APEX company'}
            subtitle={'Colombo,Srilanka'}
            description={
              <>
                <b>Java,Python</b> with good OOP knowladge
              </>
            }
          />
          {isAddRedirect && <Redirect to='/adview'/>}
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CustomCard
            joined
            thumbnail={
              'https://cm1.narvii.com/7153/05204b8d8dcbb652dd1a8ceaafde997bc1909468_00.jpg'
            }
            title={'League lanka PVT'}
            subtitle={'Colombo, Srilanka'}
            description={
              'Reactjs & Nodejs'
            }
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CustomCard
            thumbnail={'https://avatarfiles.alphacoders.com/537/53765.jpg'}
            title={'Overwatch official'}
            subtitle={'Sri Lanka, UAE'}
            description={
              <>
                <b>java</b> and two year experience with java backends.
              </>
            }
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CustomCard
            thumbnail={'https://avatarfiles.alphacoders.com/537/53765.jpg'}
            title={'CodeUs asia'}
            subtitle={'canada, USA'}
            description={
              <>
                <b>JAVA, .Net ,c#</b> remote working.
              </>
            }
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CustomCard
            thumbnail={'https://avatarfiles.alphacoders.com/537/53765.jpg'}
            title={'Overwatch official'}
            subtitle={'Created by Bliz'}
            description={
              <>
                <b>RainBOW</b> and 3 others are already members of this group.
              </>
            }
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CustomCard
            thumbnail={'https://avatarfiles.alphacoders.com/537/53765.jpg'}
            title={'Overwatch official'}
            subtitle={'Created by Bliz'}
            description={
              <>
                <b>RainBOW</b> and 3 others are already members of this group.
              </>
            }
          />
        </Grid>
      </Grid>
    </>
  );
});
export default Carde