/**
 * Created by Kaizhi Du on 2019/11/20.
 */
import React, { useEffect, Fragment } from 'react';
import { Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNotes } from "../../actions/note";

const DashboardNote = ({ getNotes, note: { notes, loading } }) => {

    useEffect(() => {
        getNotes();
    }, []);

    const isFirstEight = (element, index) => {
        return (index < 8);
    };

    return loading ? <div>Loading...</div> : (
        <Fragment>
            <Row style={{"marginBottom":"8px"}}>
                <h1>Latest notes</h1>
                <small className='ProjectClick'>
                    <Link to='/note' className='text-muted' style={{ textDecoration: 'none' }}>
                        more notes
                    </Link>
                </small>
            </Row>
            <ListGroup>
                {
                    notes.filter(isFirstEight).map(note => (
                        <ListGroup.Item>
                            <div key={note._id}>
                                <Link to={`/note/${note._id}`} style={{ textDecoration: 'none', color: "#2e0480" }}>
                                    <h5>{note.title}</h5>
                                </Link>
                                <p style={{color: "#798078"}}>{note.description}</p>
                                <Row>
                                    <Col>

                                    </Col>
                                    <Col>
                                        {/*<div className="text-right">*/}
                                        {/*    <Moment fromat='YYYY/MM/DD HH:mm'>{note.publishDate}</Moment>*/}
                                        {/*</div>*/}
                                    </Col>
                                </Row>
                            </div>
                        </ListGroup.Item>

                        )
                    )
                }
            </ListGroup>

        </Fragment>
    )
};

const mapStateToProps = (state) => ({
    note: state.note
});

export default connect(mapStateToProps, { getNotes })(DashboardNote);