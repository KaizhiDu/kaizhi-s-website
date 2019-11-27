/**
 * Created by Kaizhi Du on 2019/11/23.
 */
import React, { useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import { getNotes, getNotesWithPage } from '../../actions/note';
import { Col, Row, Badge, Pagination } from "react-bootstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";

// we need to get the skip, limit, and active from redux state
const NotesDisplay = ({ getNotes, getNotesWithPage, note: { loading, notes, notesWithPage, notesWithPageLoading, skip, limit, active } }) => {

    useEffect(() => {
        getNotes();
        // after fetch all the notes, we need to get notes with page info (skip, limit, and active)
        setTimeout(() => {
            getNotesWithPage({ skip, limit, active });
        }, 100);
    }, []);

    // after click the Pagination, we need to get the new page info (skip, limit, and active), and toggle the action getNotesWithPage
    const changePage = (number) => {
        const newSkip = (number - 1) * 5 + 1;
        getNotesWithPage({ skip: newSkip, limit, active: number });
    };

    // count the total page
    let totalPage = notes.length / 5 === 0 ? notes.length / 5 : notes.length / 5 + 1;
    // not like java, js need to parseInt, then can get the int type
    let intTotalPage = parseInt(Number(totalPage));
    let items = [];
    for (let number = 1; number <= totalPage; number++) {
        items.push(
            // click the Pagination toggle the function changePage
            <Pagination.Item key={number} active={number === active} onClick={() => changePage(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    ;

    return notesWithPageLoading ? <div>Loading...</div>
        :
        (
            <Fragment>
                {
                    notesWithPage.map(note => (
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
                <div style={{ float: 'right' }}>
                    <Pagination>
                        {active === 1 ?
                            (
                                <Pagination.First disabled/>
                            )
                            :
                            (
                                <Pagination.First onClick={() => changePage(1)}/>
                            )
                        }
                        {active === 1 ?
                            (
                                <Pagination.Prev disabled/>
                            )
                            :
                            (
                                <Pagination.Prev onClick={() => changePage(active - 1)}/>
                            )
                        }
                        <Pagination>{items}</Pagination>
                        {active === intTotalPage ?
                            (
                                <Pagination.Next disabled/>
                            )
                            :
                            (
                                <Pagination.Next onClick={() => changePage(active + 1)}/>
                            )
                        }

                        {active === intTotalPage ?
                            (
                                <Pagination.Last disabled/>
                            )
                            :
                            (
                                <Pagination.Last onClick={() => changePage(intTotalPage)}/>
                            )
                        }

                    </Pagination>
                </div>
            </Fragment>
        )
};

const mapStateToProps = (state) => ({
    note: state.note
});

export default connect(mapStateToProps, { getNotes, getNotesWithPage })(NotesDisplay);