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
import StudentHeader from '../../Pages/profile/StudentHeader';



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

export const Add = React.memo(function NewsCard2() {
  const [isCvUploadRedirect, setIsCvUploadRedirect] = useState(false);
  const onclickCvUploadRoute = () => {
    // console.log('Nim');
    setIsCvUploadRedirect(true);
    
  }
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();
  return (
      <div>
        <StudentHeader/>
          <br></br>
          <br></br>
          <br></br>

    <Card className={cx(styles.root, shadowStyles.root)} >
      <CardMedia
        classes={mediaStyles}
        image={
          'https://promolkwebsite.blob.core.windows.net/jobs/promo.lk-db2f156a78eb4e7c99fc41d6c329cd5b.jpg'
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
              onClick={onclickCvUploadRoute}
            >
                    Upload CV
            </Button>
            {isCvUploadRedirect && <Redirect to='/cvupload'/>}
          </Item>
        </Row>
  </div>
  );
});

export default Add