/**
 * Created by Kaizhi Du on 2019/11/24.
 */
import React, { Fragment } from 'react';
import { Row, Media, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import CreateComment from "./CreateComment";
import { updateComment } from "../../../actions/note";
import CommentsList from "./CommentsList";

const Comments = ({ updateComment, auth: { isAuthenticated, user }, note: { note, noteLoading } }) => {
    const commentSubmit = (values) => {
        const { content } = values;
        const id = note._id;
        const userId = user._id;
        updateComment({ id, userId, content });
    };

    return (
        <Fragment>
            {
                isAuthenticated ?
                    (
                        <Row>
                            <Media style={{ "marginBottom": "7px" }}>
                                <img
                                    width={43}
                                    height={43}
                                    className="mr-3"
                                    src={user.avatar}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5 style={{ "marginTop": "7px" }}>{user.name}</h5>
                                </Media.Body>
                            </Media>
                            <CreateComment onSubmit={commentSubmit}/>
                        </Row>
                    ) :
                    (
                        <Row><Alert variant="warning">Login before giving a comment</Alert></Row>
                    )
            }
            <hr/>
            <Row>
                {
                    noteLoading ?
                        (
                            <div>Loading...</div>
                        )
                        :
                        (
                            <ul className="list-unstyled commentListWidth">
                                <CommentsList comments={note.comments}/>
                            </ul>
                        )
                }
            </Row>
        </Fragment>
    )
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    note: state.note
});

export default connect(mapStateToProps, { updateComment })(Comments);