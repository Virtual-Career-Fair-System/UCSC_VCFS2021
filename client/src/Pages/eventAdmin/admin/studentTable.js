import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {MainListItems, secondaryListItems} from './listItems';
import Chart from './Chart';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';

import Deposits from './Deposits';
import Deposits1 from './Deposits1';
import Deposits2 from './Deposits2';
import Deposits3 from './Deposits3';

import Orders from './Orders';
import Orders1 from './Orders1';
import StuTable from './stuTable';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 50, // keep right padding when drawer closed

        },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 10px',
        marginRight:'10px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: 2,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: 227,
        width: `calc(100% - ${314}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'initial',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        fontSize: 17,
    },
    fixedHeight: {
        height: 440,

    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List><MainListItems/></List>
                <Divider/>
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <StuTable/>
                                
                            </Paper>
                        </Grid>
                         {/* <Grid item xs={12} md={8} lg={9}>  
                             <Paper className={fixedHeightPaper}>  
                                 <Chart/>  

                             </Paper>  
                         </Grid>  
                         <Grid item xs={12} md={4} lg={3}>  
                             <Paper className={fixedHeightPaper}>  
                                 <Deposits/>  
                             </Paper>  
                         </Grid>  

                         <Grid item xs={12} md={8} lg={9}>  
                             <Paper className={fixedHeightPaper}>  
                                 <Chart1/>  

                             </Paper>  
                         </Grid>  
                         <Grid item xs={12} md={4} lg={3}>  
                             <Paper className={fixedHeightPaper}>  
                                 <Deposits1/>  
                             </Paper>  
                         </Grid>  
                         <Grid item xs={12} md={8} lg={9}>  
                             <Paper className={fixedHeightPaper}>  
                                 <Chart2/>  

                             </Paper>  
                         </Grid>  
                         <Grid item xs={12} md={4} lg={3}>  
                             <Paper className={fixedHeightPaper}>  
                                 <Deposits2/>  
                             </Paper>  
                         </Grid>  

                         <Grid item xs={12} md={8} lg={9}>  
                             <Paper className={fixedHeightPaper}>  
                                 <Chart3/>  

                             </Paper>  
                         </Grid>  
                         <Grid item xs={12} md={4} lg={3}>  
                             <Paper className={fixedHeightPaper}>  
                                 <Deposits3/>  
                             </Paper>  
                         </Grid>   
                        */}
                    </Grid>
                </Container>
            </main>
        </div>
    );
}
