
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        cursor: "pointer",
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