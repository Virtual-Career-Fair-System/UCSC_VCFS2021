import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {Col} from 'react-bootstrap';
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";
import vision from '../../assets/image/homePagePhotos/vision.jpg';
import aboutUs from '../../assets/image/homePagePhotos/aboutUs.jpg';
import {Container} from "react-bootstrap";

const useStyles = makeStyles({
    card: {
        textAlign:'center',
        marginTop:'5vh',
        marginLeft:'10vh',
        marginRight:'10vh',
        display: 'flex',
        height:'30em',
    },
    cardDetails: {
      marginTop:'inherit',
        flex: 1,
    },
    cardMedia: {
        width: '50%',
    },
    title: {
        textAlign:'center',
        marginTop:'10vh',
        fontSize:"3em",
    },
});

export default function Sidebar(props) {
  const classes = useStyles();
  const { archives, description, title, description1, title1 } = props;

  return (
      <>
      <Grid item xs={12} >
          <Typography component="h2" variant="h5" className={classes.title}>
              Our Vision
          </Typography>
              <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                      <CardContent>
                          <Typography variant="subtitle1" color="textSecondary">
                          Be a Global Leader in Computing, 
                          Advancing the Frontiers of 
                          new knowledge
                           through Learning and 
                           Research.
                          </Typography>
                      </CardContent>
                  </div>
                  <Hidden xsDown>
                      <CardMedia className={classes.cardMedia} image={aboutUs} title={'ss'} />
                  </Hidden>
              </Card>

      </Grid>

        <Grid item xs={12} >
            <Typography component="h2" variant="h5" className={classes.title}>
                Our Mission
            </Typography>
                <Card className={classes.card}>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image={vision} title={'ss'} />
                    </Hidden>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography variant="subtitle1" color="textSecondary">
                            To advance and enhance computing knowledge, fostering global strategic alliances, 
                            promoting cross disciplinary research, producing socially responsible professionals with entrepreneurial skills, 
                            leadership qualities and integrity contributing  to  position the country as a knowledge hub in the region.
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
        </Grid>
    </>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  title: PropTypes.string,
};