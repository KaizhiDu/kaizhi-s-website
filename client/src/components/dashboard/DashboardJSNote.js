/**
 * Created by Kaizhi Du on 2019/11/20.
 */
import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import js from "../../img/javascript.jpg";
import { Link } from "react-router-dom";

const DashboardJSNote = () => {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={js} height='150px'/>
            <Card.Body>
                    123
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <Link to='/profile' style={{ textDecoration: 'none' }}>
                        如何成为一名合格的java程序员
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to='/profile' style={{ textDecoration: 'none' }}>
                        spring 基础教学
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to='/profile' style={{ textDecoration: 'none' }}>
                        spring 基础教学
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to='/profile' style={{ textDecoration: 'none' }}>
                        spring 基础教学
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to='/profile' style={{ textDecoration: 'none' }}>
                        spring 基础教学
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to='/profile' style={{ textDecoration: 'none' }}>
                        spring 基础教学
                    </Link>
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <div className='text-right'>
                    <Link to='/note' style={{ textDecoration: 'none' }}>
                        See more note
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default DashboardJSNote