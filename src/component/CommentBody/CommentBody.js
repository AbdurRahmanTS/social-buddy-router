import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ListItemAvatar, Avatar } from '@material-ui/core';

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
                    <Avatar alt="" src = "https://randomuser.me/img/creator_arron.png" />
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