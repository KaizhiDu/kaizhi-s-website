/**
 * Created by Kaizhi Du on 2019/11/23.
 */
import React from 'react';
import { Badge, Col, Row } from "react-bootstrap";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../utils/CodeBlock";
import code from './noteContent';

const NoteDisplay = ({ note }) => {

    return (
        <div>
            <h1>{note.title}</h1>
            <p className="small">{note.description}</p>
            <hr/>
            <p>
                <ReactMarkdown
                    source={code[note._id]}
                    escapeHtml={false}
                    renderers={{ code: CodeBlock }}
                />
            </p>
            <hr/>
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
                </Col>
            </Row>
            <hr/>
        </div>
    )
};

export default NoteDisplay