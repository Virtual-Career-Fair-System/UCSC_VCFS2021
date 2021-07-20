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
            {friendCount} Meeting Link
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

export const StudentViewNotification = React.memo(function SocialCard() {
  const styles = useStyles();
  return (
    <div align="center">
    <h1> Student View Notification</h1>
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
        <PersonItem name={'Wso2'}  src={'data:image/png;base64,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'} />
        <Divider variant={'middle'} className={styles.divider} />
        <PersonItem name={'Virtusa'}  src={'http://bizenglish.adaderana.lk/wp-content/uploads/VirtusaLogo-Dec-11JPG6-1.jpg'} />
        <Divider variant={'middle'} className={styles.divider} />
        <PersonItem name={'Pearson'}  src={'https://www.britishcouncil.lk/sites/default/files/pearson.png'} />
        <Divider variant={'middle'} className={styles.divider} />
        <PersonItem name={'PickMe'}  src={'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_b036e85a65d2a2071d4eb61cfecb93bf/pick-me.png'} />
        <Divider variant={'middle'} className={styles.divider} />
        <PersonItem name={'LSEG'}  src={'https://assets.lsegissuerservices.com/original-20872d3e-3947-4500-bda2-a9bfc722aaea.png'} />
        </div>
      </Column>

    </div>
  );
});