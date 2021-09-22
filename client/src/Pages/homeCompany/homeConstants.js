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
        maxHeight:2
    }
}));

const mainFeaturedPost = {
    title: 'UCSC Virual Career Fair 2021',
    description:
        "2021 virtual carrer fair orgaize by 4th year Undergraduate of University of Colombo school of Computing",
    image: ucsccover,
    imgText: 'main image description',
    /*linkText: 'Continue…',*/
};

const featuredPosts = [

    {
        title: 'Companies',
        // date: 'Nov 11',
        description:
            'Over 100+ Srilankan and out of Srilankan Companies work with us. '+
            'Every year they bring in fresh and advanced employees from our career fair program as their employees.',
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
        { title: 'Career Fair 2020', url: '#' },
        { title: 'Career Fair 2019', url: '#' },
        { title: 'Career Fair 2018', url: '#' },
        { title: 'Career Fair 2017', url: '#' },
        { title: 'Career Fair 2016', url: '#' },
        { title: 'Career Fair 2015', url: '#' }
    ]
}

export { featuredPosts, mainFeaturedPost, useStyles, sidebar };
