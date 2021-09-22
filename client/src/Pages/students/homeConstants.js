import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import ucsccover from '../../assets/image/homePagePhotos/ucsccover.jpg';
import companyPhoto from '../../assets/image/homePagePhotos/company.webp';
import studentPhoto from '../../assets/image/homePagePhotos/student.webp';

import { Image } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    card:{
        marginTop: theme.spacing(3),
        maxHeight:2,
        width: '100vw',
    }
}));

const mainFeaturedPost = {
    title: 'Graduates of University of Colombo School of Computing',
    description:
        " ",
    image: ucsccover,
    imgText: 'main image description',
    // linkText: 'Continue…',
};

const featuredPosts = [
    {
        title: 'Career Fair 2020',
        // date: 'Nov 12',
        description:
            "2020 career fair conducted by university of colombo school of computing next year graduate batch. Over 300 students and over 100 companies registered in UCSC PDC. "+
            "Career week conduct in 2020 December 3rd to 17th. MOre than 92% graduates and undergraduates got job oppertunities from this event. "+
            "Companies fulfilled their vacancy options after that event."+
            "We try to do our best as last year. "+
            "Good Luck for your career future!",
        
        image: studentPhoto,
        // imageText: 'Image Text',
    },
    // {
    //     title: 'Companies',
    //     // date: 'Nov 11',
    //     description:
    //         "",
    //     image: companyPhoto,
    //     imageText: 'Image Text',
    // },
];

const sidebar = {

    title: 'Our Vission',
    title1: 'Our Mission',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    description1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    archives: [
        { title: 'Career Fair 2020', url: '#' },
        { title: 'Career Fair 2019', url: '#' },
        { title: 'Career Fair 2018', url: '#' },
        { title: 'Career Fair 2017', url: '#' },
        { title: 'Career Fair 2016', url: '#' },
        { title: 'Career Fair 2015', url: '#' }
    ]
}

export { featuredPosts, mainFeaturedPost, useStyles, sidebar };