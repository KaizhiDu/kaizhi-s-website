/**
 * Created by Kaizhi Du on 2019/11/20.
 */
import React from 'react';
import { Badge, Col, Row } from "react-bootstrap";

const ProfileSkillSet = () => {
    return (
        <div className="profile bg-light p-3">
            <div className='bg-light'>
                <div className='textSpace'>
                    <h2 className='text-secondary'>Skill Set</h2>
                    <br/>
                    <Row>
                        <Col md={3}>
                            <b className='text-info'>Language</b>
                        </Col>
                        <Col md={9}>
                            <h3>
                                <Badge className='skillSpace' pill variant='info'>Java</Badge>
                                <Badge className='skillSpace' pill variant='info'>Javascript</Badge>
                                <Badge className='skillSpace' pill variant='info'>C</Badge>
                                <Badge className='skillSpace' pill variant='info'>Python</Badge>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <b className='text-primary'>Framework</b>
                        </Col>
                        <Col md={9}>
                            <h3>
                                <Badge className='skillSpace' pill variant='primary'>Spring</Badge>
                                <Badge className='skillSpace' pill variant='primary'>Express</Badge>
                                <Badge className='skillSpace' pill variant='primary'>React</Badge>
                                <Badge className='skillSpace' pill variant='primary'>Angular</Badge>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <b className='text-secondary'>Database</b>
                        </Col>
                        <Col md={9}>
                            <h3>
                                <Badge className='skillSpace' pill variant='secondary'>Mysql</Badge>
                                <Badge className='skillSpace' pill variant='secondary'>Oracle</Badge>
                                <Badge className='skillSpace' pill variant='secondary'>SQL Server</Badge>
                                <Badge className='skillSpace' pill variant='secondary'>MongoDB</Badge>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <b className='text-dark'>Others</b>
                        </Col>
                        <Col md={9}>
                            <h3>
                                <Badge className='skillSpace' pill variant='dark'>HTML</Badge>
                                <Badge className='skillSpace' pill variant='dark'>CSS</Badge>
                                <Badge className='skillSpace' pill variant='dark'>Git</Badge>
                                <Badge className='skillSpace' pill variant='dark'>AWS</Badge>
                            </h3>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default ProfileSkillSet