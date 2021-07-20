import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {useStyles, Copyright} from "./footerConstants";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import {Row, Col} from 'react-bootstrap';
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const Footer = (props) => {
    const classes = useStyles();
    const {description, title} = props;
    const social= [
        {name: 'GitHub', icon: GitHubIcon},
        {name: 'Twitter', icon: TwitterIcon},
        {name: 'Facebook', icon: FacebookIcon},
    ];

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Row className='justify-content-center'>
                    {social.map((network) => (
                        <div className='px-3'>
                            <Link display="block" variant="body1" href="#" key={network}>
                                <network.icon/>
                            </Link>
                        </div>
                    ))}
                </Row>
            </Container>
        </footer>
    );
}

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};

export default Footer;