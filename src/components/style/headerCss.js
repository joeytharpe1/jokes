import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.main,
            textDecoration: 'underline',
        }
    },
    button: {
        padding: 0,
        transition: "transform 0.15s ease-in-out",
        '&:hover': {
            color: theme.palette.primary.main,
            textDecoration: 'underline',
            transform: "scale3d(1.05, 1.05, 1)"
        }
    },
    flipped: {
        transform: 'rotateY(180deg)'
    },
    iconButton: {
        padding: 10,
    },
}));