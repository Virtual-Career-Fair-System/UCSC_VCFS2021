import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {Container} from "react-bootstrap";
import Header from '../header/Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from '../footer/Footer';
import {featuredPosts,mainFeaturedPost,useStyles,sidebar} from './homeConstants';

const Home:React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Header title="Career Fair UCSC"/>
            <Container fluid={true}>
                <main>
                    <MainFeaturedPost post={mainFeaturedPost}/>
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
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!"/>
        </React.Fragment>
    );
}

export default Home;