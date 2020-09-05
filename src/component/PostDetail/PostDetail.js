import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
    root: {
        maxWidth: '50%',
        margin: '50px auto'
    },
    media: {
        height: 140,
    },
});

const PostDetail = () => {
    const classes = useStyles();
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const { id, title, body } = post;

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" component="p">
                        Post Id: {id}
                    </Typography>
                    <br/>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <hr></hr>
            <Comments postsId={id}></Comments>
        </Card>
    );
};

export default PostDetail;