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

const PersonItem = ({ src, name, friendCount }: any) => {
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
            {friendCount} Send Message
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
    <div >
      <CompanyHeader title={''}/>
    {/* <h1>Company View Notification</h1> */}
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Barlow', weights: [400, 600] }]} />
      </NoSsr>
      <Column p={0} gap={0} className={styles.card}>
        <Row wrap p={2} alignItems={'baseline'} className={styles.header}>
        <div >
          <Item stretched className={styles.headline}>New Notifications</Item>
          </div>
          
          
        </Row>
        <div >
        <PersonItem name={'Nimantha Aravinda'}  src={'https://storage.googleapis.com/kaggle-avatars/images/7043707-gr.jpg'} />
        <Divider variant={'middle'} className={styles.divider} />
        <PersonItem name={'Praveen Himantha'}  src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASERAQEBAWEBAVDRMbEBYVEBcQEA4SIB0iIiAdHx8kKDQsJCYxJx8fJDMtMSstOjAwIys9ODMtNzQuOi0BCgoKDg0NFg0NGisZExkrLSsrKysrNysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAGQAZAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBQYHBAj/xAA4EAABAwIDBQcCBAUFAAAAAAABAAIDBBEFEiEGEzFBUQcUMmFxgZEisaHB0fAzUnLS4SRCQ2KS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A0HdDohuvJdeVFkQcu68vwQEY6LpLFF7T4mKSkqKk2vHES0Hg5/Bo+SEEZtFtZR0RDZycxFwGgOd8Xus+xPtglzHu1LG1l9DKS97h1sCLfis7xLEJZ5ZJpnF8rnXcT+nRceW40480F7g7V8QD8zmwvbfw7stA9De6vWyfaRTVjhDKzu0x8OZwMb/IO0sfIrB0EHrINFtNUlzB0WI9m+37qRwpqpxfTOIDHE3NMf7fLktspqlkjQ5jg5vUFAGsHROtYOiNjU81qqmsnkgn7I0DxCLKlolEIyKmdr0gbhc4tcvfE0DzzB32BV2sqB22xk4Zfk2qjLvSzh9yEGJYVg1VUm0EDngg/UG/R8nRd7dhMRvrTuaD6H7LYsGqhR0dKzdPmd3dpyxMzHhc/dPYVtZHUSmIwPhIHB5AefZBkzuzWrDQ4uaCeIJNwFX8WwKWA5XC56hbftltK2ljGRrXSO8LXG3uswxOqnqrvdJADx3bSc4CCn0cBfIyMC5c9oA5kk2Xp7Z3CBTQNiDi4jVxPM/JWE7GGKLFqR05DYs5JJNmtOV1ifey9IBqBuNqeaxKibonQ1A3kQTuRBFIQSy1EWohKrm3lAamlNGLB07rBzuEeX6gfloHurJZcOLURka0jR7HXbrbkQfwJQVTuMs1HAxshjtFGJMozZ7CxaoTZvYV0c7pZCdJS5rnOu/09FdKSr3IdGW3IdpYcv3dQZ2sY7vBa5pfG+waRcNPTiEEXtvhwNbBKf5bAuF2gjUXChh2ft1kGhFyAL6k+d0/tVj9dKY93C0cncHlxI5cbc1B4bt3NGTA5htoNdcpQRTaZjJ370DSFwF+IN9F6FwWNwpqcPN3injzHzyi6y3ZLY9mIvfVSyEMZMGlob/F0zHXl4gtiawCwHADRApjdEqyUGI8iKQjS8iJA3ZFZKQVBWQR2Qsgru2LSyLvLRcxavA4mM8fjj8qp7I4ZTxSzVkLmvke5xJyh4DXa2V/x3EIqenlmn/htYcw5v8A+o9VhFNV1FDJ3mjaZaOZgcI/EY2nW3sojSMd21LQ5jSGPIs0iI5r+mqyHH6vIXbzWRz8xJGpKlaztOkdcd3AJFteqpldLPUvMkn20CC+7Cdp8NBSinfTPleZ3ukcHtaLG3DroPJbphtbHPFHNE7NG9t2n9815DigO8azq8Lcuy3aqnhY+jqHiI70ujc42jNxq2/LhfXqg1hvBGkQytc0OY4PaeBa4OB90tVQQQQRTSKyNEoyAQcQBcmwHEqI2j2gho4w+T6nHwMHif8A481leP7WVVVcOdu4v5GGwPqeaB3tG2l71IYoz/p4yctv+V/N36JPZvO19KI3+Jj3tHpfT7qrTA8Oatmw+DPibPG6wkbUOuL8L2NkEvjOBRShpIGmvhH3VWqsHiY02sSXaK/d0Lmi414FQmN0jYQ177NaDc+iDN34SWyiQizRmtdNbzM4kcLqRxXEpKg5RZsYJtYW06JiGmAFkHXh1dNEc0Mr4ndWPLPsrng3aXVR2FQ1tQzmbZJfkaH4VHDbJVkG00vaLhrmhzpXRO5tdE4kfFwgsUcEEHpJJcbAk8ANUaitqazdUk7xx3ZA9Tp+aDJdpq90875Hm93kM6Nj5AKNbFew8rn0Tdyco43cu6VuVrzzJsP6Qg4XxfQDzun8IxGSCTO3Xk5pOjwjlFo2edyud7UGo4Ricc0QlYbCxzgnVh5grNdo8UfVyue8ndg2jb/ta39UVFiMkIlDT9MkbmuHtofVcQagQyMDhwSmjilD8EbQoEEIjw90spt/AqhDzqUEzUO1Hogg9LlVbtGeRSW6y6/+XFBBVWTQD6o/X813Vx1cOQAsiQURz1HBn9KZKCCBEqQ4oIIAOCARoKIQUzIdCjQVVyVB19ggggg//9k='} />
        <Divider variant={'middle'} className={styles.divider} />
        <PersonItem name={'Sudesh Bandara'}  src={'https://media-exp1.licdn.com/dms/image/C4D03AQF6PF0gSJvMrA/profile-displayphoto-shrink_100_100/0/1619644603260?e=1635379200&v=beta&t=7ymFD6A8Zs96biyOQNHDdtNEPNecin0LNiYppQ5azP0'} />
        <Divider variant={'middle'} className={styles.divider} />
        <PersonItem name={'Lahiru Udayanga'}  src={'https://media-exp1.licdn.com/dms/image/C5103AQF51MV_dlkC5Q/profile-displayphoto-shrink_200_200/0/1570947463618?e=1637193600&v=beta&t=aawE7LBB7d1dqX8xZAE85Ax9Rq8wk7DekGC3mcQTLYc'} />
        <Divider variant={'middle'} className={styles.divider} />
        <PersonItem name={'Pasindu Chanusha'}  src={'https://media-exp1.licdn.com/dms/image/C5103AQFxhlQutqOtbA/profile-displayphoto-shrink_200_200/0/1561217095242?e=1637798400&v=beta&t=DRxjIh4Gceo3t4GvP5ltoyg2lrCcU7Rl40qdqq8RotY'} />
        </div>
      </Column>

    </div>
  );
});