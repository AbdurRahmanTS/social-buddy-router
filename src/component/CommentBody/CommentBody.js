import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const CommentBody = ({comment}) => {
    const classes = useStyles();
    const {name, email, body} = comment;
    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <ListItem alignItems="flex-start" style={{paddingLeft: 0}}>
                            <Box fontWeight="fontWeightBold">
                                Name:                                    
                            </Box>
                            <span style={{marginLeft: 5}}>
                                {name}
                            </span>
                        </ListItem>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                <ListItem alignItems="flex-start" style={{paddingLeft: 0}}>
                                    <Box fontWeight="fontWeightBold">
                                        Email:                                    
                                    </Box>
                                    <span style={{marginLeft: 5}}>
                                        {email}
                                    </span>
                                </ListItem>
                            </Typography>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                <ListItem alignItems="flex-start" style={{paddingLeft: 0}}>
                                    <Box fontWeight="fontWeightBold">
                                        Comment:
                                    </Box>
                                    <span style={{marginLeft: 5}}>
                                        {body}
                                    </span>
                                </ListItem>
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
};

export default CommentBody;