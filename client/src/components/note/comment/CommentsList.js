/**
 * Created by Kaizhi Du on 2019/11/24.
 */
import React from 'react';
import { Media } from "react-bootstrap";
import Moment from "react-moment";
import { connect } from "react-redux";
import { likeComment, unlikeComment } from '../../../actions/note';

const CommentsList = ({ note, comments, auth: { user }, likeComment, unlikeComment }) => {

    const checkExist = (likes) => {
        if (user === null) {
            return false;
        }
        if (likes.length === 0)
            return false;
        if (likes.indexOf(user._id) === -1) {
            return false;
        } else return true;
    };

    const like = (commentId) => {
        if (user === null) {
            alert("You need to login first");
        } else {
            const noteId = note._id;
            const userId = user._id;
            likeComment({ noteId, commentId, userId });
        }
    };

    const unlike = (commentId) => {
        if (user === null) {
            alert("You need to login first");
        } else {
            const noteId = note._id;
            const userId = user._id;
            unlikeComment({ noteId, commentId, userId });
        }
    };

    return comments.map(comment => {
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
                <div>
                    <div>
                        {checkExist(comment.likes) ?
                            (
                                <i
                                    className="fas fa-thumbs-up"
                                    style={{ "marginRight": "2px" }}
                                    onClick={() => unlike(comment._id)}
                                ></i>
                            )
                            :
                            (
                                <i
                                    className="far fa-thumbs-up"
                                    style={{ "marginRight": "2px" }}
                                    onClick={() => like(comment._id)}
                                ></i>
                            )
                        }
                        {comment.likes.length === 0 ? "" : comment.likes.length}
                        {/*<i className="far fa-comment-alt" style={{ "marginLeft": "10px" }}></i>*/}
                    </div>
                    <div className="text-right">
                        <span className="small"><Moment format="YYYY/MM/DD HH:mm">{comment.date}</Moment></span>
                    </div>
                </div>
                <hr/>
            </Media.Body>
        </Media>

    })
    //)
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    note: state.note.note
});

export default connect(mapStateToProps, { likeComment, unlikeComment })(CommentsList);