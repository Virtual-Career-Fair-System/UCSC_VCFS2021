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
              About Us
          </Typography>
              <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                      <CardContent>
                          <Typography variant="subtitle1" color="textSecondary">
                              The UCSC Career fair is a vital student activity conducted annually by fourth-year
                              undergraduates in collaboration with the Professional Development Center (PDC) of
                              University of Colombo School of Computing. The Professional Development Centre (PDC)
                              is one of the centers at UCSC, established to keep a close liaison with the IT industry
                              to improve the academic activities through industry-academia partnership. The mission
                              of the Professional Development Center is to produce socially responsible professionals
                              with entrepreneurial skills, leadership qualities, and integrity.
                              The center facilitates training programs to improve the professional
                              skills of both the academic staff and the undergraduates.
                              The PDC invites the IT industry to conduct awareness programs such as current
                              trends in the IT industry, industrial practices, career paths in various disciplines,
                              and, thus, creating value addition to enhance overall graduate quality and employability.
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
                Our Vision
            </Typography>
                <Card className={classes.card}>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image={vision} title={'ss'} />
                    </Hidden>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography variant="subtitle1" color="textSecondary">
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently with desktop publishing software like
                                Aldus PageMaker including versions of Lorem Ipsum.",
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
