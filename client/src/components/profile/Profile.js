/**
 * Created by Kaizhi Du on 2019/11/20.
 */
import React, { Fragment } from 'react';
import { Col, Row } from "react-bootstrap";
import ProfileTop from "./ProfileTop";
import ProfileSkillSet from "./ProfileSkillSet";
import ProfileProficiency from "./ProfileProficiency";
import ProfileEducation from "./ProfileEducation";
import ProfileExperience from "./ProfileExperience";

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
            <Row>
                <Col>
                    <ProfileEducation/>
                </Col>
                <Col>
                    <ProfileExperience/>
                </Col>
            </Row>
            <br/>
        </Fragment>
    )
}

export default Profile