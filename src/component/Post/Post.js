import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '40px 0px'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
}));

const Post = (props) => {
    const { title, id, body } = props.post;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography  value="bold" aria-label="bold" gutterBottom variant="subtitle1">
                                    <Box fontWeight="fontWeightBold">
                                        {title}
                                    </Box>
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                        {body}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">
                                        <Link to={"/post/"+id} style={{ cursor: 'pointer', textDecoration: 'none'}}>
                                            <Button variant="contained" color="primary">
                                                See More
                                            </Button>
                                        </Link>
                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
};

export default Post;