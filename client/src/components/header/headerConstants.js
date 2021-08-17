
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    toolbar: {
        borderBottom: `1px solid #cecece`,
        fontFamily: 'Raleway, sans-serif',
    },
    toolbarTitle: {
        flex: 1,
        fontFamily: 'Raleway, sans-serif',
        fontWeight:'600',
        fontSize:'2.5em',
        paddingLeft:'5em'
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        fontFamily: 'Raleway, sans-serif',
    },
    toolbarLink: {

        flexShrink: 0,
        cursor: "pointer",
        fontFamily: 'Raleway, sans-serif',
    },
}));

const useStyles2 = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(2),
                cursor: 'pointer'
            },
        },
    }),
);

export  {useStyles,useStyles2};
