import React from 'react';
import Color from 'color';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {useFourThreeCardMediaStyles} from '@mui-treasury/styles/cardMedia/fourThree';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

const useGridStyles = makeStyles(({breakpoints}) => ({
    root: {
        [breakpoints.up('md')]: {
            justifyContent: 'center',
        },
    },
}));

const useStyles = makeStyles(() => ({
    actionArea: {
        borderRadius: 20,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.03)',
        },
    },
    card: ({color}) => ({
        maxWidth: 100,
        minWidth: 200,
        borderRadius: 16,
        boxShadow: 'none',
        '&:hover': {
            boxShadow: `0 6px 12px 0 ${Color(color)
                .rotate(-12)
                .darken(0.2)
                .fade(0.5)}`,
        },
    }),
    content: ({color}) => {
        return {
            backgroundColor: color,
            padding: '0.5rem 0.5rem 0.5rem',
        };
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: '1.5rem',
        color: '#fff',
        textTransform: 'uppercase',
    },
    subtitle: {
        fontFamily: 'Montserrat',
        color: '#fff',
        opacity: 0.87,
        marginTop: '2rem',
        fontWeight: 500,
        fontSize: 14,
    },
}));

const CustomCard = ({classes, image, title, subtitle}) => {
    const mediaStyles = useFourThreeCardMediaStyles();
    return (
        <CardActionArea className={classes.actionArea}>
            <Card className={classes.card}>
                <CardMedia classes={mediaStyles} image={image}/>
                <CardContent className={classes.content}>
                    <Typography className={classes.title} variant={'h2'}>
                        {title}
                    </Typography>
                    <Typography className={classes.subtitle}>{subtitle}</Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    );
};

const Album = (props) => {
    const [isJobRedirect, setIsJobRedirect] = useState(false);
    const gridStyles = useGridStyles();
    const onclickJobRoute = () => {
        console.log('Nim');
        setIsJobRedirect(true);
    }
    const styles = useStyles({color: '#203f52'});
    const styles2 = useStyles({color: '#4d137f'});
    const styles3 = useStyles({color: '#ff9900'});
    const styles4 = useStyles({color: '#34241e'});
    const history = useHistory();
    const handleOnClickCategory = (category) => {
        if (!props.thisEvent) {
            return;
        }
        history.push(`/currentEvents/student/${props.thisEvent.event_code}/${category}`);
    }

    return (
        <React.Fragment>
            <Grid classes={gridStyles} container spacing={2} >
                <Grid item onClick={() => handleOnClickCategory('Software Engineer (Backend)')}>
                    <CustomCard
                        classes={styles}
                        title={'Software Engineer'}
                        subtitle={'Backend'}
                        image={'/assets/se3.jfif'}
                    />
                </Grid>
                <Grid item onClick={() => handleOnClickCategory('Software Engineer (Full stack)')}>
                    <CustomCard
                        classes={styles2}
                        title={'Software Engineer'}
                        subtitle={'Full stack'}
                        image={'/assets/se2.jfif'}
                    />
                </Grid>
                <Grid item onClick={() => handleOnClickCategory('Software Engineer (Java/.Net)')}>
                    <CustomCard
                        classes={styles3}
                        title={'Software Engineer'}
                        subtitle={'Java/.Net'}
                        image={'/assets/se1.jfif'}
                    />
                </Grid>
                <Grid item onClick={() => handleOnClickCategory('business analyst')}>
                    <CustomCard
                        classes={styles4}
                        title={'business analyst'}
                        subtitle={'Are you ready?'}
                        image={'/assets/ba.jfif'}
                    />
                </Grid>
                <Grid item onClick={() => handleOnClickCategory('data analyst')}>
                    <CustomCard
                        classes={styles2}
                        title={'data analyst'}
                        subtitle={'Are you ready?'}
                        image={"/assets/da.jfif"}/>
                </Grid>
            </Grid>
            <Grid classes={gridStyles} container spacing={2} >
                <Grid item onClick={() => handleOnClickCategory('UI/UX Engineer')}>
                    <CustomCard
                        classes={styles4}
                        title={'UI/UX Engineer'}
                        subtitle={'Are you ready?'}
                        image={'/assets/ui.jfif'}
                    />
                </Grid>
                <Grid item onClick={() => handleOnClickCategory('project manage')}>
                    <CustomCard
                        classes={styles4}
                        title={'project manager'}
                        subtitle={'Are you ready?'}
                        image={'/assets/pm.jfif'}
                    />
                </Grid>
                <Grid item onClick={() => handleOnClickCategory('devops engineer')}>
                    <CustomCard
                        classes={styles4}
                        title={'devops engineer'}
                        subtitle={'Are you ready?'}
                        image={"/assets/dv.jfif"}
                    />
                </Grid>
                <Grid item onClick={() => handleOnClickCategory('quality assurance')}>
                    <CustomCard
                        classes={styles4}
                        title={'quality assurance'}
                        subtitle={'Are you ready?'}
                        image={'/assets/qa.jfif'}
                    />
                </Grid>
                <Grid item onClick={() => handleOnClickCategory('other vacancies')}>
                    <CustomCard
                        classes={styles4}
                        title={'other vacancies'}
                        subtitle={'Are you ready?'}
                        image={'/assets/other.jfif'}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Album