/**
 * Created by Kaizhi Du on 2019/11/20.
 */
import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import me from "../../img/me.jpg";

const DashboardProfile = () => {
    return (
        <Card style={{ width: '25rem' }}>
            <div style={{"marginTop":"20px"}} className="text-center">
                <img src={me} width="330px" height='400px'/>
            </div>

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
                        <Col md={7}>Java Javascript SQL</Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col md={5}><b>Contact</b></Col>
                        <Col md={7}>xiaobabao0807@gmail.com</Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col md={5}><b>Social Media</b></Col>
                        <Col md={7}>
                            <a href="https://www.linkedin.com/in/kaizhi-du-1588a8181/" target="_blank">
                                <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                            </a>
                            <a href="https://github.com/KaizhiDu" target="_blank">
                                <img src="https://img.icons8.com/nolan/48/000000/github.png"/>
                            </a>
                            <a href="https://twitter.com/KaizhiD" target="_blank">
                                <img src="https://img.icons8.com/color/48/000000/twitter.png"/>
                            </a>
                            <a href="https://www.instagram.com/kaizhidu/" target="_blank">
                                <img src="https://img.icons8.com/color/48/000000/instagram-new.png"/>
                            </a>
                        </Col>
                    </Row>
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <div className='text-right'>
                    <a href='/profile' style={{ textDecoration: 'none' }}>
                        See me more
                    </a>
                </div>
            </Card.Body>
        </Card>
    )
}

export default DashboardProfile