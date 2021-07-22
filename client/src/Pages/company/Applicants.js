import React, { useState } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Slider from '@material-ui/core/Slider';
import { Redirect } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { useGraphicBtnStyles } from '@mui-treasury/styles/button/graphic';
import CompanyHeader from './CompanyHeader';


const useStyles = makeStyles(({ spacing, palette }) => {
  const family =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  return {
    card: {
      display: 'flex',
      padding: spacing(2),
      maxWidth: 800,
      borderRadius: 12,
      boxShadow: '0 2px 4px 0 rgba(138, 148, 159, 0.2)',
      '& > *:nth-child(1)': {
        marginRight: spacing(2),
      },
      '& > *:nth-child(2)': {
        flex: 'auto',
      },
    },
    avatar: {},
    heading: {
      fontFamily: family,
      fontSize: 16,
      marginBottom: 0,
    },
    subheader: {
      fontFamily: family,
      fontSize: 14,
      color: palette.grey[600],
      letterSpacing: '1px',
      marginBottom: 4,
    },
    value: {
      marginLeft: 8,
      fontSize: 14,
      color: palette.grey[500],
    },
  };
});

const useSliderStyles = makeStyles(() => ({
  root: {
    height: 4,
  },
  rail: {
    borderRadius: 10,
    height: 4,
    backgroundColor: 'rgb(202,211,216)',
  },
  track: {
    borderRadius: 10,
    height: 4,
    backgroundColor: 'rgb(117,156,250)',
  },
  thumb: {
    display: 'none',
  },
}));

export const Applicants = React.memo(function KanbanCard() {
  const styles = useStyles();
  const sliderStyles = useSliderStyles();
  const [isCvViewRedirect, setIsCvViewRedirect] = useState(false);
  const onclickCvViewRoute = () => {
    // console.log('Nim');
    setIsCvViewRedirect(true);

  }
  return (
    <div align="center">
      <CompanyHeader />
      <br></br>
      <br></br>
      <Card className={cx(styles.card)} elevation={0}>
        <Avatar src={'https://media-exp1.licdn.com/dms/image/C5103AQG4mUuen0cOlQ/profile-displayphoto-shrink_200_200/0/1575784022184?e=1631750400&v=beta&t=tOtvdSoyKpo_13CKAX65uCiZHsRJaK7D24hHqkT4rI8'} className={styles.avatar} />
        <Box>
          <h3 className={styles.heading}>Praveen Himantha</h3>
          {/* <p className={styles.subheader}>23 y.o • Sri Lanka</p> */}

        </Box>
        <Row p={2} gap={2} position={'bottom'}>

          <Item position={'middle-right'}>
            <Button

              variant={'contained'}
              color={'primary'}
              disableRipple
              onClick={onclickCvViewRoute}
            >
              View
              {isCvViewRedirect && <Redirect to='/cvview' />}
            </Button>
          </Item>
        </Row>
        <Row p={2} gap={2} position={'bottom'}>

          <Item position={'middle-right'}>
            <Button

              variant={'contained'}
              color={'primary'}
              disableRipple
            >
              Available
            </Button>
          </Item>
        </Row>
      </Card>
      <br></br>
      <Card className={cx(styles.card)} elevation={0}>
        <Avatar src={'https://storage.googleapis.com/kaggle-avatars/images/7043707-gr.jpg'} className={styles.avatar} />
        <Box>
          <h3 className={styles.heading}>Nimantha Aravinda</h3>
          {/* <p className={styles.subheader}>23 y.o • Sri Lanka</p> */}

        </Box>
        <Row p={2} gap={2} position={'bottom'}>

          <Item position={'middle-right'}>
            <Button

              variant={'contained'}
              color={'primary'}
              disableRipple
            >
              View
            </Button>
          </Item>
        </Row>
        <Row p={2} gap={2} position={'bottom'}>

          <Item position={'middle-right'}>
            <Button

              variant={'contained'}
              color={'secondary'}
              disableRipple
            >
              Not Available
            </Button>
          </Item>
        </Row>
      </Card>
      <br></br>
      <Card className={cx(styles.card)} elevation={0}>
        <Avatar src={'https://media-exp1.licdn.com/dms/image/C4D03AQF6PF0gSJvMrA/profile-displayphoto-shrink_100_100/0/1619644603260?e=1630540800&v=beta&t=SIke1EVVMXE5sZwUNXmjmvEvaVGSZIS8-8mUY-U4WBY'} className={styles.avatar} />
        <Box>
          <h3 className={styles.heading}>Sudesh Bandara</h3>
          {/* <p className={styles.subheader}>23 y.o • Sri Lanaka</p> */}

        </Box>
        <Row p={2} gap={2} position={'bottom'}>

          <Item position={'middle-right'}>
            <Button

              variant={'contained'}
              color={'primary'}
              disableRipple
            >
              View
            </Button>
          </Item>
        </Row>
        <Row p={2} gap={2} position={'bottom'}>

          <Item position={'middle-right'}>
            <Button

              variant={'contained'}
              color={'secondary'}
              disableRipple
            >
              Not Available
            </Button>
          </Item>
        </Row>
      </Card>
      <br></br>
      <Card className={cx(styles.card)} elevation={0}>
        <Avatar src={'https://media-exp3.licdn.com/dms/image/C5103AQFxhlQutqOtbA/profile-displayphoto-shrink_100_100/0/1561217095242?e=1631750400&v=beta&t=FbuWPV1kByuCsvbu6rEVbgLZv3vrIsW1dkHOTPRU7rU'} className={styles.avatar} />
        <Box>
          <h3 className={styles.heading}>Pasindu Chanusha</h3>
          {/* <p className={styles.subheader}>23 y.o • Sri Lanka</p> */}

        </Box>
        <Row p={2} gap={2} position={'bottom'}>

          <Item position={'middle-right'}>
            <Button

              variant={'contained'}
              color={'primary'}
              disableRipple
            >
              View
            </Button>
          </Item>
        </Row>
        <Row p={2} gap={2} position={'bottom'}>

          <Item position={'middle-right'}>
            <Button

              variant={'contained'}
              color={'primary'}
              disableRipple
            >
              Available
            </Button>
          </Item>
        </Row>
      </Card>
      <br></br>
      <Card className={cx(styles.card)} elevation={0}>
        <Avatar src={'https://media-exp1.licdn.com/dms/image/C5103AQF51MV_dlkC5Q/profile-displayphoto-shrink_200_200/0/1570947463618?e=1631750400&v=beta&t=CI2gs97ZaqBfZTu7IGDkCQt5Z6mzae3HcCdeQVt5Apk'} className={styles.avatar} />
        <Box>
          <h3 className={styles.heading}>Lahiru Udayanga</h3>
          {/* <p className={styles.subheader}>25 y.o • Sri Lanka</p> */}

        </Box>
        <Row p={2} gap={2} position={'bottom'}>

          <Item position={'middle-right'}>
            <Button

              variant={'contained'}
              color={'primary'}
              disableRipple
            >
              View
            </Button>
          </Item>
        </Row>
        <Row p={2} gap={2} position={'bottom'}>

          <Item position={'middle-right'}>
            <Button

              variant={'contained'}
              color={'secondary'}
              disableRipple
            >
             Not Available
            </Button>
          </Item>
        </Row>
      </Card>
    </div>
  );
});


export default Applicants;