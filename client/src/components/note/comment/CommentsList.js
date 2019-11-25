/**
 * Created by Kaizhi Du on 2019/11/24.
 */
import React from 'react';
import { Media } from "react-bootstrap";
const CommentsList = ({ comments }) => {
    return (
        comments.map(comment => {
            return <Media key={comment._id} as="li">
                <img
                    width={32}
                    height={32}
                    className="mr-3"
                    src={comment.avatar}
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>{comment.name}</h5>
                    <p>{comment.text}</p>
                </Media.Body>
            </Media>
        })
    )
};

export default CommentsList