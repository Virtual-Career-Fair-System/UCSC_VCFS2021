import React from 'react';
import cx from 'clsx';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import CompanyHeader from './CompanyHeader';

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
}));

const PersonItem = ({ src, name, friendCount }) => {
  const avatarStyles = useDynamicAvatarStyles({ size: 56 });
  const styles = usePersonStyles();
  return (
    <Row gap={2} p={2.5}>
      <Item>
        <Avatar classes={avatarStyles} src={src} />
      </Item>
      <Row wrap grow gap={0.5} minWidth={0}>
        <Item grow minWidth={0}>
          <div className={cx(styles.name, styles.text)}>{name}</div>
          <div className={cx(styles.caption, styles.text)}>
            {friendCount} Send CV
          </div>
        </Item>
        <Item position={'middle'}>
          <Button className={styles.btn} variant={'outlined'}>
            View
          </Button>
        </Item>
      </Row>
    </Row>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    width: '70%',
    
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    // justifyContent: 'center',
    overflow: 'hidden',
  },
  container:{
     
      
  },
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

export const CompanyViewNotification = React.memo(function SocialCard() {
  const styles = useStyles();
  return (
    <div align="center">
      <CompanyHeader/>
    {/* <h1>Company View Notification</h1> */}
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Barlow', weights: [400, 600] }]} />
      </NoSsr>
      <Column p={0} gap={0} className={styles.card}>
        <Row wrap p={2} alignItems={'baseline'} className={styles.header}>
        <div align="left">
          <Item stretched className={styles.headline}>New Notifications</Item>
          </div>
          
          
        </Row>
        <div align="left">
        <PersonItem name={'Nimantha Aravinda'}  src={'https://storage.googleapis.com/kaggle-avatars/images/7043707-gr.jpg'} />
        <Divider variant={'middle'} className={styles.divider} />
        <PersonItem name={'Praveen Himantha'}  src={'https://media-exp1.licdn.com/dms/image/C5103AQG4mUuen0cOlQ/profile-displayphoto-shrink_200_200/0/1575784022184?e=1631750400&v=beta&t=tOtvdSoyKpo_13CKAX65uCiZHsRJaK7D24hHqkT4rI8'} />
        <Divider variant={'middle'} className={styles.divider} />
        <PersonItem name={'Sudesh Bandara'}  src={'https://media-exp1.licdn.com/dms/image/C4D03AQF6PF0gSJvMrA/profile-displayphoto-shrink_100_100/0/1619644603260?e=1630540800&v=beta&t=SIke1EVVMXE5sZwUNXmjmvEvaVGSZIS8-8mUY-U4WBY'} />
        <Divider variant={'middle'} className={styles.divider} />
        <PersonItem name={'Lahiru Udayanga'}  src={'https://media-exp1.licdn.com/dms/image/C5103AQF51MV_dlkC5Q/profile-displayphoto-shrink_200_200/0/1570947463618?e=1631750400&v=beta&t=CI2gs97ZaqBfZTu7IGDkCQt5Z6mzae3HcCdeQVt5Apk'} />
        <Divider variant={'middle'} className={styles.divider} />
        <PersonItem name={'Pasindu Chanusha'}  src={'https://media-exp3.licdn.com/dms/image/C5103AQFxhlQutqOtbA/profile-displayphoto-shrink_100_100/0/1561217095242?e=1631750400&v=beta&t=FbuWPV1kByuCsvbu6rEVbgLZv3vrIsW1dkHOTPRU7rU'} />
        </div>
      </Column>

    </div>
  );
});