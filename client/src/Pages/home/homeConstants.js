import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import careerFareCover from '../../assets/image/homePagePhotos/careerFareCover.webp';
import companyPhoto from '../../assets/image/homePagePhotos/company.webp';
import studentPhoto from '../../assets/image/homePagePhotos/student.webp';

import { Image } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    card:{
        marginTop: theme.spacing(3),
        maxHeight:2
    }
}));

const mainFeaturedPost = {
    title: 'UCSC Virual Career Fair 2021',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: careerFareCover,
    imgText: 'main image description',
    linkText: 'Continue…',
};

const featuredPosts = [
    {
        title: 'Students',
        date: 'Nov 12',
        description:
            'Invitation to all UCSC undergraduates and graduates!, Highlight Your Education. As a student, ' +
            'you should highlight your academic successes at the beginning of your resume, before the “Experience” ' +
            'description. If you have completed any projects or taken courses related to the job you are applying for,' +
            ' you can include these as well. Invitation to all UCSC undergraduates and graduates!, Invitation to all ' +
            'UCSC undergraduates and graduates!.',
        image: studentPhoto,
        imageText: 'Image Text',
    },
    {
        title: 'Companies',
        date: 'Nov 11',
        description:
            'Organizations from the IT industry get an exclusive opportunity to meet with outstanding students and ' +
            'conduct interviews, recruitment, and company presentations to showcase their organization and to inform' +
            ' of every available career opportunity.If you are looking for skilled, talented, and innovative fresh ' +
            'graduates to make a difference in your company, Join Now.!Skilled and talented graduates await your call!!',
        image: companyPhoto,
        imageText: 'Image Text',
    },
];

const sidebar = {

    title: 'Our Vission',
    title1: 'Our Mission',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    description1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ]
}

export { featuredPosts, mainFeaturedPost, useStyles, sidebar };
