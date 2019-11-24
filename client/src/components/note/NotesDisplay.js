/**
 * Created by Kaizhi Du on 2019/11/23.
 */
import React, { useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import { getNotes } from '../../actions/note';
import { Col, Row, Badge } from "react-bootstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const NotesDisplay = ({ getNotes, note: { loading, notes } }) => {

    useEffect(() => {
        getNotes();
    }, []);

    return loading ? <div>Loading...</div>
        :
        (
            <Fragment>
                {
                    notes.map(note => (
                            <div key={note._id}>
                                <Link to={`/note/${note._id}`} style={{ textDecoration: 'none', color: "#310b13" }}>
                                    <h1>{note.title}</h1>
                                </Link>
                                <p>{note.description}</p>
                                <Row>
                                    {
                                        note.types.map(type => {
                                            return <Badge className="NoteLabel" variant="info">{type}</Badge>
                                        })
                                    }
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="NoteDateText NoteDateLayout">
                                            <Moment fromat='YYYY/MM/DD'>{note.publishDate}</Moment>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="text-right">
                                            <Link to={`/note/${note._id}`}>
                                                <button className="btn btn-outline-info">click here</button>
                                            </Link>

                                        </div>
                                    </Col>
                                </Row>
                                <hr/>
                            </div>
                        )
                    )
                }
            </Fragment>
        )
};

const mapStateToProps = (state) => ({
    note: state.note
});

export default connect(mapStateToProps, { getNotes })(NotesDisplay);