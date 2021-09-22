import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {Col, Container, Row} from "react-bootstrap";
import Header from '../../components/header/Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from '../../components/footer/Footer';
import {featuredPosts, mainFeaturedPost, useStyles, sidebar} from './homeConstants';
import {Redirect} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {ILoginData} from "../../types/login";
import {useSelector} from "react-redux";
import {AppState} from "../../state/reducers";

const Home: React.FC = () => {
  const classes = useStyles();
  const [isRedirectNewCareerFair, setIsRedirectNewCareerFair] = useState(false);
  const handleOnclickOrganizeNewCareerFair = () => {
    setIsRedirectNewCareerFair(true);
  }
  const login: ILoginData = useSelector((state: AppState) => state.login.login);

  return (
    <React.Fragment>
      <Header title="Career Fair UCSC"/>
      <Container fluid={true}>
        <Row>
          <Col className='py-2 text-right'>
            {isRedirectNewCareerFair && <Redirect to='/organizeNewCareerFair'/>}
            {login.id && login.type == 'student' ?
              <Button variant="outlined" onClick={handleOnclickOrganizeNewCareerFair}>Organize New Carrier fair</Button>
              : ''}
          </Col>
        </Row>
        <main>
          <MainFeaturedPost post={mainFeaturedPost}/>

          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post}/>
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer"
              description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}

export default Home;
