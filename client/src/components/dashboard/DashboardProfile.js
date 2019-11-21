/**
 * Created by Kaizhi Du on 2019/11/20.
 */
import React, { Fragment } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import me from "../../img/me.jpg";
import { Link } from "react-router-dom";

const DashboardProfile = () => {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={me} height='400px'/>
            <Card.Body>
                <Card.Title>KAIZHI DU</Card.Title>
                <Card.Text>
                    I am a programmer. I have nothing but integrity and diligence.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <Row>
                        <Col md={5}><b>Language</b></Col>
                        <Col md={7}>Java Javascript</Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col md={5}><b>Framework</b></Col>
                        <Col md={7}>Spring Node React</Col>
                    </Row>
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <div className='text-right'>
                    <Link to='/profile' style={{ textDecoration: 'none' }}>
                        See me more
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default DashboardProfile