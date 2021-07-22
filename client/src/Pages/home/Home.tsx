import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Container } from "react-bootstrap";
import Header from '../../components/header/Header';
import MainFeaturedPost from './MainFeaturedPost';
// import Markdown from 'markdown-to-jsx';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from '../../components/footer/Footer';
// import CvUpload from '../../components/cvcpload/CvUpload';
import { featuredPosts, mainFeaturedPost, useStyles, sidebar } from './homeConstants';
import Main from './Main';
// import post1 from './blog-post.1.';
// import post2 from './blog-post.2.';
// import post3 from './blog-post.3.';


import AdminProfile from '../admin/AdminProfile';
import Dashboard from '../admin/Dashboard';





// const posts = [post1, post2, post3];
const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header title="Career Fair UCSC" />
            <Container fluid={true}>
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} className={classes.mainGrid}>
                    {/* <Main title="From the firehose" posts={posts} /> */}
                        <Sidebar 
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                        />
                    </Grid>
                </main>
            </Container>
            
            {/* <AdminProfile /> */}
            <Footer title="Footer"
                description="Something here to give the footer a purpose!"
            />
            {/* <Dashboard/> */}
        </React.Fragment>
    );
}

export default Home;