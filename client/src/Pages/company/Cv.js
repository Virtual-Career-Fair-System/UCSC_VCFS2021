import React ,{useState}from 'react';
import cx from 'clsx';
import { Card, CardContent,Button, CardMedia, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import {Redirect} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import CompanyHeader from './CompanyHeader';



const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
    borderRadius: 0,
    position: 'relative',
  },
  content: {
    padding: 24,
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    color: '#fff',
    letterSpacing: '3px',
    fontWeight: 200,
    fontSize: 12,
  },
  title: {
    color: '#fff',
    letterSpacing: '2px',
  },
}));

export const Cv = React.memo(function NewsCard2() {
  const [isScheduleRedirect, setIsScheduleRedirect] = useState(false);
  const [isProfileViewRedirect, setIsProfileViewRedirect] = useState(false);
  const onclickScheduleRoute = () => {
    // console.log('Nim');
    setIsScheduleRedirect(true);
    
  }
  const onclickProfileViewRoute = () => {
    // console.log('Nim');
    setIsProfileViewRedirect(true);
    
  }
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();
  return (
      <div>
        <CompanyHeader/>
          <br></br>
          <br></br>
          <br></br>

    <Card className={cx(styles.root, shadowStyles.root)} >
      <CardMedia
        classes={mediaStyles}
        image={
          'https://content.wisestep.com/wp-content/uploads/2017/05/professional-web-developer-resume-template.jpg'
        }
      />
      
      <CardActionArea>
        <CardContent className={styles.content}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            minHeight={560}
           
          >
            
          </Box>
       
        </CardContent>
      </CardActionArea>
      
    </Card>
    <Row p={2} gap={2} position={'bottom'}>
    <Item position={'middle-right'}>
            <Button
            
              variant={'contained'}
              color={'primary'}
              disableRipple
              onClick={onclickProfileViewRoute}
            >
                    View Profile
            </Button>
            {isProfileViewRedirect && <Redirect to='/profileview'/>}
          </Item>
          
          {/* <Item position={'middle-right'}>
            <Button
            
              variant={'contained'}
              color={'primary'}
              disableRipple
              onClick={onclickScheduleRoute}
            >
                    Schedule Interview
            </Button>
            {isScheduleRedirect && <Redirect to='/schedule'/>}
          </Item> */}
        </Row>
    <Row p={2} gap={2} position={'bottom'}>
    {/* <Item position={'middle-right'}>
            <Button
            
              variant={'contained'}
              color={'primary'}
              disableRipple
              onClick={onclickProfileViewRoute}
            >
                    View Profile
            </Button>
            {isProfileViewRedirect && <Redirect to='/profileview'/>}
          </Item> */}
          
          <Item position={'middle-right'}>
            <Button
            
              variant={'contained'}
              color={'primary'}
              disableRipple
              onClick={onclickScheduleRoute}
            >
                    Schedule Interview
            </Button>
            {isScheduleRedirect && <Redirect to='/schedule'/>}
          </Item>
        </Row>
  
  </div>
  );
});

export default Cv