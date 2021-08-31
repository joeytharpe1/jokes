import React from 'react';
import { useStyles } from './style/headerCss';

import Fade from 'react-reveal/Fade';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root} align='center' justify='center'>
            <Toolbar align="center" justify='center'>
                <Grid container>
                    <Grid item xs={12}>
                        <Fade up>
                            <Typography variant="h3" className={classes.button}>
                                <FormatQuoteIcon className={classes.flipped} />
                                Joke Generator
                                <FormatQuoteIcon />
                            </Typography>
                        </Fade>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    )
}

export default Header
