import React, { useState, useEffect } from 'react';
import CommentBody from '../CommentBody/CommentBody';

const Comments = ({postsId}) => {
    const [comments, setComments] = useState([])

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postsId}`;
        fetch( url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [postsId])
    return (
        <>
            {
                comments.map(comment => <CommentBody key =  {comment.id} comment={comment} />)
            }
        </>
    );
};

export default Comments;