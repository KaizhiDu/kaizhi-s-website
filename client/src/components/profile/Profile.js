/**
 * Created by Kaizhi Du on 2019/11/20.
 */
import React, { Fragment } from 'react';
import { Col, Media, Row, Button, Badge } from "react-bootstrap";
import profileMe from "../../img/profile_me.jpg";
import ProfileTop from "./ProfileTop";
import ProfileSkillSet from "./ProfileSkillSet";
import ProfileProficiency from "./ProfileProficiency";

const Profile = () => {
    return (
        <Fragment>
            <br/>
            <Row>
                <ProfileTop/>
            </Row>
            <hr/>
            <Row>
                <Col>
                    <ProfileSkillSet/>
                </Col>
                <Col>
                   <ProfileProficiency/>
                </Col>
            </Row>
            <hr/>
        </Fragment>
    )
}

export default Profile