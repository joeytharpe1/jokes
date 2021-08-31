import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        marginTop: 50,
        marginBottom: 30
    },
    card: {
        backgroundColor: theme.palette.secondary.main,
        transition: "transform 0.15s ease-in-out",
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.main,
            transform: "scale3d(1.05, 1.05, 1)"
        }
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));