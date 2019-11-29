/**
 * Created by Kaizhi Du on 2019/11/18.
 */
import React, { Fragment } from 'react';
import { Row, Col } from "react-bootstrap";
import DashboardProfile from "./DashboardProfile";
import DashboardNote from "./DashboardNote";
import DashboardProject from "./DashboardProject";
import DashboardSkills from "./DashboardSkills";

const dashboard = () => {

    return (
        <Fragment>
            <br/>
            <Row>
                <Col md={5}><DashboardProfile/></Col>
                <Col md={7}><DashboardNote/></Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr/>
            <h1 style={{"marginBottom":"8px"}}>My Skills</h1>
            <Row>
                <br/>
                <DashboardSkills/>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr/>
            <Row>
                <h1 style={{"marginBottom":"18px"}}>My Project</h1>
                <small className='ProjectClick'>
                    <a href='/project' className='text-muted' style={{ textDecoration: 'none' }}>
                        more projects
                    </a>
                </small>
                <DashboardProject/>
            </Row>
            <br/>
        </Fragment>
    )
}

export default dashboard;