import React, { useState } from 'react'
import { useStyles } from './style/quoteCard';

import Fade from 'react-reveal/Fade';

import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';


// import Button from '@material-ui/core/Button';

function QuoteCard({ data }) {
    const classes = useStyles();
    const { setup, delivery } = data;

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container className={classes.root}>
            <Grid container justifyContent='center'>
                <Grid item xs={6}>
                    <Fade right>
                        <Card elevation={15} variant='outlined' className={classes.card}>
                            <CardContent>
                                <Fade left>
                                    <Typography variant='h4' color='textPrimary'>
                                        {setup}
                                    </Typography>
                                </Fade>
                            </CardContent>
                            <IconButton
                                className={(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon color='primary' />
                            </IconButton>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant='h5' color='primary'>
                                        {delivery}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Fade>
                </Grid>
            </Grid>
        </Container>
    )
}

export default QuoteCard
